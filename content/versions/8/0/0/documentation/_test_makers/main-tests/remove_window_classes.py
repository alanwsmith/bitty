#!/usr/bin/env python3

# THIS IS A ONE SHOT FOR MOVING Window.ClassXXX
# out of the main script files so they
# don't display in the docs. Saving
# it for reference, but you should not 
# need to run it again. 

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
                        if line.strip() == "};" and first_removed == False:
                            first_removed = True
                            continue
                            pass
                        if line.strip() == "window.$CLASS_NAME = class {":
                            continue
                            pass
                        if line.strip() == '/////////////////////////////////////////////////':
                            # trying to fix formatter
                            continue
                            pass
                        if line.strip() == '// Test Setup':
                            # trying to fix formatter
                            continue
                            pass
                        line = line[2:]


                        output_lines.append(line)
                    output_lines.reverse()
                    with open (output_path, "w") as _out:
                        _out.write("\n".join(output_lines))

                #print(input_path)
            # if dir[2] == "javascript.js":
            #     print(dir[2])


if __name__ == "__main__":
    pass
    # this is turned off since this script
    # is a oneshot. 
    #
    # fixer = Fixer()
    # fixer.remove_classes()





