#!/usr/bin/env python3

# This makes the output files for
# the el.propMatchesTarget() and el.propMatchesSender()
# methods. 

# match_maker_with_el_key/make_tests.py

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
		"el", "el ancestor", "ev", "ev ancestor"
]

statuses = [
	"does not have",
	"has",
]

statuses2 = [
	"does not have",
	"has",
]

matches = [
	"do not match",
	"match",
]

targets = [
	"false",
	"true",
]


def has_both_keys(item):
	if item[0] == 1 or item[1] == 1:
		if item[2] == 1 or item[3] == 1:
			return True
	return False

def item_number(item):
	return "".join([(str(x)) for x in item])

def get_target_value(item):
	if item[4] == 0:
		return "false"
	else:
		return "true"

def make_data_key(item, item_index, key, extra):
	if item[item_index] == 0:
		return ""
	else:
		if item[4] == 1:
			return f"""data-test{item_number(item)}="{key}{item_number(item)}" """
		else:
			return f"""data-test{item_number(item)}="{key}{item_number(item)}{extra}" """

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
				if output_item(item) == True:
					# print(f"DOING: {item}")
					data = {
							"EL_ITEM_DATA": make_data_key(item, 0, lower_keys[key_index], ""),
							"EL_ANCESTOR_DATA": make_data_key(item, 1, lower_keys[key_index], ""),
							"EV_ITEM_DATA": make_data_key(item, 2, lower_keys[key_index], " DOES NOT MATCH"),
							"EV_ANCESTOR_DATA": make_data_key(item, 3, lower_keys[key_index], " DOES NOT MATCH"),
							"EXPECTS": get_target_value(item)
							}
					output = template.substitute(data)
					output_path = f"{output_dir(keys[key_index], item)}/html.html"
					write_file(output, output_path)
				else:
					print(f"SKIPPING {output_item(item)} - {item}")

def make_javascript():
	with open("templates/javascript.js") as _in:
		template = Template(_in.read())
		for key in keys:
			for item in payload():
				if output_item(item) == True:
					data = {
							"MATCH_KEY": f"test{item_number(item)}"
							}
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
				if output_item(item) == True:
					data = {
							"NAME": report_line(item)
							}
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
				target = "true"
				if item[4] == 0:
					target = "false"
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


def output_item(item):
	if has_both_keys(item) == True:
		return True
	elif item[0] == 0 and item[1] == 0 and item[2] == 0 and item[3] == 0 and item[4] == 1:
		return False
	elif item[4] == 0:
		return True
	else:
		return False


def payload():
	items = []
	for i in range(0,32):
		# if (
		# 		(i >> 0) & 1 == 0 
		# 		and (i >> 1) & 1 == 0
		# 		):
		# 	continue
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
	result = f"""data-KEY: 
[! filter inline_highlight("js") !]{segments[0]}[! endfilter !]
 <strong>{statuses[item[0]]}</strong>
 - 
[! filter inline_highlight("js") !]{segments[1]}[! endfilter !]
 <strong>{statuses2[item[1]]}</strong>
 - 
[! filter inline_highlight("js") !]{segments[2]}[! endfilter !]
 <strong>{statuses[item[2]]}</strong>
 - 
[! filter inline_highlight("js") !]{segments[3]}[! endfilter !]
 <strong>{statuses2[item[3]]}</strong>
"""

	if has_both_keys(item):
		result += f""" - 
[! filter inline_highlight("js") !]values[! endfilter !]
 <strong>{matches[item[4]]}</strong>
-
is 
[! filter inline_highlight("js") !]{get_target_value(item)}[! endfilter !]"""
	else: 
		result += f""" -
returns 
[! filter inline_highlight("js") !]{get_target_value(item)}[! endfilter !]"""
	return result


def write_file(data, path):
	with open(path, "w") as _out:
		_out.write(data)

	
if __name__ == "__main__":
	# make_descriptions()
	make_html_files()
	make_javascript()
	#make_method_names()
	make_names()
	#make_postscripts()
	#make_supplementals()
	#make_target_values()
	print_report()

