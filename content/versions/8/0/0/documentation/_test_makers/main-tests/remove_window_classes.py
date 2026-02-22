#!/usr/bin/env python3

import os

from pathlib import Path 


class Fixer():
    def __init__(self):
        pass

    def remove_classes(self):
        for dir in os.walk("_tests_original"):
            if "javascript.js" in dir[2]:
                input_path = f"{dir[0]}/javascript.js"
                parts = input_path.split("/")
                parts[0] = "_tests"
                output_path = "/".join(parts)
                output_dir = os.path.dirname(output_path)
                Path(output_dir).mkdir(parents=True, exist_ok=True)
                with open (input_path) as _in:
                    lines = _in.read().splitlines()
                    lines.reverse()
                    output_lines = []
                    first_removed = False
                    for line in lines:
                        output_lines.append(line)
                    output_lines.reverse()
                    with open (output_path, "w") as _out:
                        _out.write("\n".join(output_lines))

                #print(input_path)
            # if dir[2] == "javascript.js":
            #     print(dir[2])


if __name__ == "__main__":
    fixer = Fixer()
    fixer.remove_classes()






