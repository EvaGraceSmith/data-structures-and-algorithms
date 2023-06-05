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

  it('should add a node to the end of the linked list', () => {
    list.append('a');
    expect(list.head.value).toBe('a');
    expect(list.head.next).toBeNull();
  });

  it('should add multiple nodes to the end of the linked list', () => {
    list.append('a');
    list.append('b');
    list.append('c');
    expect(list.head.value).toBe('a');
    expect(list.head.next.value).toBe('b');
    expect(list.head.next.next.value).toBe('c');
    expect(list.head.next.next.next).toBeNull();
  });

  it('should insert a node before a node located in the middle of the linked list', () => {
    list.append('a');
    list.append('b');
    list.append('c');
    list.insertBefore('b', 'd');
    expect(list.toString()).toBe('{ a } -> { d } -> { b } -> { c } -> NULL');
  });

  it('should insert a node before the first node of the linked list', () => {
    list.append('a');
    list.append('b');
    list.insertBefore('a', 'd');
    expect(list.toString()).toBe('{ d } -> { a } -> { b } -> NULL');
  });

  it('should insert a node after a node located in the middle of the linked list', () => {
    list.append('a');
    list.append('b');
    list.append('c');
    list.insertAfter('b', 'd');
    expect(list.toString()).toBe('{ a } -> { b } -> { d } -> { c } -> NULL');
  });

  it('should insert a node after the last node of the linked list', () => {
    list.append('a');
    list.append('b');
    list.insertAfter('b', 'c');
    expect(list.toString()).toBe('{ a } -> { b } -> { c } -> NULL');
  });

  it('should delete a node from the linked list', () => {
    list.append('a');
    list.append('b');
    list.append('c');
    list.delete('b');
    expect(list.toString()).toBe('{ a } -> { c } -> NULL');
  });

  it('should throw an error when trying to delete from an empty linked list', () => {
    expect(() => {
      list.delete('a');
    }).toThrow('The list is empty. Cannot delete.');
  });

  it('should throw an error when the node to delete is not found in the linked list', () => {
    list.append('a');
    list.append('b');
    list.append('c');
    expect(() => {
      list.delete('d');
    }).toThrow('Node with value d not found.');
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
// Can successfully delete a node with a value in the middle of the linked list
