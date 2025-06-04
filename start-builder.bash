#!/bin/bash


watchexec \
  --project-origin .\
  -c -r -p -e html,rs,js\
  -i docs/index.html\
  ./build-site.rs
