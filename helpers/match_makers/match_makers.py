#!/usr/bin/env python3


statuses = [
	"has data-key",
	"does not have data-key"
]

matches = [
	"values match",
	"values do not match"
]



out = []
for i in range(0,32):
	el = f"el {statuses[(i >> 0) & 1]}"
	ela = f"ancestor of el {statuses[(i >> 1) & 1]}"
	ev = f"ev {statuses[(i >> 2) & 1]}"
	eva = f"ancestor of ev {statuses[(i >> 3) & 1]}"
	m = matches[(i >> 4) & 1]
	if ((i >> 0) & 1 == 0 and (i >> 1) & 1 == 0):
		continue
	if ((i >> 0) & 1 == 1 and (i >> 1) & 1 == 1):
		continue
	if ((i >> 2) & 1 == 0 and (i >> 3) & 1 == 0):
		continue
	if ((i >> 2) & 1 == 1 and (i >> 3) & 1 == 1):
		continue
	out.append(f"{el} - {ela} - {ev} - {eva} - {m}")
	

out.sort()
for o in reversed(out):
	print(o)
	
print(len(out))
	
#	
#	f1 = (i >> 0) & 1
#	f2 = (i >> 1) & 1
#	f3 = (i >> 2) & 1
#	
#	print(f"{f1} - {f2} - {f3}")



#for i in range(0,10):
#	el = f"el {statuses[i % 2]}"
#	ela = f"ancestor of el {statuses[i % 3]}"
#	print(f"{el} - {ela}")
#	
	