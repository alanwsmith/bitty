#!/bin/bash

TIMESTAMP=$(date "+%B %-d, %Y - %-I:%M %p")

echo "{ \"timestamp\": \"$TIMESTAMP\" }" > "../_data/updated.json"
