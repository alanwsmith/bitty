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
        self.input_dir = "../_input"
        self.output_dir = "../sections"
        self.templates_dir = "../_templates"

    def dir_list(self, path):
      return [self.parse_dir(dir) for dir in os.walk(path)]

    def empty_output_folder(self):
        empty_folder(self.output_dir)

    def id(self, dir_parts):
        namespace = uuid.UUID("6ba7b811-9dad-11d1-80b4-00c04fd430c8")
        return str(uuid.uuid5(namespace, str("".join(dir_parts))))[:5].upper()

    def parse_dir(self, dir):
        return (dir[0].split("/")[2:], dir[2])

    def stub_files(self):
        for dir in self.dir_list(self.input_dir):
            if len(dir[0]) == 1:
                for file in section_files:
                    input_path = f"{self.templates_dir}/section/{file}"
                    output_path = f"{self.input_dir}/{dir[0][0]}/{file}"
                    shutil.copy2(input_path, output_path)
            if len(dir[0]) == 2:
                for file in item_files:
                    input_path = f"{self.templates_dir}/section/item/{file}"
                    output_path = f"{self.input_dir}/{dir[0][0]}/{dir[0][1]}/{file}"
                    shutil.copy2(input_path, output_path)
            if len(dir[0]) == 3:
                for file in test_files:
                    input_path = f"{self.templates_dir}/section/item/test/{file}"
                    output_path = f"{self.input_dir}/{dir[0][0]}/{dir[0][1]}/{dir[0][2]}/{file}"
                    shutil.copy2(input_path, output_path)




    

    
    

    # def copy_section_files(self):
    #     for dir in self.dir_list():
    #         if (len(dir) == 1):
    #             for file_name in section_files:
    #                 path_key = "/".join(dir)
    #                 source_path = f"{self.input_dir}/{path_key}/{file_name}"
    #                 dest_dir = f"{self.output_dir}/{path_key}"
    #                 dest_path = f"{dest_dir}/{file_name}"
    #                 Path(dest_dir).mkdir(parents=True, exist_ok=True)
    #                 shutil.copy2(source_path, dest_path)

            # if (len(dir) == 2):
            #     for file_name in item_files:
            #         path_key = "/".join(dir)
            #         source_path = f"{self.input_dir}/{path_key}/{file_name}"
            #         dest_dir = f"{self.output_dir}/{path_key}"
            #         dest_path = f"{dest_dir}/{file_name}"
            #         Path(dest_dir).mkdir(parents=True, exist_ok=True)
            #         shutil.copy2(source_path, dest_path)

            # if (len(dir) == 3):
            #     for file_name in test_files:
            #         path_key = "/".join(dir)
            #         source_path = f"{self.input_dir}/{path_key}/{file_name}"
            #         dest_dir = f"{self.output_dir}/{path_key}"
            #         dest_path = f"{dest_dir}/{file_name}"
            #         Path(dest_dir).mkdir(parents=True,exist_ok=True)
            #         shutil.copy2(source_path, dest_path)


                # for section_file in section_files:
                #     input_alfa = f"{self.input_dir}/{dir_parts[0]}/{section_file}"
                #     output_alfa = f"{self.output_dir}/{dir_parts[0]}/{section_file}"
                #     if os.path.isfile(input_alfa):
                #         make_dir_for_file(output_alfa)
                #         shutil.copy2(input_alfa, output_alfa)
                #     bravo_file = section_file.replace("_", "", 1)
                #     input_bravo = f"{self.input_dir}/{dir_parts[0]}/{bravo_file}"
                #     output_bravo = f"{self.output_dir}/{dir_parts[0]}/{bravo_file}"
                #     if os.path.isfile(input_bravo):
                #         make_dir_for_file(output_bravo)
                #         shutil.copy2(input_bravo, output_bravo)

    # def dir_list(self):
    #     items = []
    #     for dir in os.walk(self.input_dir):
    #         dir_parts = dir[0].split("/")
    #         if (len(dir_parts) >= 3):
    #             items.append(dir_parts[2:])
    #     return items

    # def dir_list_v2(self):
    #     return [
    #             dir for dir in os.walk(self.input_dir) 
    #             ]

    # def stub_items(self):
    #     for file_name in item_files:
    #         with open(f"{self.templates_dir}/sections/section/item/{file_name}") as _in:
    #             template = Template(_in.read())
    #             for dir in self.dir_list():
    #                 if (len(dir) == 2):
    #                     path_key = "/".join(dir)
    #                     output_path = f"{self.input_dir}/{path_key}/{file_name}"
    #                     data = self.replacements(dir)
    #                     output = template.substitute(data)
    #                     with open(output_path, "w") as _out:
    #                         _out.write(output)

        # for file_name in item_files:
        #     with open(f"{self.templates_dir}/sections/section/item/{file_name}") as _in:
        #         template = Template(_in.read())
        #         for dir in self.dir_list():
        #             output_path = f"{self.input_dir}/{dir[0]}/{dir[1]}/{file_name}"
        #             data = self.replacements(dir)
        #             output = template.substitute(data)
        #             # print(output_path)
        #             with open(output_path, "w") as _out:
        #                 _out.write(output)

    # def stub_sections(self):
    #     for file_name in section_files:
    #         with open(f"{self.templates_dir}/sections/section/{file_name}") as _in:
    #             template = Template(_in.read())
    #             for dir in self.dir_list():
    #                 if (len(dir) == 1):
    #                     path_key = "/".join(dir)
    #                     output_path = f"{self.input_dir}/{path_key}/{file_name}"
    #                     data = self.replacements(dir)
    #                     output = template.substitute(data)
    #                     with open(output_path, "w") as _out:
    #                         _out.write(output)

    # def stub_tests(self):
    #     for file_name in test_files:
    #         with open(f"{self.templates_dir}/sections/section/item/test/{file_name}") as _in:
    #             template = Template(_in.read())
    #             for dir in self.dir_list():
    #                 if (len(dir) == 3):
    #                     path_key = "/".join(dir)
    #                     output_path = f"{self.input_dir}/{path_key}/{file_name}"
    #                     data = self.replacements(dir)
    #                     output = template.substitute(data)
    #                     with open(output_path, "w") as _out:
    #                         _out.write(output)

        # for file_name in test_files:
        #     with open(f"{self.templates_dir}/sections/section/item/test/{file_name}") as _in:
        #         template = Template(_in.read())
        #         for dir in self.dir_list():
        #             output_path = f"{self.input_dir}/{dir[0]}/{dir[1]}/{dir[2]}/{file_name}"
        #             data = self.replacements(dir)
        #             output = template.substitute(data)
        #             # print(output_path)
        #             with open(output_path, "w") as _out:
        #                 _out.write(output)

    # def replacements(self, dir):
    #     data = {
    #             "_SECTION_NAME_": dir[0],
    #             "_TEST_ID_": self.id(dir),
    #             }
    #     if len(dir) == 2:
    #         data["_ITEM_NAME_"] = dir[1],
    #     if len(dir) == 3:
    #         data["_TEST_NAME_"] = dir[2],
    #     return data



if __name__ == "__main__":
    m = Maker()
    m.stub_files()
    # m.stub_sections()
    # m.stub_items()
    # m.stub_tests()
    # m.empty_output_folder()
    # m.generate_files()


