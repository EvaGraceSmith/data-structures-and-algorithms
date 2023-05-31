class Animal {
  constructor(species, name) {
    this.species = species;
    this.name = name;
  }
}

class AnimalShelter {
  constructor() {
    this.dogQueue = [];
    this.catQueue = [];
  }

  enqueue(animal) {
    if (animal.species === 'dog') {
      this.dogQueue.push(animal);
    } else if (animal.species === 'cat') {
      this.catQueue.push(animal);
    }
  }

  dequeue(pref) {
    if (pref === 'dog') {
      if (this.dogQueue.length > 0) {
        return this.dogQueue.shift();
      }
    } else if (pref === 'cat') {
      if (this.catQueue.length > 0) {
        return this.catQueue.shift();
      }
    }
    return null;
  }
}

module.exports = { Animal, AnimalShelter };
