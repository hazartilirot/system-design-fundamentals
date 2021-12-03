import utilities from './utilities.mjs';
import messagingAPI from './messagingAPI.mjs';
import readline from 'readline';

const displayedMessages = {};

const rl = readline.createInterface({
  input: process.stdin,
});

rl.on('line', text => {
  const username = process.env.NAME;
  const id = utilities.getRandomInt(100000);
  displayedMessages[id] = true;

  const message = { id, text, username };
  messagingAPI.sendMessage(message);
});

const displayMessage = message => {
  console.log(`> ${ message.username }: ${ message.text }`);
  displayedMessages[message.id] = true;
};

const getAndDisplayMessages = async () => {
  const messages = await messagingAPI.getMessages();
  for (const message of messages) {
    const messageAlreadyDisplayed = message.id in displayedMessages;

    if (!messageAlreadyDisplayed) displayMessage(message);
  }
};

const pollMessages = () => setInterval(getAndDisplayMessages, 3000);

const streamMessages = () => {
  const messagingSocket = messagingAPI.createMessagingSocket();

  messagingSocket.on('message', data => {
    const message = JSON.parse(data);
    const messageAlreadyDisplayed = message.id in displayedMessages;
    if (!messageAlreadyDisplayed) displayMessage(message);
  });
};

if (process.env.MODE === 'poll') {
  getAndDisplayMessages();
  pollMessages();
} else if (process.env.MODE === 'stream') {
  getAndDisplayMessages();
  streamMessages();
}
