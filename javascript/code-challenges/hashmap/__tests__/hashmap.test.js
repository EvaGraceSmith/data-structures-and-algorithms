const Hashtable = require('../hashmap');


describe('Hashtable', () => {
  let hashtable;

  beforeEach(() => {
    hashtable = new Hashtable();
  });

  it('should set a key/value pair correctly', () => {
    hashtable.set('key1', 'value1');

    expect(hashtable.get('key1')).toBe('value1');
  });

  it('should retrieve the value based on the key', () => {
    hashtable.set('key1', 'value1');
    hashtable.set('key2', 'value2');

    expect(hashtable.get('key1')).toBe('value1');
    expect(hashtable.get('key2')).toBe('value2');
  });

  it('should return null for a key that does not exist', () => {
    hashtable.set('key1', 'value1');

    expect(hashtable.get('key2')).toBeNull();
  });

  it('should return a list of all unique keys', () => {
    hashtable.set('key1', 'value1');
    hashtable.set('key2', 'value2');
    hashtable.set('key3', 'value3');

    expect(hashtable.keys()).toEqual(['key1', 'key2', 'key3']);
  });

  it('should handle collisions within the hashtable', () => {
    hashtable.set('key1', 'value1');
    hashtable.set('key11', 'value11');

    expect(hashtable.get('key1')).toBe('value1');
    expect(hashtable.get('key11')).toBe('value11');
  });

  it('should retrieve a value from a bucket with a collision', () => {
    hashtable.set('key1', 'value1');
    hashtable.set('key11', 'value11');

    expect(hashtable.get('key1')).toBe('value1');
    expect(hashtable.get('key11')).toBe('value11');
  });

  it('should hash a key to an in-range value', () => {
    const hashValue = hashtable.hash('key1');

    expect(hashValue).toBeGreaterThanOrEqual(0);
    expect(hashValue).toBeLessThan(hashtable.size);
  });
});

