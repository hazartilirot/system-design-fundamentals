import database from "./database.mjs";
import express from 'express'

const app = express();

const cache = {};

app.get('/nocache/index.html', (req, res) => {
  database.get('index.html', page => res.send(page));
});

app.get('/cache/index.html', (req, res) => {
  if (cache.hasOwnProperty('index.html')) {
    res.send(cache['index.html']);
    return;
  }
  database.get('index.html', page => {
    cache['index.html'] = page;
    res.send(page);
  });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`Listening on ${PORT}`));
