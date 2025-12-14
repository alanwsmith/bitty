#!/usr/bin/env python3

import os
from string import Template

keys = [
		"propMatchesTarget",
		"propMatchesSender"
		]

lower_keys = [
		"target",
		"sender"
		]

segments = [
		"el", "el ancestors", "ev", "ev ancestors"
]

statuses = [
	"DOES_NOT_HAVE",
	"HAS",
]

statuses2 = [
	"DO_NOT_HAVE",
	"HAVE",
]

matches = [
	"does not match",
	"match",
]

targets = [
	"false",
	"true",
]


def item_number(item):
	return "".join([(str(x)) for x in item])
	

def make_data_key(item, item_index, key):
	if item[item_index] == 0:
		return ""
	else:
		return f"""data-testkey="{key}{item_number(item)}" """

	
def make_descriptions():
	with open("templates/description.html") as _in:
		template = Template(_in.read())
		for key in keys:
			for item in payload():
				data = {}
				output = template.substitute(data)
				output_path = f"{output_dir(key, item)}/description.html"
				write_file(output, output_path)
				

def make_html_files():
	with open("templates/html.html") as _in:
		template = Template(_in.read())
		for key_index in range(0,len(keys)):
			for item in payload():
				data = {
						"EL_ITEM_DATA": make_data_key(item, 0, lower_keys[key_index]),
						"EL_ANCESTOR_DATA": make_data_key(item, 1, lower_keys[key_index]),
						"EV_ITEM_DATA": make_data_key(item, 2, lower_keys[key_index]),
						"EV_ANCESTOR_DATA": make_data_key(item, 3, lower_keys[key_index])
						}
				output = template.substitute(data)
				output_path = f"{output_dir(keys[key_index], item)}/html.html"
				write_file(output, output_path)
	
def make_javascript():
	with open("templates/javascript.js") as _in:
		template = Template(_in.read())
		for key in keys:
			for item in payload():
				data = {}
				output = template.substitute(data)
				output_path = f"{output_dir(key, item)}/javascript.js"
				write_file(output, output_path)
				

def make_method_names():
	with open("templates/_method_name.txt") as _in:
		template = Template(_in.read())
		for key in keys:
			for item in payload():
				data = {
					"NAME": f"el{key}{item_number(item)}"
				}
				output = template.substitute(data)
				output_path = f"{output_dir(key, item)}/_method_name.txt"
				write_file(output, output_path)
				

def make_names():
	with open("templates/name.txt") as _in:
		template = Template(_in.read())
		for key_index in range(0,len(keys)):
			for item in payload():

				data = {
						"NAME": report_line(item)
						}

				# data["EL"] = name_string(segments[0], statuses[item[0]])
				# data["AEL"] = name_string(f"{segments[1]}.{lower_keys[key_index]}", statuses[item[1]])
				# data["EV"] = name_string(segments[2], statuses[item[2]])
				# data["AEV"] = name_string(f"{segments[3]}.{lower_keys[key_index]}", statuses[item[3]])
				# data["MATCHES"] = matches[item[4]]
				# data["TARGET"] = targets[item[4]]
				output = template.substitute(data)
				output_path = f"{output_dir(keys[key_index], item)}/name.txt"

				write_file(output, output_path)
				

def make_postscripts():
	with open("templates/postscript.html") as _in:
		template = Template(_in.read())
		for key in keys:
			for item in payload():
				data = {}
				output = template.substitute(data)
				output_path = f"{output_dir(key, item)}/postscript.html"
				write_file(output, output_path)
	
def make_supplementals():
	with open("templates/_supplemental_string.txt") as _in:
		template = Template(_in.read())
		for key in keys:
			for item in payload():
				data = {
						"KEY": item_number(item)
						}
				output = template.substitute(data)
				output_path = f"{output_dir(key, item)}/_supplemental_string.txt"
				write_file(output, output_path)
				

def make_target_values():
	with open("templates/_target_value.txt") as _in:
		template = Template(_in.read())
		for key in keys:
			for item in payload():
				target = "false"
				if item[4] == 1:
					target = "true"
				data = {
						"TARGET": target
						}
				output = template.substitute(data)
				output_path = f"{output_dir(key, item)}/_target_value.txt"
				write_file(output, output_path)
				

def name_string(key, line):
	return f"{key} {line} data-key"

def output_dir(key, item):
	dir_key = ""
	for x in item:
		dir_key += str(x)
	example_dir = f"../../content/documentation/7/0/0/_includes/el.methods/el.{key}/_examples/auto-{dir_key}"
	if not os.path.isdir(example_dir):
		os.makedirs(example_dir, exist_ok=True)
	return example_dir 


def payload():
	items = []
	for i in range(0,32):
		if ((i >> 0) & 1 == 1 or (i >> 1) & 1 == 1):
			continue
		if ((i >> 4) & 1 == 1):
		 	continue
		items.append([
			(i >> 0) & 1, 
			(i >> 1) & 1, 
			(i >> 2) & 1, 
			(i >> 3) & 1, 
			(i >> 4) & 1, 
		])
	print(len(items))
	items.sort()
	items.reverse()
	return items


def print_report():
	with open("report.txt", "w") as _out:
		for item in payload():
			_out.write(report_line(item))
			_out.write("\n")
			
def report_line(item):
	el = statuses[item[0]]
	ela = statuses2[item[1]]
	ev = statuses[item[2]]
	eva = statuses2[item[3]]
	m = matches[item[4]]
	return f"""
[! filter inline_highlight("js") !]{segments[0]}[! endfilter !]
 {el} 
[! filter inline_highlight("html") !]data-KEY[! endfilter !] 
 - 
[! filter inline_highlight("js") !]{segments[1]}[! endfilter !]
 {ela} 
[! filter inline_highlight("html") !]data-KEY[! endfilter !] 
 - 
[! filter inline_highlight("js") !]{segments[2]}[! endfilter !]
 {ev} 
[! filter inline_highlight("html") !]data-KEY[! endfilter !] 
 - 
[! filter inline_highlight("js") !]{segments[3]}[! endfilter !]
 {eva}
[! filter inline_highlight("html") !]data-KEY[! endfilter !] 
 - 
is 
[! filter inline_highlight("js") !]{targets[item[4]]}[! endfilter !]"""




def write_file(data, path):
	with open(path, "w") as _out:
		_out.write(data)

	
if __name__ == "__main__":
	make_target_values()
	make_supplementals()
	make_method_names()
	make_postscripts()
	make_descriptions()
	make_names()
	make_javascript()
	make_html_files()
	print_report()

