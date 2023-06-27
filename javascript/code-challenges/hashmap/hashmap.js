'use strict'

class Hashtable {
  constructor() {
    this.table = {};
    this.size = 1000; // Set an arbitrary size for the hashtable
  }

  hash(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash += key.charCodeAt(i);
    }
    return hash % this.size;
  }

  set(key, value) {
    const index = this.hash(key);
    if (this.table[index]) {
      const bucket = this.table[index];
      for (let i = 0; i < bucket.length; i++) {
        if (bucket[i][0] === key) {
          bucket[i][1] = value;
          return;
        }
      }
      bucket.push([key, value]);
    } else {
      this.table[index] = [[key, value]];
    }
  }

  get(key) {
    const index = this.hash(key);
    const bucket = this.table[index];
    if (bucket) {
      for (let i = 0; i < bucket.length; i++) {
        if (bucket[i][0] === key) {
          return bucket[i][1];
        }
      }
    }
    return null;
  }

  has(key) {
    const index = this.hash(key);
    const bucket = this.table[index];
    if (bucket) {
      for (let i = 0; i < bucket.length; i++) {
        if (bucket[i][0] === key) {
          return true;
        }
      }
    }
    return false;
  }

  keys() {
    const keys = [];
    for (const bucket of Object.values(this.table)) {
      for (const [key] of bucket) {
        if (!keys.includes(key)) {
          keys.push(key);
        }
      }
    }
    return keys;
  }
}

module.exports = Hashtable;
