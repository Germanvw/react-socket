const { v4: randomId } = require('uuid');

class Band {
  constructor(name) {
    this.id = randomId();
    this.name = name;
    this.votes = 0;
  }
}

module.exports = Band;
