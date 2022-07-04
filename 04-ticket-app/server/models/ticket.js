const { v4: randomId } = require('uuid');

class Ticket {
  constructor(number) {
    this.id = randomId();
    this.number = number;
    this.worker = null;
    this.office = null;
  }
}

module.exports = Ticket;
