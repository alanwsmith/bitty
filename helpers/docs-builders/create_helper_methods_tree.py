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
		"el.propMatchesSender",
		"el.propMatchesTarget",
		"el.prop",
		"el.propToFloat",
		"el.propToInt",
	],
	"ev": [
		"ev.prop",
		"ev.propToFloat",
		"ev.propToInt",
	],
	"ev.sender": [
		"ev.sender.prop",
		"ev.sender.propToFloat",
		"ev.sender.propToInt",
	],
}

major_version = "7"
minor_version = "0"
patch_version = "0"

parent_dir = f"/Users/alan/workshop/bitty/content/documentation/{major_version}/{minor_version}/{patch_version}/_includes"


index_skeleton = """
[#- ####################################################

DO NOTE EDIT THIS FILE MANUALLY
This file is created by:

helpers/docs-builders/create_helper_methods_tree.py

######################################################## -#]

[!- set method_details_path = file.folder + "/_includes/$PARENT.methods/$VALUE/_method_details.html" -!]
[!- set args_path = file.folder + "/_includes/$PARENT.methods/$VALUE/_args" -!]
[!- set examples_dir = file.folder + "/_includes/$PARENT.methods/$VALUE/_examples" -!]
[!- set notes_path = file.folder + "/_includes/$PARENT.methods/$VALUE/_notes.html" -!]
[!- set added_path = file.folder + "/_includes/$PARENT.methods/$VALUE/_method_added.txt" -!]
[!- set changed_path = file.folder + "/_includes/$PARENT.methods/$VALUE/_method_changed.txt" -!]
[!- set removed_path = file.folder + "/_includes/$PARENT.methods/$VALUE/_method_removed.txt" -!]

[#


<details class="docs-method-details" data-added="[@ added_path @]" data-changed="[@ changed_path @]">

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
	) - 
	
	<span class="docs-method-version docs-method-added">
	[added: [! include added_path !]]
	</span>
	
	<span class="docs-method-version docs-method-changed">
	[!- set changed_string|trim -!]
[!- include changed_path -!]
	[!- endset -!]
	[!- if changed_string != "" -!]
[changed: [@ changed_string @]]
	[!- endif -!]
	</span>



<span class="docs-method-version docs-method-removed">
	[!- set removed_string|trim -!]
[!- include removed_path -!]
	[!- endset -!]
	[!- if removed_string != "" -!]
[removed: [@ removed_string @]]
	[!- endif -!]
	</span>

	</summary>


<div class="doc-sub-header">Arguments</div>

<div class="docs-preface-wrapper">
<ul class="default-flow">
[! for f in folders !]
[! if f.parent == args_path !]
[! set name_path = args_path + "/" + f.name + "/name.txt" !]
[! set content_path = args_path + "/" + f.name + "/index.html" !]
<li>
<div class="font-weight-900">[! include name_path !]</div> 
<div>[! include content_path !]</div>
</li>
[! endif !]
[! endfor !]
</ul>
</div>


<div class="doc-sub-header">Details</div>

<div class="docs-preface-wrapper">
	[!- include method_details_path -!]
</div>

[!- for f in folders !]
[!- if f.parent == examples_dir !]
[!- set counters.initial_examples = counters.initial_examples + 1 !]
[!- endif !]
[!- endfor -!]

	<div class="doc-sub-header">Examples</div>

	[! set example_display_path = file.folder + "/_includes/helper-properties/display.html" !]

	<div class="docs-examples-wrapper">
	<ul>
		[! for f in folders !]
		[! if f.parent == examples_dir !]
		[! set example_dir = examples_dir + "/" + f.name !]
		[! set name_path = example_dir + "/name.txt" !]
		[! set html_path = example_dir + "/html.html" !]
		[! set javascript_path = example_dir + "/javascript.js" !]
		[! set description_path = example_dir + "/description.html" !]
		[! set postscript_path = example_dir + "/postscript.html" !]
	
	<li>
		<details class="example-details">
		<summary>[! include name_path !]</summary>
		[! include example_display_path !]
		</details>
	</li>
	
		[! endif !]
		[! endfor !]
	
	</ul>
	</div>

<div class="docs-optional-wrapper">
[! include notes_path !]
</div>

</details>

#]
"""




def overwrite_index_files():
	for parent in items.keys():
		for key in items[parent]:
			index_path = f"{parent_dir}/{parent}.methods/{key}/_wrapper.html"
			print(f"Overwriting: {index_path}")
			data = { "PARENT": parent, "VALUE": key }
			template = Template(index_skeleton)
			output = template.substitute(data)
			with open(index_path, "w") as _out:
				_out.write(output)
		




## Needs to be redone for new dir structure if you need it again	
#def make_directories():
#	for key in lines:
#		base_dir = f"{parent_dir}/{key}"
#		if not os.path.isdir(base_dir):
#			print(f"mkdir: {base_dir}")
#			Path(base_dir).mkdir(exist_ok=True)
#		
#		args_dir = f"{base_dir}/_args"
#		if not os.path.isdir(args_dir):
#			print(f"mkdir: {args_dir}")
#			Path(args_dir).mkdir(exist_ok=True)		
#			
#		examples_dir = f"{base_dir}/_examples"
#		if not os.path.isdir(examples_dir):
#			print(f"mkdir: {examples_dir}")
#			Path(examples_dir).mkdir(exist_ok=True)
			


	

			
## Needs to be redone for new dir structure if you need it again	
#def make_method_details_files():
#	for key in lines:
#		output_path = f"{parent_dir}/{key}/_method_details.html"
#		if not os.path.isfile(output_path):
#			print(f"Generating: {output_path}")
#			with open(output_path, "w") as _out:
#				_out.write("<p>TODO</p>")
				
				
				
				
## Needs to be redone for new dir structure if you need it again	
#def make_added_files():
#	for key in lines:
#		output_path = f"{parent_dir}/{key}/_method_added.txt"
#		if not os.path.isfile(output_path):
#			print(f"Generating: {output_path}")
#			with open(output_path, "w") as _out:
#				_out.write("7.0.0")
		
		
				
## Needs to be redone for new dir structure if you need it again	
#def make_changed_files():
#	for key in lines:
#		output_path = f"{parent_dir}/{key}/_method_changed.txt"
#		if not os.path.isfile(output_path):
#			print(f"Generating: {output_path}")
#			with open(output_path, "w") as _out:
#				_out.write("")
				
				
## Needs to be redone for new dir structure if you need it again	
#def make_removed_files():
#	for key in lines:
#		output_path = f"{parent_dir}/{key}/_method_removed.txt"
#		if not os.path.isfile(output_path):
#			print(f"Generating: {output_path}")
#			with open(output_path, "w") as _out:
#				_out.write("")
				
				

## Needs to be redone for new dir structure if you need it again	
#def make_notes_files():
#	for key in lines:
#		output_path = f"{parent_dir}/{key}/_notes.html"
#		if not os.path.isfile(output_path):
#			print(f"Generating: {output_path}")
#			with open(output_path, "w") as _out:
#				_out.write("""[! filter markdown|safe !]
#[! endfilter !]""")
								
								

if __name__ == "__main__":
	pass
#	make_directories()
#	make_method_details_files()
#	make_notes_files()
#	make_added_files()
#	make_changed_files()
#	make_removed_files()
	overwrite_index_files()
	