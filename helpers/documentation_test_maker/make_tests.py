#!/usr/bin/env python3

import os
from string import Template
import json
import glob
from pathlib import Path

major_version = 7
minor_version = 0
patch_version = 0

def slurp(path):
    with open(path) as _slurp:
        return _slurp.read()

def scrub_segment(input):
    return "".join([ x.capitalize() for x in input.split(".")])

def lowercase_segment(input):
    return "".join([ x.lower() for x in input.split(".")])


class Test():
    def __init__(self, category, item, id):
        self._category = category
        self._item = item
        self._id = id

    def category(self):
        return self._category

    def connection_key(self, extra):
        parts = ["Test"]
        parts.append(self.scrubbed_segment('category'))
        parts.append(self.scrubbed_segment('item'))
        parts.append(self.scrubbed_segment('id'))
        parts.append(extra)
        return "".join(parts)

    def get_key(self, num, override):
        if override == "":
            parts = []
            parts.append(self.lowercase_segment('category'))
            parts.append(self.lowercase_segment('item'))
            parts.append(self.lowercase_segment('id'))
            # parts.append(f"x{num}")
            return "".join(parts)
        else:
            return override

    def get_value(self, num, override):
        if override == "":
            parts = ["value"]
            parts.append(self.lowercase_segment('id'))
            # parts.append(f"x{num}")
            return "".join(parts)
        else:
            return override

    def html_content(self):
        path = f"tests/{major_version}/{minor_version}/{patch_version}/{self.category()}/{self.item()}/{self.id()}/html.html"
        skeleton = slurp(path)
        template = Template(skeleton)
        data = {
                "METHOD_NAME": self.method_name(),
                "KEY1": self.get_key(1, ""),
                "VALUE1": self.get_value(1, "")
                }
        output = template.substitute(data)
        return output

    def id(self):
        return self._id

    def item(self):
        return self._item

    def javascript_content(self):
        path = f"tests/{major_version}/{minor_version}/{patch_version}/{self.category()}/{self.item()}/{self.id()}/javascript.js"
        skeleton = slurp(path)
        template = Template(skeleton)
        data = {
                "METHOD_NAME": self.method_name(),
                "KEY1": self.get_key(1, ""),
                "VALUE1": self.get_value(1, "")
                }
        output = template.substitute(data)
        return output

    def lowercase_segment(self, key):
        if key == "category":
            return lowercase_segment(self.category())
        elif key == "id":
            return lowercase_segment(self.id())
        elif key == "item":
            return lowercase_segment(self.item())

    def method_name(self):
        parts = ["run"]
        parts.append(self.scrubbed_segment('category'))
        parts.append(self.scrubbed_segment('item'))
        parts.append(self.scrubbed_segment('id'))
        return "".join(parts)

    def scrubbed_segment(self, key):
        if key == "category":
            return scrub_segment(self.category())
        elif key == "id":
            return scrub_segment(self.id())
        elif key == "item":
            return scrub_segment(self.item())


class TestMaker():
    def __init__(self):
        pass
        # config_name = f"config-{major_version}-{minor_version}-{patch_version}.json"
        # with open(config_name, 'r') as json_file:
        #     self.config = json.load(json_file)

    def base_dir(self):
        return f"../../content/documentation/{major_version}/{minor_version}/{patch_version}/_includes"
    
    def get_template(self, test, file):
        path = f"{self.template_dir()}/{file}"
        with open(path) as _in:
            return Template(_in.read())

    def get_test_file(self, test, file):
        path = f"{self.tests_dir()}/{test.category()}/{test.item()}/{test.id()}/{file}"
        with open(path) as _in:
            return Template(_in.read())

    def get_output_path(self, test, file):
        dir = f"{self.base_dir()}/{test.category()}/{test.item()}/_examples/generated-{test.id()}"
        if not os.path.isdir(dir):
            Path(dir).mkdir()
        path = f"{dir}/{file}"
        return path

    def get_tests(self):
        tests_dir = f"tests/{major_version}/{minor_version}/{patch_version}"
        tests = []
        for category_dir in glob.glob(f"{tests_dir}/*"):
            if os.path.isdir(category_dir):
                category = Path(category_dir).name
                for item_dir in glob.glob(f"{category_dir}/*"):
                    if os.path.isdir(item_dir):
                        item = Path(item_dir).name
                        for test_dir in glob.glob(f"{item_dir}/*"):
                            if os.path.isdir(test_dir):
                                test = Path(test_dir).name
                                t = Test(category, item, test)
                                tests.append(t)
        return tests 

        # category_dirs = [
        #     Path(dir).name for dir in glob.glob(f"{tests_dir}/*")
        #     if os.path.isdir(dir)
        # ]
        #print(category_dirs)

        # for category in self.config["categories"]:
        #     for item in category["items"]:
        #         for test in item["tests"]:
        #             t = Test(
        #                     category["name"],
        #                     item["name"],
        #                     test["id"],
        #             )
        #             tests.append(t)


    def make_html_files(self):
        tests = self.get_tests()
        for test in tests:
            template = self.get_template(test, "html.html")
            data = {
                    "CONNECTION": test.connection_key(""),
                    "BITTY_TAG_EXTRA": "",
                    "CONTENT": test.html_content()
                    }
            output = template.substitute(data)
            output_path = self.get_output_path(test, f"html.html")
            print(output_path)
            self.write_file(output, output_path)

    def make_javascript_files(self):
        tests = self.get_tests()
        for test in tests:
            template = self.get_template(test, "javascript.js")
            data = {
                    "CONNECTION": test.connection_key(""),
                    "BITTY_TAG_EXTRA": "",
                    "CONTENT": test.javascript_content(),
                    }
            output = template.substitute(data)
            output_path = self.get_output_path(test, "javascript.js")
            self.write_file(output, output_path)

    def make_names(self):
        tests = self.get_tests()
        for test in tests:
            input_path = f"tests/{major_version}/{minor_version}/{patch_version}/{test.category()}/{test.item()}/{test.id()}/name.txt"
            output_path = self.get_output_path(test, "name.txt")
            output = slurp(input_path)
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

    def template_dir(self):
        return "templates"

    def tests_dir(self):
        return f"tests/{major_version}/{minor_version}/{patch_version}"

    def write_file(self, data, path):
        dir_path = os.path.dirname(path)
        if not os.path.isdir(dir_path):
            Path(dir_path).mkdir()
        with open(path, "w") as _out:
            _out.write(data)


if __name__ == "__main__":
    tm = TestMaker()
    tm.make_html_files()
    tm.make_javascript_files()
    tm.make_names()
    # tm.make_stubs()
    # tm.make_descriptions()
    # tm.make_html_files()
    # tm.make_javascript_files()
    # tm.make_method_name_files()
    # tm.make_name_files()
    # tm.make_postscript_files()
    # tm.make_supplementals()
    # tm.make_target_values()

