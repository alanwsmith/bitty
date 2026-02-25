#!/usr/bin/env python3

import os
import uuid
import shutil

from pathlib import Path 
from string import Template

item_files = [
    "_item_description.html", "_item_name.html", "_item_notes.html"
]

section_files = [
    "_section_name.html", "_section_overview.html"
]

test_files = [
    "_test_description.html", "_test_name.html", "_test_notes.html"
]

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
        self.input_root = "../_input"
        self.output_root = "../sections"
        self.templates_root = "../_templates"

    def clear_output_folder(self):
        empty_folder(self.output_root)

    def copy_section_files(self):
        for dir_parts in self.dir_list():
            for section_file in section_files:
                input_alfa = f"{self.input_root}/{dir_parts[0]}/{section_file}"
                output_alfa = f"{self.output_root}/{dir_parts[0]}/{section_file}"
                if os.path.isfile(input_alfa):
                    make_dir_for_file(output_alfa)
                    shutil.copy2(input_alfa, output_alfa)
                bravo_file = section_file.replace("_", "", 1)
                input_bravo = f"{self.input_root}/{dir_parts[0]}/{bravo_file}"
                output_bravo = f"{self.output_root}/{dir_parts[0]}/{bravo_file}"
                if os.path.isfile(input_bravo):
                    make_dir_for_file(output_bravo)
                    shutil.copy2(input_alfa, output_bravo)

    def dir_list(self):
        items = []
        for dir in os.walk(self.input_root):
            dir_parts = dir[0].split("/")
            if (len(dir_parts) == 5):
                items.append(dir_parts[2:])
        return items

    def id(self, dir_parts):
        namespace = uuid.UUID("6ba7b811-9dad-11d1-80b4-00c04fd430c8")
        return str(uuid.uuid5(namespace, str("".join(dir_parts))))[:5].upper()

    def make_items(self):
        for file_name in item_files:
            with open(f"{self.templates_root}/sections/section/item/{file_name}") as _in:
                template = Template(_in.read())
                for dir in self.dir_list():
                    output_path = f"{self.input_root}/{dir[0]}/{dir[1]}/{file_name}"
                    data = self.replacements(dir)
                    output = template.substitute(data)
                    # print(output_path)
                    with open(output_path, "w") as _out:
                        _out.write(output)

    def make_sections(self):
        for file_name in section_files:
            with open(f"{self.templates_root}/sections/section/{file_name}") as _in:
                template = Template(_in.read())
                for dir in self.dir_list():
                    output_path = f"{self.input_root}/{dir[0]}/{file_name}"
                    data = self.replacements(dir)
                    output = template.substitute(data)
                    # print(output_path)
                    with open(output_path, "w") as _out:
                        _out.write(output)

    def make_tests(self):
        for file_name in test_files:
            with open(f"{self.templates_root}/sections/section/item/test/{file_name}") as _in:
                template = Template(_in.read())
                for dir in self.dir_list():
                    output_path = f"{self.input_root}/{dir[0]}/{dir[1]}/{dir[2]}/{file_name}"
                    data = self.replacements(dir)
                    output = template.substitute(data)
                    # print(output_path)
                    with open(output_path, "w") as _out:
                        _out.write(output)

    def replacements(self, dir_parts):
        data = {
                "_ITEM_NAME_": dir_parts[1],
                "_SECTION_NAME_": dir_parts[0],
                "_TEST_NAME_": dir_parts[2],
                "_TEST_ID_": self.id(dir_parts),
                }
        return data


if __name__ == "__main__":
    m = Maker()
    m.make_sections()
    m.make_items()
    m.make_tests()
    m.clear_output_folder()
    m.copy_section_files()

