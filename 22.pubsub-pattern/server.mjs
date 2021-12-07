import express from 'express';
import expressWs from 'express-ws';

const app = express();
expressWs(app);

const sockets = {}

app.use(express.json());

app.post('/:topicId', (req, res) => {
  const {topicId} = req.params;
  const message = req.body

  const topicSockets = sockets[topicId] || [];
  for (const socket of topicSockets)
    socket.send(JSON.stringify(message))
});

app.ws('/:topicId', (socket, req) => {
  const {topicId} = req.params;

  if (!sockets[topicId]) sockets[topicId] = [];

  const topicSockets = sockets[topicId];
  topicSockets.push(socket);

  socket.on('close', () =>
    topicSockets.splice(topicSockets.indexOf(socket), 1));

});

const PORT = process.env.PORT || 3001

app.listen(PORT, () => console.log(`Server listening on ${PORT}`));