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
      console.log('Client connected: ', client?.id);

      // Send current list state of bands
      client.emit('band-list', this.bandList.getBands());

      client.on('band-vote', (id) => {
        this.bandList.addVotes(id);
        console.log(this.bandList.getBands());

        this.io.emit('band-list', this.bandList.getBands());
      });

      client.on('band-delete', (id) => {
        this.bandList.removeBand(id);
        this.io.emit('band-list', this.bandList.getBands());
      });

      client.on('band-change-name', ({ id, newName }) => {
        this.bandList.changeName(id, newName);
        this.io.emit('band-list', this.bandList.getBands());
      });

      client.on('band-add', (name) => {
        this.bandList.addBand(name);
        this.io.emit('band-list', this.bandList.getBands());
      });
    });
  }
}

module.exports = Sockets;
