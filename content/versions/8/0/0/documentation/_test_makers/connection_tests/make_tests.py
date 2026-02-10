#!/usr/bin/env python3

import os

from pathlib import Path 

def slurp(path):
    if os.path.isfile(path):
        with open(path) as _in:
            return _in.read()
    else:
        return ""

class Test():
    def __init__(self, dirItem):
        self.dir = dirItem[0]

    def html_content(self):
        path = os.path.join(self.dir, "html.html")
        content = slurp(path)
        return content

    def html_output_path(self):
        return os.path.join(self.output_dir(), "html.html")

    def name_content(self):
        path = os.path.join(self.dir, "name.html")
        content = slurp(path)
        return content

    def name_output_path(self):
        return os.path.join(self.output_dir(), "name.html")

    def output_dir(self):
        path_parts = self.dir.split("/")
        return os.path.join("../../_includes", path_parts[1], "items", path_parts[2], "tests", path_parts[3])

    def write_files(self):
        with open(self.html_output_path(), "w") as _out:
            _out.write(self.html_content())
        with open(self.name_output_path(), "w") as _out:
            _out.write(self.name_content())



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


