#!/usr/bin/env python3

import os
from string import Template
import json
from pathlib import Path

major_version = 7
minor_version = 0
patch_version = 0


class Test():
    def __init__(self, category, item, id):
        self._category = category
        self._item = item
        self._id = id

    def category(self):
        return self._category

    def id(self):
        return self._id

    def item(self):
        return self._item


class TestMaker():
    def __init__(self):
        config_name = f"config-{major_version}-{minor_version}-{patch_version}.json"
        with open(config_name, 'r') as json_file:
            self.config = json.load(json_file)

    def base_dir(self):
        return f"../../content/documentation/{major_version}/{minor_version}/{patch_version}/_includes"
    
    def connection(self, test):
        name = f"Test{test.category()}{test.item()}{test.id()}"
        name = name.replace(".", "")
        return name

    def get_template(self, test, file):
        path = f"{self.template_dir()}/{file}"
        with open(path) as _in:
            return Template(_in.read())

    def get_output_path(self, test, file):
        dir = f"{self.base_dir()}/{test.category()}/{test.item()}/_examples/generated-{test.id()}"
        if not os.path.isdir(dir):
            Path(dir).mkdir()
        path = f"{dir}/{file}"
        return path

    def get_tests(self):
        tests = []
        for category in self.config["categories"]:
            for item in category["items"]:
                for test in item["tests"]:
                    t = Test(
                            category["name"],
                            item["name"],
                            test["id"],
                    )
                    tests.append(t)
        return tests 

    def make_html_files(self):
        tests = self.get_tests()
        for test in tests:
            template = self.get_template(test, "html.html")
            data = {
                    "CONNECTION": self.connection(test),
                    "BITTY_TAG_EXTRA": "",
                    "CONTENT": ""
                    }
            output = template.substitute(data)
            output_path = self.get_output_path(test, f"html.html")
            self.write_file(output, output_path)

    def make_javascript_files(self):
        tests = self.get_tests()
        for test in tests:
            template = self.get_template(test, "javascript.js")
            data = {
                    "CONNECTION": self.connection(test),
                    "CONTENT": ""
                    }
            output = template.substitute(data)
            output_path = self.get_output_path(test, "javascript.js")
            self.write_file(output, output_path)

    def make_names(self):
        tests = self.get_tests()
        for test in tests:
            input_path = f"tests/{test.category()}/{test.item()}/{test.id()}/name.txt"
            output_path = self.get_output_path(test, "name.txt")
            output = self.slurp(input_path)
            self.write_file(output, output_path)




    def make_stubs(self):
        tests = self.get_tests()
        for test in tests:
            path = self.get_output_path(test, "_supplemental_string.txt")
            self.write_file("", path)
            path = self.get_output_path(test, "_method_name.txt")
            self.write_file("", path)
            path = self.get_output_path(test, "_target_value.txt")
            self.write_file("", path)
            path = self.get_output_path(test, "description.html")
            self.write_file("", path)
            path = self.get_output_path(test, "postscript.html")
            self.write_file("", path)

    def slurp(self, path):
        with open(path) as _slurp:
            return _slurp.read()

    def template_dir(self):
        return "templates"

    def write_file(self, data, path):
        dir_path = os.path.dirname(path)
        if not os.path.isdir(dir_path):
            Path(dir_path).mkdir()
        with open(path, "w") as _out:
            _out.write(data)


if __name__ == "__main__":
    tm = TestMaker()
    tm.make_stubs()
    tm.make_html_files()
    tm.make_javascript_files()
    tm.make_names()
    # tm.make_descriptions()
    # tm.make_html_files()
    # tm.make_javascript_files()
    # tm.make_method_name_files()
    # tm.make_name_files()
    # tm.make_postscript_files()
    # tm.make_supplementals()
    # tm.make_target_values()

