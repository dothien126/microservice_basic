import express from 'express';
import redis from 'redis';

const app = express();
const publish = redis.createClient();

app.get('/order', (req, res) => {
  const order = [
    {
      productId: 1,
      price: 500,
    },
    {
      productId: 2,
      price: 1000,
    },
  ];

  // Send order to payment and sendmail
  publish.publish('ordersystem', JSON.stringify(order))

  res.json({
    status: 200,
    message: 'Thank you !',
  });
});

const port = 3000;
app.listen(port, () => {
  console.log(`The order server is running in port ${port}`);
});
