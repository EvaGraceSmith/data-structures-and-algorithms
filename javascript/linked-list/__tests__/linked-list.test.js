'use strict';

// Require our linked list implementation
const LinkedList = require('../index');

describe('Linked List', () => {
  test('Can successfully instantiate an empty linked list', () => {
    const list = new LinkedList();
    expect(list.head).toBeNull();
  });

  test('Can properly insert into the linked list', () => {
    const list = new LinkedList();
    list.insert(1);
    expect(list.head.value).toEqual(1);
    expect(list.head.next).toBeNull();
  });

  test('The head property will properly point to the first node in the linked list', () => {
    const list = new LinkedList();
    list.insert(2);
    expect(list.head.value).toEqual(2);
    expect(list.head.next).toBeNull();
  });

  test('Can properly insert multiple nodes into the linked list', () => {
    const list = new LinkedList();
    list.insert(1);
    list.insert(2);
    expect(list.head.value).toEqual(2);
    expect(list.head.next.value).toEqual(1);
    expect(list.head.next.next).toBeNull();
    list.append('a');
    expect(list.head.next.next.value).toEqual('a');
  });

  test('Will return true when finding a value within the linked list that exists', () => {
    const list = new LinkedList();
    const firstValue = 1;
    const secondValue = 2;
    list.insert(firstValue);
    list.insert(secondValue);
    expect(list.includes(firstValue)).toBeTruthy();
  });

  test('Will return false when searching for a value in the linked list that does not exist', () => {
    const list = new LinkedList();
    const firstValue = 1;
    const secondValue = 2;

    list.insert(firstValue);
    list.insert(secondValue);
  });

  it('works', () => {
    expect(true).toBeTruthy();
  });
});


// Can successfully instantiate an empty linked list
// Can properly insert into the linked list
// The head property will properly point to the first node in the linked list
// Can properly insert multiple nodes into the linked list
// Will return true when finding a value within the linked list that exists
// Will return false when searching for a value in the linked list that does not exist
// Can properly return a collection of all the values that exist in the linked list

