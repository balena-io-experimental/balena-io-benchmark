#!/bin/bash

mkdir testDir
mkdir results

# todo: parameterise with env variables
bonnie++ -d testDir -u root -n 64 -x 1 -q >> results/results.csv

# parse the results into json format, give the headings
node index.js

# wait forever when done - so you can manually ssh in and run more tests
sleep infinity