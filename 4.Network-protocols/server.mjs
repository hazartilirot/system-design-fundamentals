import express from 'express';

const app = express();

app.use(express.json());

app.get('/hello', (req, res) => {
  console.log('Headers:', req.headers);
  console.log('Method:', req.method);
  res.send('Received GET request!\n');
});

app.post('/hello', (req, res) => {
  console.log('Headers:', req.headers);
  console.log('Method:', req.method);
  console.log('Body:', req.body);
  res.send('Received POST request!\n');
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`Listening on ${PORT}`));