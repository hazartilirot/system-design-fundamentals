import express from 'express';
import { createClient } from 'redis';
import database from './database.mjs';

const app = express();

const uri = process.env.REDIS_URI ?? 'redis://localhost:6379';

const redis = createClient({ url: uri });
  
await redis.connect();
  
app.get('/nocache/index.html', (req, res) => {
  database.get('index.html', page => {
    res.send(page)
  })
});

app.get('/cache/index.html', async (req, res) => {
  
  const redisRes = await redis.get('index.html')
  
  if (redisRes) {
    res.send(redisRes)
    return;
  }
  database.get('index.html', async page => {
    await redis.set('index.html', page, { 'EX': 10 })
    res.send(page);
  })
})

app.listen(5000, () => console.log('Server listening on port 5000'))