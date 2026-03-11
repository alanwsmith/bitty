#!/bin/bash

MAJOR=8
MINOR=0
PATCH=0
EXTRA="-beta2"
KEY="${MAJOR}.${MINOR}.${PATCH}${EXTRA}"
INDIR="../../../../../v/${KEY}"
IN="${INDIR}/bitty-${KEY}.dev.js"
OUT="jsdoc.json"

watchexec -c -w "${INDIR}" -e js "jsdoc -X \"${IN}\" > \"${OUT}\""




