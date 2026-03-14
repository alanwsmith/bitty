#!/bin/bash

cat data-all.json \
  | jq '.cards = .cards[0:10]' \
  > data.json


