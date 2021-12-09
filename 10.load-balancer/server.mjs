import express from 'express';

const app = express();

app.get('/hello', (req, res) => {
  console.log(req.headers);
  res.send('Hello.\n')
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => 
  console.log(`Listening on ${PORT}`)
);