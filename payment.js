import express from 'express';
import redis from 'redis';

const app = express();
const subscribe = redis.createClient();

// subcribe channel
subscribe.subscribe('ordersystem');
subscribe.on('message', (chennel, message) => {
  console.log(`The chennel for payment is ${chennel}`);
  console.log(`The message for payment is ${JSON.parser(message)}`);
});

const port = 3001;
app.listen(port, () => {
  console.log(`The payment server is running in port ${port}`);
});
