const express = require('express');
const redis = require('redis');

const app = express();
const port = 1337;
const client = redis.createClient({ host: 'redis' });


app.get('/status', (req, res) => {
  client.ping((err, reply) => {
    res.json({
      server: 'PING',
      redis: reply,
    });
  });
});

app.get('/limes', (req, res) => {
  client.get('limes', (err, reply) => {
    const limes = reply || 0;
    res.json({
      limes,
    });
  });
});

app.put('/limes', (req, res) => {
  client.incr('limes', (err, reply) => {
    const limes = reply || 0;
    res.json({
      limes,
    });
  });
});

app.delete('/limes', (req, res) => {
  client.decr('limes', (err, reply) => {
    const limes = reply || 0;
    res.json({
      limes,
    });
  });
});

app.listen(port, () => console.log(`Limes listening on port ${port}`));
