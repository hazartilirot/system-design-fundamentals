import mapReduce from './mapReduce.mjs';

const reduce = (key, values) => 
  mapReduce.emitReduceResult(key, values.length);

mapReduce.getReduceInputs().forEach(input => reduce(input[0], input[1]))