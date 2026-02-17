#!/bin/bash

./empty-output-folder.bash
watchexec -c -e html,js,py,txt,json,svg ./make_tests.py
