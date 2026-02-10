#!/usr/bin/env python3

import os

from pathlib import Path 

class Test():
    def __init__(self, dirItem):
        self.dir = dirItem[0]

    def output_dir(self):
        path_parts = self.dir.split("/")
        return os.path.join("../../_includes", path_parts[1], "items", path_parts[2], "tests", path_parts[3])


class TestMaker():
    def make_test(self, dir): 
        if "html.html" in dir[2]:
            return Test(dir)

    def make_tests(self):
        for test in [self.make_test(dir) for dir in os.walk("_tests")]:
            if test is not None:
                Path(test.output_dir()).mkdir(exist_ok=True)



if __name__ == "__main__":
    tm = TestMaker()
    tm.make_tests()


