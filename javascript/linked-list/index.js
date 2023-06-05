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


  // The class should contain the following methods toString
  toString() {
    let current = this.head;
    let string = '';
    //goal: "{ a } -> { b } -> { c } -> NULL"
    while (current) {
      string += `{ ${current.value} } -> `;
      current = current.next;
    }
    string += 'NULL';
    return string;
  }

  //From code challenge 06  linked-list-insertions
  // insertBefore(value, newValue) {
  //   let current = this.head;
  //   let previous = null;
  //   while (current) {
  //     if (current.value === value) {
  //       let newNode = new Node(newValue);
  //       newNode.next = current;
  //       previous.next = newNode;
  //       return;
  //     }
  //     previous = current;
  //     current = current.next;
  //   }

  // }

  // insertBefore(value, newValue) {
  //   let node = new Node(newValue);
  //   if (!this.head) {
  //     return;
  //   }
  //   let current = this.head;
  //   while (current.next) {
  //     if (current.next.value === value) {
  //       let tempNode = current.next;
  //       current.next = node;
  //       node.next = tempNode;
  //       return;

  //     }
  //     current = current.next;
  //   }
  // }

  // // insert after
  // insertAfter(value, newValue) {
  //   let node = new Node(newValue);
  //   if (!this.head) {
  //     return;
  //   }
  //   let current = this.head;
  //   while (current.next) {
  //     if (current.value === value) {
  //       let tempNode = current.next;
  //       current.next = node;
  //       node.next = tempNode;
  //       return;

  //     }
  //     current = current.next;
  //   }
  // }


  insertBefore(value, newValue) {
    const newNode = new Node(newValue);

    if (!this.head) {
      throw new Error('The list is empty. Cannot insert before.');
    }

    if (this.head.value === value) {
      newNode.next = this.head;
      this.head = newNode;
      return;
    }

    let current = this.head;
    while (current.next) {
      if (current.next.value === value) {
        newNode.next = current.next;
        current.next = newNode;
        return;
      }
      current = current.next;
    }

    throw new Error(`Node with value ${value} not found.`);
  }

  insertAfter(value, newValue) {
    const newNode = new Node(newValue);

    if (!this.head) {
      throw new Error('The list is empty. Cannot insert after.');
    }

    let current = this.head;
    while (current) {
      if (current.value === value) {
        newNode.next = current.next;
        current.next = newNode;
        return;
      }
      current = current.next;
    }

    throw new Error(`Node with value ${value} not found.`);
  }

  delete(value) {
    if (!this.head) {
      throw new Error('The list is empty. Cannot delete.');
    }

    if (this.head.value === value) {
      this.head = this.head.next;
      return;
    }

    let current = this.head;
    while (current.next) {
      if (current.next.value === value) {
        current.next = current.next.next;
        return;
      }
      current = current.next;
    }

    throw new Error(`Node with value ${value} not found.`);
  }
}

let list = new LinkedList();
list.append('a');
list.append('b');
list.append('c');
list.append('d');

console.log(JSON.stringify(list));

module.exports = LinkedList;
