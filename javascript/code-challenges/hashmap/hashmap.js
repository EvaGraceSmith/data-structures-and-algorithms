'use strict'

class Hashtable {
  constructor() {
    this.table = {};
  }

  hash(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash += key.charCodeAt(i);
    }
    return hash % 31; // Using a prime number for better distribution
  }

  set(key, value) {
    const index = this.hash(key);
    if (!this.table[index]) {
      this.table[index] = {};
    }
    this.table[index][key] = value;
  }

  get(key) {
    const index = this.hash(key);
    if (this.table[index] && this.table[index][key]) {
      return this.table[index][key];
    }
    return undefined;
  }

  has(key) {
    const index = this.hash(key);
    return !!(this.table[index] && this.table[index][key]);
  }

  keys() {
    const keys = [];
    for (const index in this.table) {
      for (const key in this.table[index]) {
        keys.push(key);
      }
    }
    return keys;
  }
}

module.exports = Hashtable;
