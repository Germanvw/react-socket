const TicketList = require('./ticket-list');

class Sockets {
  constructor(io) {
    this.io = io;

    this.ticketList = new TicketList();

    this.socketEvents();
  }

  socketEvents() {
    // On connection
    this.io.on('connection', (client) => {
      // Escuchar evento: mensaje-to-server
      client.on('create-ticket', (_, callback) => {
        const ticket = this.ticketList.createTicket();
        callback(ticket);
      });

      client.on('next-ticket', ({ office, worker }, callback) => {
        const assigned = this.ticketList.assignTicket(worker, office);

        callback(assigned);

        const list = this.ticketList.assignedList(13);

        this.io.emit('ticket-assigned', list);
      });
    });
  }
}

module.exports = Sockets;
