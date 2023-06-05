'use strict';

// Require our linked list implementation
const LinkedList = require('../index');



describe('LinkedList', () => {
  let list;

  beforeEach(() => {
    list = new LinkedList();
  });

  it('should instantiate an empty linked list', () => {
    expect(list.head).toBeNull();
  });

  it('should properly insert into the linked list', () => {
    list.insert('a');
    expect(list.head.value).toBe('a');
    expect(list.head.next).toBeNull();
  });

  it('should update the head property when inserting into a non-empty linked list', () => {
    list.insert('a');
    list.insert('b');
    expect(list.head.value).toBe('b');
    expect(list.head.next.value).toBe('a');
  });

  it('should insert multiple nodes into the linked list', () => {
    list.insert('a');
    list.insert('b');
    list.insert('c');
    expect(list.head.value).toBe('c');
    expect(list.head.next.value).toBe('b');
    expect(list.head.next.next.value).toBe('a');
  });

  it('should return true when finding a value that exists in the linked list', () => {
    list.insert('a');
    list.insert('b');
    list.insert('c');
    expect(list.includes('b')).toBe(true);
  });

  it('should return false when searching for a value that does not exist in the linked list', () => {
    list.insert('a');
    list.insert('b');
    list.insert('c');
    expect(list.includes('d')).toBe(false);
  });

  it('should properly return a collection of all the values in the linked list', () => {
    list.insert('a');
    list.insert('b');
    list.insert('c');
    expect(list.toString()).toBe('{ c } -> { b } -> { a } -> NULL');
  });






  // Can successfully add a node to the end of the linked list
test('Can successfully add a node to the end of the linked list', () => {
  const list = new LinkedList();
  list.append(1);
  expect(list.head.value).toEqual(1);
  expect(list.head.next).toBeNull();

});


  test('Can successfully add multiple nodes to the end of a linked list', () => {
    const list = new LinkedList();
    list.append(1);
    list.append(2);
    expect(list.head.value).toEqual(1);
    expect(list.head.next.value).toEqual(2);
    expect(list.head.next.next).toBeNull();
  });

  // Can successfully insert a node before a node located in the middle of a linked list
  test('Can successfully insert a node before a node located in the middle of a linked list', () => {
    const list = new LinkedList();
    list.append(1);
    list.append(2);
    list.append(3);
    list.insertBefore(2, 5);
    expect(list.head.value).toEqual(1);
    expect(list.head.next.value).toEqual(5);
    expect(list.head.next.next.value).toEqual(2);
    expect(list.head.next.next.next.value).toEqual(3);
  });

  // Can successfully insert a node before the first node of a linked list
  test('Can successfully insert a node before the first node of a linked list', () => {
    const list = new LinkedList();
    list.append(1);
    list.append(2);
    list.append(3);
    list.insertBefore(3, 5);
    expect(list.head.value).toEqual(1);
    expect(list.head.next.value).toEqual(2);
    expect(list.head.next.next.value).toEqual(5);
    expect(list.head.next.next.next.value).toEqual(3);
  });

  // Can successfully insert after a node in the middle of the linked list
  test('Can successfully insert after a node in the middle of the linked list', () => {
    const list = new LinkedList();
    list.append(1);
    list.append(2);
    list.append(3);
    list.insertAfter(2, 5);
    expect(list.head.value).toEqual(1);
    expect(list.head.next.value).toEqual(2);
    expect(list.head.next.next.value).toEqual(5);
    expect(list.head.next.next.next.value).toEqual(3);
  });

  // Can successfully insert a node after the last node of the linked list
  test('Can successfully insert a node after the last node of the linked list', () => {
    const list = new LinkedList();
    list.append(1);
    list.append(2);
    list.append(3);
    list.insertAfter(1, 5);
    expect(list.head.value).toEqual(1);
    expect(list.head.next.value).toEqual(5);
    expect(list.head.next.next.value).toEqual(2);
    expect(list.head.next.next.next.value).toEqual(3);
  });

// Where k is greater than the length of the linked list
test('Where k is greater than the length of the linked list', () => {
  const list = new LinkedList();
  list.append(1);
  list.append(2);
  list.append(3);
  expect(list.kthFromEnd(5)).toEqual('Exception');
});

// Where k and the length of the list are the same
test('Where k and the length of the list are the same', () => {
  const list = new LinkedList();
  list.append(1);
  list.append(2);
  list.append(3);
  expect(list.kthFromEnd(3)).toEqual('Exception');
});

// Where k is not a positive integer
test('Where k is not a positive integer', () => {
  const list = new LinkedList();
  list.append(1);
  list.append(2);
  list.append(3);
  expect(list.kthFromEnd(-1)).toEqual('Exception');
});


// Where the linked list is of a size 1
test('Where the linked list is of a size 1', () => {
  const list = new LinkedList();
  list.append(1);
  expect(list.kthFromEnd(0)).toEqual(1);
});

// “Happy Path” where k is not at the end, but somewhere in the middle of the linked list
test('“Happy Path” where k is not at the end, but somewhere in the middle of the linked list', () => {
  const list = new LinkedList();
  list.append(1);
  list.append(2);
  list.append(3);
  expect(list.kthFromEnd(1)).toEqual(2);
});

// Where the length of list 1 is not equal to the length of list 2
test('Where the length of list 1 is not equal to the length of list 2', () => {
  const list = new LinkedList();
  list.append(1);
  list.append(2);
  list.append(3);
  const list2 = new LinkedList();
  list2.append(1);
  list2.append(2);
  expect(list.compare(list2)).toEqual(false);
});


// Where the length of both lists are 0
test('Where the length of both lists are 0', () => {
  const list = new LinkedList();
  const list2 = new LinkedList();
  expect(list.compare(list2)).toEqual(true);
});

// Where 2nd list is empty
test('Where 2nd list is empty', () => {
  const list = new LinkedList();
  list.append(1);
  list.append(2);
  list.append(3);
  const list2 = new LinkedList();
  expect(list.compare(list2)).toEqual(false);
});

// Where 1st list is empty
test('Where 1st list is empty', () => {
  const list = new LinkedList();
  const list2 = new LinkedList();
  list2.append(1);
  list2.append(2);
  list2.append(3);
  expect(list.compare(list2)).toEqual(false);
});

// Where both lists have the same length and same values
test('Where both lists have the same length and same values', () => {
  const list = new LinkedList();
  list.append(1);
  list.append(2);
  list.append(3);
  const list2 = new LinkedList();
  list2.append(1);
  list2.append(2);
  list2.append(3);
  expect(list.compare(list2)).toEqual(true);
});

// Where both lists have the same length and different values
test('Where both lists have the same length and different values', () => {
  const list = new LinkedList();
  list.append(1);
  list.append(2);
  list.append(3);
  const list2 = new LinkedList();
  list2.append(1);
  list2.append(2);
  list2.append(4);
  expect(list.compare(list2)).toEqual(false);
});

// Where both lists have different length and same values
test('Where both lists have different length and same values', () => {
  const list = new LinkedList();
  list.append(1);
  list.append(2);
  list.append(3);
  const list2 = new LinkedList();
  list2.append(1);
  list2.append(2);
  expect(list.compare(list2)).toEqual(false);
});






});



// Can successfully instantiate an empty linked list
// Can properly insert into the linked list
// The head property will properly point to the first node in the linked list
// Can properly insert multiple nodes into the linked list
// Will return true when finding a value within the linked list that exists
// Will return false when searching for a value in the linked list that does not exist
// Can properly return a collection of all the values that exist in the linked list

// Can successfully add a node to the end of the linked list
// Can successfully add multiple nodes to the end of a linked list
// Can successfully insert a node before a node located i the middle of a linked list
// Can successfully insert a node before the first node of a linked list
// Can successfully insert after a node in the middle of the linked list
// Can successfully insert a node after the last node of the linked list

//
// Unit Tests
// Write tests for the following scenarios, and any other cases that help you ensure your code is working as expected.

// Where k is greater than the length of the linked list
// Where k and the length of the list are the same
// Where k is not a positive integer
// Where the linked list is of a size 1
// “Happy Path” where k is not at the end, but somewhere in the middle of the linked list

// Where the length of list 1 is not equal to the length of list 2
// Where the length of both lists are 0
// Where the length of list 1 is greater than the length of list 2
// Where the length of list 1 is smaller than the length of list 2
// Where the length of both lists are equal
// Where the length of one list is 0



