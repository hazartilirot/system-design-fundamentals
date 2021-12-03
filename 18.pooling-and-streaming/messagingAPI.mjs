import axios from 'axios'
import WebSocket from 'ws'

export const createMessagingSocket = () => 
  new WebSocket('ws://localhost:3001/messages')

export const getMessages = () =>
  axios.get('http://localhost:3001/messages')
    .then(res => res.data)

export const sendMessage = message =>
  axios.post('http://localhost:3001/messages', message)