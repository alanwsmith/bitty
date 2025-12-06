#!/usr/bin/env python3

# NOTE: You should be able to re-run this file
# to make updates to the structre as longs
# as you only put content inside the 
# `_args` and `_exampels` folders

import os

from pathlib import Path 
from string import Template


data = """ev.bittyId
ev.value
ev.valueToFloat
ev.valueToInt
ev.sender
ev.sender.bittyId
ev.sender.valueToFloat
ev.sender.valueToInt
el.bittyId
el.isSender
el.isTarget
el.value
el.valueToFloat
el.valueToInt"""

lines = data.split("\n")

major_version = "7"
minor_version = "0"
patch_version = "0-rc2"

parent_dir = f"/Users/alan/workshop/bitty/content/versions/{major_version}/{minor_version}/{patch_version}/documentation/_includes/helper-properties"


index_skeleton = """
[#- ####################################################

DO NOTE EDIT THIS FILE MANUALLY
This file is created by:

helpers/docs-builders/create_helper_properties_tree.py

######################################################## -#]

[!- set preface_path = file.folder + "/_includes/helper-properties/$VALUE/_preface.html" -!]
[!- set examples_dir = file.folder + "/_includes/helper-properties/$VALUE/_examples" -!]

<details class="docs-sub-details">

[!- set counters = namespace() !]
[!- set counters.initial = 0 !]
[!- set counters.count = 0 !]

[!- set counters.initial_examples = 0 !]
[!- set counters.count_examples = 0 !]

[!- for f in folders !]
[!- if f.parent == args_path !]
[!- set counters.initial = counters.initial + 1 !]
[!- endif !]
[!- endfor -!]

	<summary>$VALUE</summary>

<div class="docs-preface-wrapper">
	[!- include preface_path -!]
</div>


[!- for f in folders !]
[!- if f.parent == examples_dir !]
[!- set counters.initial_examples = counters.initial_examples + 1 !]
[!- endif !]
[!- endfor -!]

	<div class="doc-sub-header">Examples</div>

	[! for f in folders !]
	[! if f.parent == examples_dir !]
	[! set name_path = examples_dir + "/" + f.name + "/name.txt" !]
	[! set content_path = examples_dir + "/" + f.name + "/index.html" !]
	<details class="example-details">
	<summary>[! include name_path !]</summary>
	[! include content_path !]
	</details>
	[! endif !]
	[! endfor !]


</details>



"""



def make_directories():
	for key in lines:
		base_dir = f"{parent_dir}/{key}"
		if not os.path.isdir(base_dir):
			print(f"mkdir: {base_dir}")
			Path(base_dir).mkdir(exist_ok=True)
			
		examples_dir = f"{base_dir}/_examples"
		if not os.path.isdir(examples_dir):
			print(f"mkdir: {examples_dir}")
			Path(examples_dir).mkdir(exist_ok=True)
			

def make_index_files():
	for key in lines:
		index_path = f"{parent_dir}/{key}/index.html"
		print(f"Generating: {index_path}")
		data = { "VALUE": key }
		template = Template(index_skeleton)
		output = template.substitute(data)
		with open(index_path, "w") as _out:
			_out.write(output)
	
def make_preface_files():
	for key in lines:
		preface_path = f"{parent_dir}/{key}/_preface.html"
		print(f"Generating: {preface_path}")
		with open(preface_path, "w") as _out:
			_out.write("<p>TODO</p>")
				

if __name__ == "__main__":
	make_directories()
	make_preface_files()
	make_index_files()

