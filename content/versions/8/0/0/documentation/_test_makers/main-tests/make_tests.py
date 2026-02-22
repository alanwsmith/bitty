#!/usr/bin/env python3

import os
import uuid

from pathlib import Path 
from shutil import copy2
from string import Template

def slurp(path):
    if os.path.isfile(path):
        with open(path) as _in:
            return _in.read()
    else:
        return ""

class ContentMover():
    def __init__(self):
        with open("_templates/html-wrapper.html") as _in:
            self.html_wrapper = Template(_in.read())

    def move_content(self):
        file_names = ["name.html", "description.html", "notes.html", "bitty_tag.html", "window_class.html"]
        for dir in os.walk("_tests"):
            for file in dir[2]:
                if file in file_names:
                    input_path = f"{dir[0]}/{file}"
                    parts = input_path.split("/")
                    if len(parts) == 3:
                        output_path = f"../../includes/{parts[1]}/{parts[2]}"
                    elif len(parts) == 4:
                        output_path = f"../../includes/{parts[1]}/items/{parts[2]}/{parts[3]}"
                    elif len(parts) == 5:
                        output_path = f"../../includes/{parts[1]}/items/{parts[2]}/tests/{parts[3]}/{parts[4]}"
                    if output_path != None:
                        with open(input_path) as _in:
                            data = {"HTML_CONTENT": _in.read() }
                            output_dir = os.path.dirname(output_path)
                            Path(output_dir).mkdir(parents=True, exist_ok=True)
                            output= self.html_wrapper.substitute(data)
                            with open(output_path, "w") as _out:
                                _out.write(output)


    def move_other_files(self):
        file_names = ["payload.txt", "payload.html", "payload.json", "payload.svg"]
        for dir in os.walk("_tests"):
            for file in dir[2]:
                if file in file_names:
                    input_path = f"{dir[0]}/{file}"
                    parts = input_path.split("/")
                    output_path = f"../../includes/{parts[1]}/items/{parts[2]}/tests/{parts[3]}/{parts[4]}"
                    output_dir = os.path.dirname(output_path)
                    Path(output_dir).mkdir(parents=True, exist_ok=True)
                    copy2(input_path, output_path)


class Test():
    def __init__(self, dirItem):
        self.dir = dirItem[0]

    def bitty_tag_output_path(self):
        return os.path.join(self.output_dir(), "bitty_tag.html")

    def bitty_tag_content(self):
        path = os.path.join(self.dir, "bitty_tag.html")
        content = slurp(path)
        return content
        #return f"""<bitty-8-0 data-connect="Class{self.hash()}"></bitty-8-0>"""

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
                "CLASS_NAME": f"Class{self.hash()}",
                "CLASS2_NAME": f"Class{self.hash()}_2",
                "CLASS3_NAME": f"Class{self.hash()}_3",
                "CLASS4_NAME": f"Class{self.hash()}_4",
                "CLASS5_NAME": f"Class{self.hash()}_5",
                "DIR1": path_parts[1],
                "DIR2": path_parts[2],
                "DIR3": path_parts[3],
                "SIGNAL_NAME": f"signal_{self.hash()}",
                "SIGNAL2_NAME": f"signal_{self.hash()}_2",
                "SIGNAL3_NAME": f"signal_{self.hash()}_3",
                "SIGNAL4_NAME": f"signal_{self.hash()}_4",
                "SIGNAL5_NAME": f"signal_{self.hash()}_5",
                "STORAGE_KEY": f"key-{self.hash()}",
                # TODO Find an replace to switch
                # `CLICK_CLASS` to `STYLE_NAME`
                # then remove it. 
                "CLICK_CLASS": f"el-{self.hash()}",
                "STYLE_NAME": f"el-{self.hash()}",
                "ID_NAME": f"id-{self.hash()}",
                "EXAMPLE_NAME": f"example-{self.hash()}",
                "HASH": self.hash(),
            }
        return template.substitute(data)

    def hash(self):
        namespace = uuid.UUID("6ba7b811-9dad-11d1-80b4-00c04fd430c8")
        return str(uuid.uuid5(namespace, str(self.dir)))[:5].upper()

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

    def window_class_content(self):
        path = os.path.join(self.dir, "window_class.html")
        content = slurp(path)
        return content
        #return f"""Window.Class{self.hash()} = class {{"""

    def window_class_output_path(self):
        return os.path.join(self.output_dir(), "window_class.html")
        # return os.path.join(self.output_dir(), "window_class.html")

    def write_files(self):
        with open(self.html_output_path(), "w") as _out:
            _out.write(self.generate_output(self.html_content()))
        with open(self.javascript_output_path(), "w") as _out:
            _out.write(self.generate_output(self.javascript_content()))
        with open(self.name_output_path(), "w") as _out:
            _out.write(self.generate_output(self.name_content()))
        with open(self.remote_javascript_output_path(), "w") as _out:
            _out.write(self.generate_output(self.remote_javascript_content()))
        with open(self.bitty_tag_output_path(), "w") as _out:
            _out.write(self.bitty_tag_content())
        with open(self.window_class_output_path(), "w") as _out:
            _out.write(self.window_class_content())
            




class TestMaker():
    def make_test(self, dir): 
        if "html.html" in dir[2]:
            return Test(dir)

    def make_tests(self):
        for test in [self.make_test(dir) for dir in os.walk("_tests")]:
            if test is not None:
                Path(test.output_dir()).mkdir(parents=True, exist_ok=True)
                test.write_files()


if __name__ == "__main__":
    tm = TestMaker()
    tm.make_tests()
    c = ContentMover()
    c.move_content()
    c.move_other_files()

