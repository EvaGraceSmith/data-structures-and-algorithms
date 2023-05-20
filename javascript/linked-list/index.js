'use strict';


class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}



class LinkedList {
  constructor() {
    // when the list is first created, it should be empty
    this.head = null;
  }
  // add a new node to the beginning of the list
  // insert is like unshift in an array
  insert(value) {
    const node = new Node(value);
    // if there is no head, make this the head
    node.next = this.head;
    // if there is a head, make this the head
    this.head = node;
  }
  // append a new node to the end of the list
  //append is like push in an array
  append(value) {
    let node = new Node(value);
    // if there is no head, make this the head
    if (!this.head) {
      this.head = node;
      return;
    }
    let current = this.head;
    while (current.next) {
      current = current.next;
    }
    current.next = node;


  }

  traversal() {
    let current = this.head;
    while (current) {
      console.log(current.value);
      current = current.next;
    }
  }


  includes(value) {
    let current = this.head;
    while (current) {
      if (current.value === value) {
        return true;
      }
      current = current.next;
    }
    return false;
  }
}

let list = new LinkedList();
list.append('a');
list.append('b');
list.append('c');
list.append('d');

console.log(JSON.stringify(list));

module.exports = LinkedList;
