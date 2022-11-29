import express from 'express';
import redis from 'redis';

const app = express();
const subscribe = redis.createClient();

// subcribe channel
subscribe.subscribe('ordersystem');
subscribe.on('message', (chennel, message) => {
  console.log(`The chennel for sendmail is ${chennel}`);
  console.log(`The message for sendmail is `, JSON.parser(message));
});
const port = 3002;
app.listen(port, () => {
  console.log(`The sendmail server is running in port ${port}`);
});
