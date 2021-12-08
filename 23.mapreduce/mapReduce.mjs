import fs from 'fs';

const HOST = process.env.HOST;

export default {
  getMapInput: filename => 
    fs.readFileSync(`${HOST}/${filename}`, 'utf-8'),
  emitMapResult: (key, value) =>
    fs.appendFileSync(`${HOST}/map_results/${key}.txt`, value + '\n'),
  getReduceInputs: () => {
    const fileNames = fs.readdirSync('map_results', 'utf8');
    const inputs = [];
    for (const fileName of fileNames) {
      const key = fileName.split('.')[0];
      const contents = fs.readFileSync(`map_results/${fileName}`, 'utf-8');
      inputs.push([key, contents.split('\n').filter(e => e !== '')])
    }
    return inputs;
  },
  emitReduceResult: (key, value) =>
    fs.appendFileSync(`reduce_results/results.txt`, `${key} ${value}\n`)
}