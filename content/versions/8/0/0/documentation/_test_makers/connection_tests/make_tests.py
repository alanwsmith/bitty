#!/usr/bin/env python3

import os
import uuid

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
        namespace = uuid.UUID("6ba7b811-9dad-11d1-80b4-00c04fd430c8")
        path_parts = self.dir.split("/")
        input = "".join(
                [
                "class",
                "_",
                self.scrubString(path_parts[1]),
                "_",
                self.scrubString(path_parts[2]),
                "_",
                self.scrubString(path_parts[3])
                ]
            )
        return f"Class_{str(uuid.uuid5(namespace, input))[:5]}"


    def generate_output(self, input):
        path_parts = self.dir.split("/")
        template = Template(input)
        data = {
                "CLASS_NAME": f"Class_{self.hash()}",
                "CLASS2_NAME": f"Class_2_{self.hash()}",
                "CLASS3_NAME": f"Class_3_{self.hash()}",
                "CLASS4_NAME": f"Class_4_{self.hash()}",
                "CLASS5_NAME": f"Class_5_{self.hash()}",
                "DIR1": path_parts[1],
                "DIR2": path_parts[2],
                "DIR3": path_parts[3],
                "SIGNAL_NAME": f"signal_{self.hash()}",
                "SIGNAL2_NAME": f"signal_2_{self.hash()}",
                "SIGNAL3_NAME": f"signal_3_{self.hash()}",
                "SIGNAL4_NAME": f"signal_4_{self.hash()}",
                "SIGNAL5_NAME": f"signal_5_{self.hash()}",
                "STORAGE_KEY": f"storage_{self.hash()}",
                "CLICK_CLASS": f"clickme-{self.hash()}",
            }
        return template.substitute(data)

    def hash(self):
        namespace = uuid.UUID("6ba7b811-9dad-11d1-80b4-00c04fd430c8")
        return str(uuid.uuid5(namespace, str(self.dir)))[:5]

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

    def remote_javascript_content(self):
        path = os.path.join(self.dir, "remote-javascript.js")
        content = slurp(path)
        return content

    def remote_javascript_output_path(self):
        return os.path.join(self.output_dir(), "remote-javascript.js")

    def scrubString(self, input):
        return input.replace("-", "_")

    def signal_name(self, num):
        namespace = uuid.UUID("6ba7b811-9dad-11d1-80b4-00c04fd430c8")
        path_parts = self.dir.split("/")
        input = "".join(
                [
                "signal",
                str(num), 
                "_",
                self.scrubString(path_parts[1]),
                "_",
                self.scrubString(path_parts[2]),
                "_",
                self.scrubString(path_parts[3])
                ]
            )
        return f"signal_{str(uuid.uuid5(namespace, input))[:5]}"


    def write_files(self):
        with open(self.html_output_path(), "w") as _out:
            _out.write(self.generate_output(self.html_content()))
        with open(self.javascript_output_path(), "w") as _out:
            _out.write(self.generate_output(self.javascript_content()))
        with open(self.name_output_path(), "w") as _out:
            _out.write(self.generate_output(self.name_content()))
        with open(self.remote_javascript_output_path(), "w") as _out:
            _out.write(self.generate_output(self.remote_javascript_content()))


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


