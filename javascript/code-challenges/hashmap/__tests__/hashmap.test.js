const Hashtable = require('../hashmap');

describe('Hashtable', () => {
  let hashtable;

  beforeEach(() => {
    hashtable = new Hashtable();
  });

  it('should set and get values correctly', () => {
    hashtable.set('key1', 'value1');
    hashtable.set('key2', 'value2');
    hashtable.set('key3', 'value3');

    expect(hashtable.get('key1')).toBe('value1');
    expect(hashtable.get('key2')).toBe('value2');
    expect(hashtable.get('key3')).toBe('value3');
    expect(hashtable.get('key4')).toBeUndefined();
  });

  it('should handle collisions and replace existing values', () => {
    hashtable.set('key1', 'value1');
    hashtable.set('key11', 'value11');
    hashtable.set('key21', 'value21');
    hashtable.set('key31', 'value31');
    hashtable.set('key41', 'value41');

    // Collision occurs with key1 and key11, value for key1 should be replaced
    hashtable.set('key1', 'newvalue1');
    expect(hashtable.get('key1')).toBe('newvalue1');
  });

  it('should check if a key exists', () => {
    hashtable.set('key1', 'value1');
    hashtable.set('key2', 'value2');

    expect(hashtable.has('key1')).toBe(true);
    expect(hashtable.has('key2')).toBe(true);
    expect(hashtable.has('key3')).toBe(false);
  });

  it('should return an array of keys', () => {
    hashtable.set('key1', 'value1');
    hashtable.set('key2', 'value2');
    hashtable.set('key3', 'value3');

    expect(hashtable.keys()).toEqual(['key1', 'key2', 'key3']);
  });
});

