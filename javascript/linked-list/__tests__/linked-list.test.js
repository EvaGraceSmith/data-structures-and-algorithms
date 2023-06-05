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
});



// Can successfully instantiate an empty linked list
// Can properly insert into the linked list
// The head property will properly point to the first node in the linked list
// Can properly insert multiple nodes into the linked list
// Will return true when finding a value within the linked list that exists
// Will return false when searching for a value in the linked list that does not exist
// Can properly return a collection of all the values that exist in the linked list

