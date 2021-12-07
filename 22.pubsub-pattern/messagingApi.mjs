import axios from 'axios';
import WebSocket from 'ws';

export default {
  publish: (message, topicId) =>
    axios.post(`http://localhost:${process.env.PORT || 3001}/${topicId}`, message),
  subscribe: topicId => new WebSocket(`ws://localhost:${process.env.PORT || 3001}/${topicId}`)
}
