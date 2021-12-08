import mapReduce from './mapReduce.mjs'

const map = data => data.split('\n').forEach(line =>
  mapReduce.emitMapResult(
    (parseInt(line) < 10000 ? 'under' : 'over') + '_10_seconds', 1
  )
)
const mapInput = mapReduce.getMapInput('latencies.txt');
map(mapInput);