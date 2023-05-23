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
