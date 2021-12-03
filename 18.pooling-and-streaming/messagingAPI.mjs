import axios from 'axios'
import WebSocket from 'ws'

export default {
  createMessagingSocket: () =>
    new WebSocket('ws://localhost:3001/messages'),

  getMessages: () =>
    axios.get('http://localhost:3001/messages')
      .then(res => res.data),
  
  sendMessage: message =>
    axios.post('http://localhost:3001/messages', message)
}
