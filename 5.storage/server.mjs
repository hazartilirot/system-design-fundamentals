import express from 'express';
import fs from 'fs'

const DATA_DIR = 'aedb_data';

const app = express();

app.use(express.json());

const hashtable = {};

app.post('/memory/:key', (req, res) => {
  hashtable[req.params.key] = req.body.data;
  res.send();
});

app.get('/memory/:key', (req, res) => {
  if (hashtable.hasOwnProperty(req.params.key)) {
    res.send(hashtable[req.params.key]);
    return;
  }
  res.send('null');
})

app.post('/disk/:key', (req, res) => {
  fs.writeFileSync(`${DATA_DIR}/${req.params.key}`, req.body.data)
  res.send();
});

app.get('/disk/:key', (req, res) => {
  try {
    res.send(fs.readFileSync(`${DATA_DIR}/${req.params.key}`))
  } catch (e) {
    res.send('null');
  }
})

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`Server listening on ${PORT}`));