const path = require('path');
const express = require('express');

const server = require('http');

const socketio = require('socket.io');
const Sockets = require('./sockets');

class Server {
  constructor() {
    this.app = express();
    this.port = process.env.PORT;
    this.server = server.createServer(this.app);
    this.io = socketio(this.server, {
      /* configs */
    });
  }

  middlewares() {
    this.app.use(express.static(path.resolve(__dirname, '../public')));
  }

  configurarSockets() {
    new Sockets(this.io);
  }

  execute() {
    this.middlewares();

    // socket init.
    this.configurarSockets();

    // server init.
    this.server.listen(this.port, () => {
      console.log(`Server is running on port ${this.port}`);
    });
  }
}

module.exports = Server;
