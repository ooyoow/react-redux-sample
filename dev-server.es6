const path = require('path');
const express = require('express');
const app = express();
const sleep = require('sleep');

var server = require('http').createServer();
var WebSocketServer = require('ws').Server;
var wss = new WebSocketServer({ server: server, path: "/chat" });
var port = 3000;

//[{user: "user1", ws: ws1}, {user: "user2", ws: ws2}, ///]
var connections = [];
var userID = 1;

function broadcast(message) {
  connections.forEach((con) => {
    con.ws.send(message);
  });
}

wss.on('connection', function connection(ws) {

  const name = ws.upgradeReq.url.substring(11);
  userID = userID + 1;
  const user = userID + "_" + decodeURIComponent(name);

  console.log("user: " + user + ', joined');
  connections.push({user: user, ws: ws});

  ws.on('close', function () {
    connections = connections.filter(con => con.ws !== ws);
    const id = Math.floor( Math.random() * 10000 );//generate random number 1 ~ 10000
    const json = {id: id, user: user, message: "exited!"};
    broadcast(JSON.stringify(json))
  });

  ws.on('message', message => {
    console.log("user: " + user + ', message: ', message);
    const id = Math.floor( Math.random() * 10000 );//generate random number 1 ~ 10000
    const json = {id: id, user: user, message: message};
    broadcast(JSON.stringify(json))
  });

  const id = Math.floor( Math.random() * 10000 );//generate random number 1 ~ 10000
  const json = {id: id, user: user, message: "joined!"};
  broadcast(JSON.stringify(json))
});

app.use('/dist', express.static('dist'));

app.get('/api/count', (req, res) => {
  res.contentType('application/json');
  const obj = {"amount": 100};
  sleep.sleep(1);
  res.json(obj);
});

app.get('/api/todos/all', (req, res) => {
  res.contentType('application/json');
  const todos = [
    {id: 1, text: "todo 1", isComplete: false},
    {id: 2, text: "todo 2", isComplete: false}
  ];
  res.json(todos);
});

app.get('*', (req, res) => res.sendFile(path.join(__dirname, 'index.html')));

server.on('request', app);
server.listen(port, () => console.log('Listening on ' + server.address().port));