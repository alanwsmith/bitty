#!/usr/bin/env python3

# NOTE: You should be able to re-run this file
# to make updates to the structre as longs
# as you only put content inside the 
# `_args` and `_exampels` folders

from pathlib import Path 
from string import Template
import os

data = """forward
getElement
getHTML
getJSON
getSVG
getTXT
localTrigger
loadCSS
makeElement
makeHTML
makeSVG
makeTXT
setProp
trigger"""

keys = data.split("\n")

major_version = "7"
minor_version = "0"
patch_version = "0"

parent_dir = f"/Users/alan/workshop/bitty/content/documentation/{major_version}/{minor_version}/{patch_version}/_includes/this-api-methods"


index_file_skeleton = """
[#- ####################################################

DO NOTE EDIT THIS FILE MANUALLY
This file is created by:

helpers/docs-builders/create_this_api_methods_tree.py

######################################################## -#]

[!- set preface_path = file.folder + "/_includes/this-api-methods/$VALUE/_preface.html" -!]
[!- set args_path = file.folder + "/_includes/this-api-methods/$VALUE/_args" -!]
[!- set examples_dir = file.folder + "/_includes/this-api-methods/$VALUE/_examples" -!]

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

	<summary>$VALUE(
[!- for f in folders !]
[!- if f.parent == args_path !]
[!- set name_path = args_path + "/" + f.name + "/name.txt" !]
[!- include name_path !]
[!- set counters.count = counters.count + 1 !]
[!- if counters.count != counters.initial !],[@ " " @][! endif !]
[!- endif !]
[!- endfor -!]
	)</summary>


	<div class="docs-preface-wrapper">
		[!- include preface_path -!]
	</div>

	<div class="doc-sub-header">Arguments</div>

	[! for f in folders !]
	[! if f.parent == args_path !]
	[! set name_path = args_path + "/" + f.name + "/name.txt" !]
	[! set content_path = args_path + "/" + f.name + "/index.html" !]
	<details class="args-details">
	<summary>[! include name_path !]</summary>
	[! include content_path !]
	</details>
	[! endif !]
	[! endfor !]


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


def holding():
	
	for key in keys:
		
		content_dir = f"{parent_dir}/{line}"
		index_file = f"{content_dir}/index.html"
		
		args_dir = f"{content_dir}/_args"
		Path(args_dir).mkdir(parents=True, exist_ok=True)
		
		examples_dir = f"{content_dir}/_examples"
		Path(examples_dir).mkdir(parents=True, exist_ok=True)
		
		data = { "VALUE": line }
		template = Template(index_file_skeleton)
		output = template.substitute(data)
		with open(index_file, "w") as _out:
			print(index_file)
			_out.write(output)
			

def make_method_dirs():
	for key in keys:
		method_dir = f"{parent_dir}/{key}"
		if not os.path.isdir(method_dir):
			print(f"mkdir: {method_dir}")
			Path(method_dir).mkdir(exist_ok=True)
	
		
def make_preface_if_necessary():
	for key in keys:
		preface_path = f"{parent_dir}/{key}/_preface.html"
		if not os.path.isfile(preface_path):
			print(preface_path)
			with open (preface_path, "w") as _pref:
				_pref.write("<p>TODO</p>")
				

def make_index_files():
	for key in keys:
		index_file = f"{parent_dir}/{key}/index.html"
		data = { "VALUE": key }
		template = Template(index_file_skeleton)
		output = template.substitute(data)
		with open(index_file, "w") as _out:
			print(index_file)
			_out.write(output)
				
	
if __name__ == "__main__":
	make_method_dirs()
	make_preface_if_necessary()
	make_index_files()
	
	