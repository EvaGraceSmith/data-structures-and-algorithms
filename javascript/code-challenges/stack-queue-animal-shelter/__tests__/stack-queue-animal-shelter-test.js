const { Animal, AnimalShelter } = require('../stack-queue-animal-shelter');

describe('AnimalShelter', () => {
  let shelter;

  beforeEach(() => {
    shelter = new AnimalShelter();
  });

  test('Enqueue and dequeue cats and dogs', () => {
    const dog1 = new Animal('dog', 'Max');
    const dog2 = new Animal('dog', 'Buddy');
    const cat1 = new Animal('cat', 'Luna');
    const cat2 = new Animal('cat', 'Milo');

    shelter.enqueue(dog1);
    shelter.enqueue(dog2);
    shelter.enqueue(cat1);
    shelter.enqueue(cat2);

    expect(shelter.dequeue('cat')).toEqual(cat1);
    expect(shelter.dequeue('dog')).toEqual(dog1);
    expect(shelter.dequeue('dog')).toEqual(dog2);
    expect(shelter.dequeue('cat')).toEqual(cat2);
    expect(shelter.dequeue('dog')).toBeNull();
    expect(shelter.dequeue('bird')).toBeNull();
  });

  test('Return null for invalid preference', () => {
    const cat1 = new Animal('cat', 'Luna');
    shelter.enqueue(cat1);

    expect(shelter.dequeue('invalid')).toBeNull();
  });

  test('Return null when shelter is empty', () => {
    expect(shelter.dequeue('cat')).toBeNull();
    expect(shelter.dequeue('dog')).toBeNull();
  });
});
