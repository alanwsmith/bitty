#!/usr/bin/env python3

import os
import uuid

from pathlib import Path 
from shutil import copy2
from string import Template

section_files = [
    "_section_name.html", "_section_overview.html"
]

item_files = [
    "_item_description.html", "_item_name.html", "_item_notes.html"
]

test_files = [
    "_test_description.html", "_test_name.html", "_test_notes.html"
]

def delete_file(file_path):
    try:
        os.remove(file_path)
    except OSError:
        pass

class Maker:
    def __init__(self):
        self.input_root = "../_input"
        self.output_root = "../sections"

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

    def make_sections(self):
        for file_name in section_files:
            with open(f"templates/sections/section/{file_name}") as _in:
                template = Template(_in.read())
                for dir in self.dir_list():
                    output_path = f"{self.input_root}/{dir[0]}/{file_name}"
                    data = self.replacements(dir)
                    output = template.substitute(data)
                    print(output_path)
                    with open(output_path, "w") as _out:
                        _out.write(output)

    def make_items(self):
        for file_name in item_files:
            with open(f"templates/sections/section/item/{file_name}") as _in:
                template = Template(_in.read())
                for dir in self.dir_list():
                    output_path = f"{self.input_root}/{dir[0]}/{dir[1]}/{file_name}"
                    data = self.replacements(dir)
                    output = template.substitute(data)
                    print(output_path)
                    with open(output_path, "w") as _out:
                        _out.write(output)

    def make_tests(self):
        for file_name in test_files:
            with open(f"templates/sections/section/item/test/{file_name}") as _in:
                template = Template(_in.read())
                for dir in self.dir_list():
                    output_path = f"{self.input_root}/{dir[0]}/{dir[1]}/{dir[2]}/{file_name}"
                    data = self.replacements(dir)
                    output = template.substitute(data)
                    print(output_path)
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

