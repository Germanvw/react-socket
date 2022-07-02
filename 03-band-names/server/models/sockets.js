const BandList = require('./band-list');

class Sockets {
  constructor(io) {
    this.io = io;

    this.bandList = new BandList();

    this.socketEvents();
  }

  socketEvents() {
    // On connection
    this.io.on('connection', (client) => {
      // Escuchar evento: mensaje-to-server
      console.log('Client connected');

      // Send current list state of bands
      client.emit('band-list', this.bandList.getBands());
    });
  }
}

module.exports = Sockets;
