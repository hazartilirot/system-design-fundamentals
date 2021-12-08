#! /bin/bash

rm -f host1/map_results/*.txt
rm -f host2/map_results/*.txt
rm -f map_results/*.txt
rm -f reduce_results/results.txt

HOST=host1 node map.mjs &
HOST=host2 node map.mjs &

wait

HOSTS=host1,host2 node shuffle.mjs

node reduce.mjs

cat reduce_results/results.txt