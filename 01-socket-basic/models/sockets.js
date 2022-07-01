class Sockets {
  constructor(io) {
    this.io = io;

    this.socketEvents();
  }

  socketEvents() {
    this.io.on('connection', (client) => {
      // Message received from client.
      client.on('send_msg', (data) => {
        this.io.emit('msg_recibido', data);
      });

      //
    });
  }
}

module.exports = Sockets;
