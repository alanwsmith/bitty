#!/usr/bin/env python3

from pathlib import Path 
from string import Template

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

lines = data.split("\n")

parent_dir = "/Users/alan/workshop/bitty/content/versions/7/0/0-rc1/documentation/_includes/methods"

skeleton = """
	[! set args_path = file.folder + "/_includes/methods/$VALUE/_includes/args" !]

<details class="docs-sub-details">
[#
	[!- set args_string_path = file.folder + "/_includes/methods/$VALUE/_args.txt" -!]
		[!- include args_string_path !]

{%- set config = namespace() -%}
{%- set config.counter = 0 -%}
#]


[! set counters = namespace() !]
[! set counters.initial = 0 !]
[! set counters.count = 0 !]

[! for f in folders !]
[! if f.parent == args_path !]
[! set title_path = args_path + "/" + f.name + "/title.txt" !]
[! set counters.initial = counters.initial + 1 !]
[! endif !]
[! endfor !]


	<summary>$VALUE(
[! for f in folders !]
[! if f.parent == args_path !]
[! set title_path = args_path + "/" + f.name + "/title.txt" !]

[! include title_path !]

[! set counters.count = counters.count + 1 !]
[! if counters.count != counters.initial !],[! endif !]

[! endif !]
[! endfor !]
	)</summary>


	<h5>Arguments</h5>

	[! for f in folders !]
	[! if f.parent == args_path !]
	[! set title_path = args_path + "/" + f.name + "/title.txt" !]
	[! set content_path = args_path + "/" + f.name + "/index.html" !]
	<details class="args-details">
	<summary>[! include title_path !]</summary>
	[! include content_path !]
	[! endif !]
	</details>
	[! endfor !]

</details>
"""


for line in lines:
	
	content_dir = f"{parent_dir}/{line}"
	index_file = f"{content_dir}/index.html"
	includes_dir = f"{content_dir}/_includes"
	args_dir = f"{content_dir}/_includes/args"
	
	
#	print(content_dir)	
	
	Path(includes_dir).mkdir(exist_ok=True)	
	Path(args_dir).mkdir(exist_ok=True)
	
	data = { "VALUE": line }
	template = Template(skeleton)
	output = template.substitute(data)
	with open(index_file, "w") as _out:
		print(index_file)
		_out.write(output)
	
		
#	arg_string_path = f"{content_dir}/_args.txt"
#	with open(arg_string_path, "w") as _out:
#		print(arg_string_path)
#		_out.write("TODO: Fill in args")
		
		
	
	