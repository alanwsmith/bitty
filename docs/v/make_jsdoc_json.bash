#!/bin/bash

MAJOR=8
MINOR=0
PATCH=0
EXTRA="-beta1"
KEY="${MAJOR}.${MINOR}.${PATCH}${EXTRA}"
IN="${KEY}/bitty-${KEY}.dev.js"
OUT="../versions/${MAJOR}/${MINOR}/${PATCH}/documentation/jsdoc.json"

watchexec -c -e js "jsdoc -X \"${IN}\" > \"${OUT}\""


