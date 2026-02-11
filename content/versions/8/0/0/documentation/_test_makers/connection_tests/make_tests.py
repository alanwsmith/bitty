#!/usr/bin/env python3

import os

from pathlib import Path 
from string import Template

def slurp(path):
    if os.path.isfile(path):
        with open(path) as _in:
            return _in.read()
    else:
        return ""

class Test():
    def __init__(self, dirItem):
        self.dir = dirItem[0]

    def class_name(self):
        path_parts = self.dir.split("/")
        return "".join(
                [
                "Class",
                "_",
                self.scrubString(path_parts[1]),
                "_",
                self.scrubString(path_parts[2]),
                "_",
                self.scrubString(path_parts[3])
                ]
            )

    def generate_output(self, input):
        path_parts = self.dir.split("/")
        template = Template(input)
        data = {
                "CLASS_NAME": self.class_name(),
                "DIR1": path_parts[1],
                "DIR2": path_parts[2],
                "DIR3": path_parts[3],
                "SIGNAL_NAME": self.signal_name(),
                "SIGNAL2_NAME": f"{self.signal_name()}2",
                "SIGNAL3_NAME": f"{self.signal_name()}3",
                }
        return template.substitute(data)

    def html_content(self):
        path = os.path.join(self.dir, "html.html")
        content = slurp(path)
        return content

    def html_output_path(self):
        return os.path.join(self.output_dir(), "html.html")

    def javascript_content(self):
        path = os.path.join(self.dir, "javascript.js")
        content = slurp(path)
        return content

    def javascript_output_path(self):
        return os.path.join(self.output_dir(), "javascript.js")

    def name_content(self):
        path = os.path.join(self.dir, "name.html")
        content = slurp(path)
        return content

    def name_output_path(self):
        return os.path.join(self.output_dir(), "name.html")

    def output_dir(self):
        path_parts = self.dir.split("/")
        return os.path.join("../../includes", path_parts[1], "items", path_parts[2], "tests", path_parts[3])

    def scrubString(self, input):
        return input.replace("-", "_")

    def signal_name(self):
        path_parts = self.dir.split("/")
        return "".join(
                [
                "signal",
                "_",
                self.scrubString(path_parts[1]),
                "_",
                self.scrubString(path_parts[2]),
                "_",
                self.scrubString(path_parts[3])
                ]
            )

    def write_files(self):
        with open(self.html_output_path(), "w") as _out:
            _out.write(self.generate_output(self.html_content()))
        with open(self.name_output_path(), "w") as _out:
            _out.write(self.generate_output(self.name_content()))
        with open(self.javascript_output_path(), "w") as _out:
            _out.write(self.generate_output(self.javascript_content()))




class TestMaker():
    def make_test(self, dir): 
        if "html.html" in dir[2]:
            return Test(dir)

    def make_tests(self):
        for test in [self.make_test(dir) for dir in os.walk("_tests")]:
            if test is not None:
                Path(test.output_dir()).mkdir(exist_ok=True)
                test.write_files()


if __name__ == "__main__":
    tm = TestMaker()
    tm.make_tests()


