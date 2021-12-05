import fs from 'fs';
import express from 'express';

const app = express();

const staticConfig = JSON.parse(fs.readFileSync('static_config.json'));

app.get('/static/new_feature.html', (req, res) => {
  
  if (!staticConfig.newFeatureLaunched) {
    res.status(401).send('Unauthorized');
    return;
  }
  res.send(`<html>Hello World</html>\n`)
})

const PORT = process.env.PORT ?? 3000

app.listen(PORT, () => console.log(`Server is listening on port ${PORT}`))