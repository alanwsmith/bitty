#!/usr/bin/env python3

import json
from datetime import datetime

now = datetime.now()
current_time = now.strftime("%Y-%m-%d %H:%M:%S")

data = {
    "updated": current_time
}

path = "../data/auto.json"
with open(path, 'w', encoding='utf-8') as _out:
    json.dump(data, _out, sort_keys=True, indent=4)



