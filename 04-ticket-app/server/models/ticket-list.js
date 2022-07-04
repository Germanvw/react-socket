const Ticket = require('./ticket');

class TicketList {
  constructor() {
    this.lastAssigned = 0;

    this.pending = [];
    this.assigned = [];
  }

  get nextNumber() {
    return this.lastAssigned++;
  }

  assignedList(number) {
    const list = this.assigned.slice(0, number);
    return list;
  }

  createTicket() {
    const newTicket = new Ticket(this.nextNumber);
    this.pending.push(newTicket);

    return newTicket;
  }

  assignTicket(worker, office) {
    if (this.pending.length === 0) return null;

    const nextTicket = this.pending.shift();

    nextTicket.worker = worker;
    nextTicket.office = office;

    this.assigned.unshift(nextTicket);

    return nextTicket;
  }
}

module.exports = TicketList;
