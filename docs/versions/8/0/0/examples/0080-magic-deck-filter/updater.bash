#!/bin/bash

cat data-all.json \
  | jq '.cards = .cards[0:15]' \
  > data.json


