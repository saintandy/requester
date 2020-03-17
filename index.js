const express = require("express");
const app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http);

const server = http.listen(1337, function() {
  console.log('[+] Working.');
});

app.use(express.static(__dirname + '/templates'));

app.get('/', function(req, res) {
  console.log(req.headers.host);
  res.render(__dirname + '/templates/index.ejs', {
    hostname: req.headers.host
  });
});

app.get('/log', function(req, res) {
  let message = req.query.message || "";
  res.status(200).send('');
  io.emit('logs', message);
});

