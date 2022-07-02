const Band = require('./band');

class BandList {
  constructor() {
    this.bands = [new Band('Ambkor'), new Band('Crow'), new Band('ZPU')];
  }

  addBand(name) {
    const newBand = new Band(name);
    this.bands.push(newBand);
    return this.bands;
  }

  removeBand(id) {
    this.bands = this.bands.filter((band) => band.id !== id);
  }

  getBands() {
    return this.bands;
  }

  addVotes(id) {
    this.bands = this.bands.map((band) => {
      band?.id === id ? band.votes++ : band;
    });
  }

  changeName(id, newName) {
    this.bands = this.bands.map((band) => {
      band?.id === id ? (band.name = newName) : band;
    });
  }
}

module.exports = BandList;
