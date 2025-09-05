#!/usr/bin/env python3

from os import listdir
from os.path import isdir
from os.path import join
from pathlib import Path 


source_dir = "nesting-examples"

output_root = "../content/_nesting-examples"

directories = [d for d in listdir(source_dir) if isdir(join(source_dir, d)) and d[0] != '.' ]

for dir in directories: 
    target_dir = f"{output_root}/{dir}"
    Path(target_dir).mkdir(parents=True, exist_ok=True)

    with open(f"{source_dir}/{dir}/snippet.html", "r") as _in:
        content = _in.read()
        parts = content.split("<!-- x -->")

        output_path = f"{target_dir}/example.html"
        content = parts[0].replace("<!-- prettier-ignore -->", "").strip()
        with open(output_path, "w") as _out:
            _out.write(content)

        output_path = f"{target_dir}/title.txt"
        content = parts[1].strip()
        with open(output_path, "w") as _out:
            _out.write(content)

        output_path = f"{target_dir}/script-name.txt"
        content = parts[2].strip()
        with open(output_path, "w") as _out:
            _out.write(content)

        output_path = f"{target_dir}/details.md"
        content = parts[3].strip()
        with open(output_path, "w") as _out:
            _out.write(content)



