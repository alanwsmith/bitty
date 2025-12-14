#!/usr/bin/env python3

###################################################
# This file should be idempotent.
# Make a commit before running it though,
# just in case. 
###################################################

import os

from pathlib import Path 
from string import Template


items = {
	"el": [
		"el.bittyId",
		"el.bittyParent",
		"el.isSender",
		"el.isTarget",
		"el.value",
		"el.valueToFloat",
		"el.valueToInt"
	],
	"ev": ["ev.bittyId", "ev.value", "ev.valueToFloat", "ev.valueToInt", "ev.sender", ],
	"ev.sender": [
		"ev.sender.bittyId", "ev.sender.value", "ev.sender.valueToFloat", "ev.sender.valueToInt"
	]
}

major_version = "7"
minor_version = "0"
patch_version = "0"

parent_dir = f"/Users/alan/workshop/bitty/content/documentation/{major_version}/{minor_version}/{patch_version}/_includes"

index_skeleton = """


[#- ####################################################

DO NOTE EDIT THIS FILE MANUALLY
This file is created by:

helpers/docs-builders/create_helper_properties_tree.py

######################################################## -#]



[!- set property_description_path = file.folder + "/_includes/$PARENT.properties/$VALUE/property-description.html" -!]
[!- set examples_dir = file.folder + "/_includes/$PARENT.properties/$VALUE/_examples" -!]
[!- set added_path = file.folder + "/_includes/$PARENT.properties/$VALUE/_property_added.txt" -!]
[!- set updated_path = file.folder + "/_includes/$PARENT.properties/$VALUE/_property_updated.txt" -!]
[!- set removed_path = file.folder + "/_includes/$PARENT.properties/$VALUE/_property_removed.txt" -!]

<details class="docs-test-details default-flow" data-added="[@ added_path @]" data-updated="[@ updated_path @]">

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

	<summary>
		$VALUE

		<span class="added">
			-
			[added: [! include added_path !]]
			-
		</span>
		
		[!- set updates_string|trim -!]
			[!- include updated_path -!]
		[!- endset -!]
		[!- if updates_string != "" -!]
			<span class="updated">
				[updated: [@ updates_string @]]
			</span>
		[!- endif -!]
	
		[!- set removed_string|trim -!]
			[!- include removed_path -!]
		[!- endset -!]
		[!- if removed_string != "" -!]
			<span class="removed">
				[removed: [@ removed_string @]]
			</span>
		[!- endif -!]
	</summary>

	<div class="description-wrapper default-flow">
		<div class="heading">Description</div>
		<div class="description">
			[!- include property_description_path -!]
		</div>
	</div>

	[!- for f in folders !]
		[!- if f.parent == examples_dir !]
			[!- set counters.initial_examples = counters.initial_examples + 1 !]
		[!- endif !]
	[!- endfor -!]
	
	<div class="heading">Examples</div>

	[! set example_display_path = file.folder + "/_includes/properties-display.html" !]

	<ul class="example-list">
	[! for f in folders !]
		[! if f.parent == examples_dir !]
			[! set example_dir = examples_dir + "/" + f.name !]
			[! set name_path = example_dir + "/name.txt" !]
			[! set html_path = example_dir + "/html.html" !]
			[! set javascript_path = example_dir + "/javascript.js" !]
			[! set description_path = example_dir + "/description.html" !]
			[! set postscript_path = example_dir + "/postscript.html" !]
			[! set test_folder_name = f.name !]
			[! set supplemental_string|trim -!]
				[!- include example_dir + "/_supplemental_string.txt" !]
			[!- endset -!]
			[! set method_name|trim -!]
				[!- include example_dir + "/_method_name.txt" !]
			[!- endset -!]
			[! set target_value|trim -!]
				[!- include example_dir + "/_target_value.txt" !]
			[!- endset -!]
			<li>
				<details class="example-details default-flow">
					<summary>[! include name_path !]
					<span class="faded-default-color"> - [[@ test_folder_name @]] - </span></summary>
					<div class="content">
						[! include example_display_path !]
					</div>
				</details>
			</li>
		[! endif !]
	[! endfor !]
	</ul>

</details>

"""

def overwrite_wrapper_files():
	for parent in items.keys():
		for key in items[parent]:
			index_path = f"{parent_dir}/{parent}.properties/{key}/_wrapper.html"
			print(f"Overwriting: {index_path}")
			data = { "PARENT": parent, "VALUE": key }
			template = Template(index_skeleton)
			output = template.substitute(data)
			with open(index_path, "w") as _out:
				_out.write(output)
			
def make_file_if_it_does_not_exist(output_path, content):
	if not os.path.isfile(output_path):
		with open(output_path, "w") as _out:
			_out.write(content)
	
		
def create_method_files():
	for parent in items.keys():
		for key in items[parent]:
			for name in [
				["added", "7.0.0"], 
				["changed", ""],
				["removed", ""]
			]:
				output_path = f"{parent_dir}/{parent}.properties/{key}/_property_{name[0]}.txt"
				make_file_if_it_does_not_exist(output_path, name[1])
				
				
def create_variable_files():
	for parent in items.keys():
		for key in items[parent]:
			for name in [
				["added", "7.0.0"], 
				["changed", ""],
				["removed", ""]
			]:
				output_path = f"{parent_dir}/{parent}.properties/{key}/_property_{name[0]}.txt"
				make_file_if_it_does_not_exist(output_path, name[1])
			
			
				
#		
#			for key in items[parent]:
#				index_path = f"{parent_dir}/{parent}.properties/{key}/_wrapper.html"
#				print(f"Overwriting: {index_path}")
#				data = { "PARENT": parent, "VALUE": key }
#				template = Template(index_skeleton)
#				output = template.substitute(data)
#				with open(index_path, "w") as _out:
#					_out.write(output)
							
			
			

# NOTE: This needs to be updated for the 
# dir structure that splits el, ev, and ev.sender
# if you need to use it again. 
#def make_directories():
#	for key in lines:
#		base_dir = f"{parent_dir}/{key}"
#		if not os.path.isdir(base_dir):
#			print(f"mkdir: {base_dir}")
#			Path(base_dir).mkdir(exist_ok=True)
#		examples_dir = f"{base_dir}/_examples"
#		if not os.path.isdir(examples_dir):
#			print(f"mkdir: {examples_dir}")
#			Path(examples_dir).mkdir(exist_ok=True)
			


	
# NOTE: This needs to be updated for the 
# dir structure that splits el, ev, and ev.sender
# if you need to use it again. 
#def make_preface_files():
#	for key in lines:
#		property_description_path = f"{parent_dir}/{key}/_preface.html"
#		if not os.path.isfile(property_description_path):
#			print(f"Generating: {property_description_path}")
#			with open(property_description_path, "w") as _out:
#				_out.write("<p>TODO</p>")
				

if __name__ == "__main__":
	overwrite_wrapper_files()
	create_method_files()

	