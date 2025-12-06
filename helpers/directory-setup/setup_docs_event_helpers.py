#!/usr/bin/env python3

# NOTE: You should be able to re-run this file
# to make updates to the structre as longs
# as you only put content inside the 
# `_args` and `_exampels` folders

from pathlib import Path 
from string import Template


data = """ev.ds
ev.dsFloat
ev.dsInt
ev.val
ev.valFloat
ev.valInt"""

lines = data.split("\n")

parent_dir = "/Users/alan/workshop/bitty/content/versions/7/0/0-rc1/documentation/_includes/event-helpers"


skeleton = """

TODO

[#
[!- set args_path = file.folder + "/_includes/methods/$VALUE/_args" -!]
[!- set examples_dir = file.folder + "/_includes/methods/$VALUE/_examples" -!]

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


#]

"""


for line in lines:
	
	pass
	
#	content_dir = f"{parent_dir}/{line}"
#	index_file = f"{content_dir}/index.html"
#	
#	args_dir = f"{content_dir}/_args"
#	Path(args_dir).mkdir(parents=True, exist_ok=True)
#	
#	examples_dir = f"{content_dir}/_examples"
#	Path(examples_dir).mkdir(parents=True, exist_ok=True)
#	
#	data = { "VALUE": line }
#	template = Template(skeleton)
#	output = template.substitute(data)
#	with open(index_file, "w") as _out:
#		print(index_file)
#		_out.write(output)
#	
#
#	