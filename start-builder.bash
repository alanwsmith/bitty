#!/bin/bash


watchexec \
  --project-origin .\
  -c -r -p -e html,rs,js,css\
  -i docs/index.html\
  ./build-site.rs
