'use strict';

const { Stack, Queue } = require('../stackQueue');



describe('Stack', () => {
  let stack;

  beforeEach(() => {
    stack = new Stack();
  });

  it('can successfully push onto a stack', () => {
    stack.push(10);
    expect(stack.peek()).toBe(10);
  });

  it('can successfully push multiple values onto a stack', () => {
    stack.push(10);
    stack.push(20);
    stack.push(30);
    expect(stack.peek()).toBe(30);
  });

  it('can successfully pop off the stack', () => {
    stack.push(10);
    stack.push(20);
    const poppedValue = stack.pop();
    expect(poppedValue).toBe(20);
    expect(stack.peek()).toBe(10);
  });

  it('can successfully empty a stack after multiple pops', () => {
    stack.push(10);
    stack.push(20);
    stack.pop();
    stack.pop();
    expect(stack.isEmpty()).toBe(true);
  });

  it('can successfully peek the next item on the stack', () => {
    stack.push(10);
    stack.push(20);
    expect(stack.peek()).toBe(20);
    stack.pop();
    expect(stack.peek()).toBe(10);
  });

  it('can successfully instantiate an empty stack', () => {
    expect(stack.isEmpty()).toBe(true);
  });

  it('calling pop on empty stack raises an exception', () => {
    expect(() => stack.pop()).toThrow(Error);
  });

  it('calling peek on empty stack raises an exception', () => {
    expect(() => stack.peek()).toThrow(Error);
  });
});

describe('Queue', () => {
  let queue;

  beforeEach(() => {
    queue = new Queue();
  });

  it('can successfully enqueue into a queue', () => {
    queue.enqueue(10);
    expect(queue.peek()).toBe(10);
  });

  it('can successfully enqueue multiple values into a queue', () => {
    queue.enqueue(10);
    queue.enqueue(20);
    queue.enqueue(30);
    expect(queue.peek()).toBe(10);
  });

  it('can successfully dequeue out of a queue the expected value', () => {
    queue.enqueue(10);
    queue.enqueue(20);
    const dequeuedValue = queue.dequeue();
    expect(dequeuedValue).toBe(10);
    expect(queue.peek()).toBe(20);
  });

  it('can successfully peek into a queue, seeing the expected value', () => {
    queue.enqueue(10);
    queue.enqueue(20);
    expect(queue.peek()).toBe(10);
    queue.dequeue();
    expect(queue.peek()).toBe(20);
  });

  it('can successfully empty a queue after multiple dequeues', () => {
    queue.enqueue(10);
    queue.enqueue(20);
    queue.dequeue();
    queue.dequeue();
    expect(queue.isEmpty()).toBe(true);
  });

  it('can successfully instantiate an empty queue', () => {
    expect(queue.isEmpty()).toBe(true);
  });

  it('calling dequeue on empty queue raises an exception', () => {
    expect(() => queue.dequeue()).toThrow(Error);
  });

  it('calling peek on empty queue raises an exception', () => {
    expect(() => queue.peek()).toThrow(Error);
  });
});
