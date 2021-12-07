import messagingApi from "./messagingApi.mjs";
import readline from "readline";

const TOPIC_ID = process.env.TOPIC_ID;

const rl = readline.createInterface({ input: process.stdin })

rl.on('line', text => {
  const name = process.env.NAME;
  
  const message = { name, text }

  messagingApi.publish(message, TOPIC_ID)
})