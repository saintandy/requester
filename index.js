const express = require("express");
const app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http);


app.get('/', function(req, res) {
  res.sendFile(__dirname + '/templates/index.html');
});

app.get('/log', function(req, res) {
  let message = req.query.message || "";
  res.status(200).send('');
  io.emit('logs', message);
});


const server = http.listen(8000, function() {
  console.log('listening on port 8000');
});
