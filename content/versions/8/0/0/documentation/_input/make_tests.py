#!/usr/bin/env python3

import os
import uuid
import shutil

from pathlib import Path 
from string import Template

item_files = [
    "item_description.html", "item_name.html", "item_notes.html"
]

section_files = [
    "section_name.html", "section_overview.html"
]

test_files = [
    "test_bitty_tags.html",
    "test_description.html", 
    "test_html.html", 
    "test_javascript.js", 
    "test_name.html", 
    "test_notes.html",
    "test_status.html",
    "test_trigger_javascript.js",
]

version = ["8", "0", "0", "-beta4"]


def delete_file(file_path):
    try:
        os.remove(file_path)
    except OSError:
        pass

def write_file_with_mkdir(content, path):
    dir = os.path.dirname(path)
    if dir != "":
        os.makedirs(dir, exist_ok=True)
    with open(path, "w") as _out:
        _out.write(content)

def make_dir_for_file(path):
    dir = os.path.dirname(path)
    if dir != "":
        os.makedirs(dir, exist_ok=True)

def empty_folder(path):
    for item in Path(path).iterdir():
        shutil.rmtree(item) if item.is_dir() else item.unlink()

class Maker:
    def __init__(self):
        self.input_dir = "../_input"
        self.output_dir = "../sections"
        self.templates_dir = "../_templates"

    def copy_files(self):
        for dir in self.dir_list(self.input_dir):
            if len(dir[0]) == 1:
                data = self.get_replacements(dir)
                for file in section_files:
                    input_path = f"{self.input_dir}/{dir[0][0]}/_{file}"
                    output_path = f"{self.output_dir}/{dir[0][0]}/{file}"
                    output_dir = os.path.dirname(output_path)
                    input_path2 = f"{self.input_dir}/{dir[0][0]}/{file}"
                    output_path2 = f"{self.output_dir}/{dir[0][0]}/{file}"
                    output_dir2 = os.path.dirname(output_path2)
                    Path(output_dir).mkdir(parents=True, exist_ok=True)
                    if os.path.isfile(input_path) == True:
                        with open(input_path) as _in1:
                            template = Template(_in1.read())
                            output = template.substitute(data)
                            with open(output_path, "w") as _out1:
                                _out1.write(output)
                    if os.path.isfile(input_path2) == True:
                        Path(output_dir2).mkdir(parents=True, exist_ok=True)
                        with open(input_path2) as _in2:
                            template = Template(_in2.read())
                            output = template.substitute(data)
                            with open(output_path2, "w") as _out2:
                                _out2.write(output)
            if len(dir[0]) == 2:
                data = self.get_replacements(dir)
                for file in item_files:
                    input_path = f"{self.input_dir}/{dir[0][0]}/{dir[0][1]}/_{file}"
                    output_path = f"{self.output_dir}/{dir[0][0]}/{dir[0][1]}/{file}"
                    output_dir = os.path.dirname(output_path)
                    input_path2 = f"{self.input_dir}/{dir[0][0]}/{dir[0][1]}/{file}"
                    output_path2 = f"{self.output_dir}/{dir[0][0]}/{dir[0][1]}/{file}"
                    output_dir2 = os.path.dirname(output_path2)
                    Path(output_dir).mkdir(parents=True, exist_ok=True)
                    if os.path.isfile(input_path) == True:
                        with open(input_path) as _in1:
                            template = Template(_in1.read())
                            output = template.substitute(data)
                            with open(output_path, "w") as _out1:
                                _out1.write(output)
                    if os.path.isfile(input_path2) == True:
                        Path(output_dir2).mkdir(parents=True, exist_ok=True)
                        with open(input_path2) as _in2:
                            template = Template(_in2.read())
                            output = template.substitute(data)
                            with open(output_path2, "w") as _out2:
                                _out2.write(output)
            if len(dir[0]) == 3:
                data = self.get_replacements(dir)
                for file in test_files:
                    input_path = f"{self.input_dir}/{dir[0][0]}/{dir[0][1]}/{dir[0][2]}/_{file}"
                    output_path = f"{self.output_dir}/{dir[0][0]}/{dir[0][1]}/{dir[0][2]}/{file}"
                    output_dir = os.path.dirname(output_path)
                    input_path2 = f"{self.input_dir}/{dir[0][0]}/{dir[0][1]}/{dir[0][2]}/{file}"
                    output_path2 = f"{self.output_dir}/{dir[0][0]}/{dir[0][1]}/{dir[0][2]}/{file}"
                    output_dir2 = os.path.dirname(output_path2)
                    Path(output_dir).mkdir(parents=True, exist_ok=True)
                    if os.path.isfile(input_path) == True:
                        with open(input_path) as _in1:
                            template = Template(_in1.read())
                            output = template.substitute(data)
                            with open(output_path, "w") as _out1:
                                _out1.write(output)
                    if os.path.isfile(input_path2) == True:
                        Path(output_dir2).mkdir(parents=True, exist_ok=True)
                        with open(input_path2) as _in2:
                            template = Template(_in2.read())
                            output = template.substitute(data)
                            with open(output_path2, "w") as _out2:
                                _out2.write(output)


    def dir_list(self, path):
      return [self.parse_dir(dir) for dir in os.walk(path)]

    def empty_output_folder(self):
        empty_folder(self.output_dir)

    def get_replacements(self, dir):
        data = {
                "_DOCS_DIR_": f"/versions/{version[0]}/{version[1]}/{version[2]}/documentation"
                }
        data["_SECTIONS_DIR_"] = f"{data["_DOCS_DIR_"]}/sections"
        if len(dir[0]) == 3:
            data["_SIGNAL_"] = f"signal_{self.id(dir)}"
            data["_SIGNAL2_"] = f"signal_{self.id(dir)}_2"
            data["_SIGNAL3_"] = f"signal_{self.id(dir)}_3"
            data["_TEST_ID_"] = self.id(dir)
            data["_TEST_DIR_"] = f"{data["_SECTIONS_DIR_"]}/{dir[0][0]}/{dir[0][1]}/{dir[0][2]}"

        return data

    def id(self, dir):
        namespace = uuid.UUID("6ba7b811-9dad-11d1-80b4-00c04fd430c8")
        return str(uuid.uuid5(namespace, str("".join(dir[0]))))[:5].upper()

    def parse_dir(self, dir):
        return (dir[0].split("/")[2:], dir[2])

    def stub_files(self):
        for dir in self.dir_list(self.input_dir):
            if len(dir[0]) == 1:
                for file in section_files:
                    check_path = f"{self.input_dir}/{dir[0][0]}/{file}"
                    input_path = f"{self.templates_dir}/section/_{file}"
                    output_path = f"{self.input_dir}/{dir[0][0]}/_{file}"
                    if os.path.isfile(check_path) == False:
                        shutil.copy2(input_path, output_path)
            if len(dir[0]) == 2:
                for file in item_files:
                    check_path = f"{self.input_dir}/{dir[0][0]}/{dir[0][1]}/{file}"
                    input_path = f"{self.templates_dir}/section/item/_{file}"
                    output_path = f"{self.input_dir}/{dir[0][0]}/{dir[0][1]}/_{file}"
                    if os.path.isfile(check_path) == False:
                        shutil.copy2(input_path, output_path)
            if len(dir[0]) == 3:
                for file in test_files:
                    check_path = f"{self.input_dir}/{dir[0][0]}/{dir[0][1]}/{dir[0][2]}/{file}"
                    input_path = f"{self.templates_dir}/section/item/test/_{file}"
                    output_path = f"{self.input_dir}/{dir[0][0]}/{dir[0][1]}/{dir[0][2]}/_{file}"
                    if os.path.isfile(check_path) == False:
                        shutil.copy2(input_path, output_path)



if __name__ == "__main__":
    m = Maker()
    m.stub_files()
    m.empty_output_folder()
    m.copy_files()


