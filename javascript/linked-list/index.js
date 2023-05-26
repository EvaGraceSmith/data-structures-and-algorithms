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

  insertBefore(value, newValue) {
    let node = new Node(newValue);
    if (!this.head) {
      return;
    }
    let current = this.head;
    while (current.next) {
      if (current.next.value === value) {
        let tempNode = current.next;
        current.next = node;
        node.next = tempNode;
        return;

      }
      current = current.next;
    }
  }

  // insert after
  insertAfter(value, newValue) {
    let node = new Node(newValue);
    if (!this.head) {
      return;
    }
    let current = this.head;
    while (current.next) {
      if (current.value === value) {
        let tempNode = current.next;
        current.next = node;
        node.next = tempNode;
        return;

      }
      current = current.next;
    }
  }

// Write the following method for the Linked List class:

// kth from end
// argument: a number, k, as a parameter.
// Return the node’s value that is k places from the tail of the linked list.
// You have access to the Node class and all the properties on the Linked List class as well as the methods created in previous challenges.

// reference code:

// insert after

// insertAfter(value, newValue){
//   let node = new Node (newValue);
//   if (!this.head) {
//     return;
//   }
//   let current = this.head;
//   while (current.next){
//     if (current.value===value){
//       let tempNode=current.next
//       current.next=node
//       node.next=tempNode
//       return

//     }

//     current=current.next

//   }
// }


kthFromEnd(k) {
  let current = this.head;
  let counter = 0;
  while (current.next) {
      counter++;
      current = current.next;
      }
  let length = counter - k;
  if (length < 0 || k < 0) {
      return 'Exception';
  }
  current = this.head;
  for (let i = 0; i < length; i++) {
      current = current.next;
  }
  return current.value;
  }
compare (list2) {
    let current1 = this.head;
    let current2 = list2.head;
    if (!current1 && !current2) {
      return true;
    }
    if (!current1 || !current2) {
        return false;
    }
    while (current1 || current2) {
        if (!current1 || !current2 || current1.value !== current2.value) {
            return false;
        }
        current1 = current1.next;
        current2 = current2.next;
    }
    return true;
}





  ziplist(list1, list2) {
    let current1 = list1.head;
    let current2 = list2.head;
    let newList = new LinkedList();
    while (current1 || current2) {
        if (current1) {
            newList.append(current1.value);
            current1 = current1.next;
        }
        if (current2) {
            newList.append(current2.value);
            current2 = current2.next;
        }
    }
    return newList;

}
}


let list = new LinkedList();
list.append('a');
list.append('b');
list.append('c');
list.append('d');


const k = 2; // Find the 2nd node from the end
const kthNodeValue = list.kthFromEnd(k);
console.log(`The ${k}th node from the end is ${kthNodeValue}`);

//console.log(JSON.stringify(list));





module.exports = LinkedList;
