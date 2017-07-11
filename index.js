const http = require('http');
const express = require('express');
const stuff = require('./stuff.json');
const server = express();

server.use(express.static(__dirname + '/public'));

server.get('/api/stuff', (req, res) => {
  res.send(`${req.query.callback}(${JSON.stringify(stuff)})`);
})

server.listen(3000, () => console.log('Listening on 3000'));