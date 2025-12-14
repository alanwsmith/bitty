#!/usr/bin/env python3

keys = [
		"propMatchesTarget",
		"propMatchesSender"
		]

statuses = [
	"has data-key",
	"does not have data-key"
]

matches = [
	"values match",
	"values do not match"
]

def payload():
	items = []
	for i in range(0,32):
		m = matches[(i >> 4) & 1]
		if ((i >> 0) & 1 == 0 and (i >> 1) & 1 == 0):
			continue
		if ((i >> 0) & 1 == 1 and (i >> 1) & 1 == 1):
			continue
		if ((i >> 2) & 1 == 0 and (i >> 3) & 1 == 0):
			continue
		if ((i >> 2) & 1 == 1 and (i >> 3) & 1 == 1):
			continue
		items.append([
			(i >> 0) & 1, 
			(i >> 1) & 1, 
			(i >> 2) & 1, 
			(i >> 3) & 1, 
			(i >> 4) & 1, 
		])
	items.sort()
	return items

def report_line(item):
	el = statuses[item[0]]
	ela = statuses[item[1]]
	ev = statuses[item[2]]
	eva = statuses[item[3]]
	m = matches[item[4]]
	return f"el {el} - ancestor of el {ela} - ev {ev} - ancestor of ev {eva} - {m}"


def print_report():
	with open("report.txt", "w") as _out:
		for item in payload():
			_out.write(report_line(item))
			_out.write("\n")

def make_directories():
	for key in keys:
		for item in payload():

		print(key)



	
if __name__ == "__main__":
	make_directories();

	print_report()

