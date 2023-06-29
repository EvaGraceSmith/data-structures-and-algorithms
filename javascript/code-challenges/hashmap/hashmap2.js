'use strict';


class HashTable {
    constructor(size) {
        this.size = size;
        this.buckets = new Array(size);
    }


hash(key) {
    let characters = key.split(''); // [a, b, c, d]
    // use the reducer pattern to convert our characters into a single value
    let asciiSum = characters.reduce((sum, character) => {
        return sum + character.charCodeAt(0);
    }, 0);
    // multiply by a prime number
    console.log('asciiSum' , asciiSum);
    let hashKey = (asciiSum * 599) % this.size;
    return hashKey;
}

set (key, value) {
    // get an index
    let position = this.hash(key);
    console.log('hash', hash);

    // remember square bracket notation if key is a variable
    let data = { [key]: value };
    //console.log('data', data);

    // // linked list approach so you can see it
    // if (this.buckets[position]){
    //     let bucket = this.buckets[position];
    //     bucket.add(data);
    // } else {
    //     let bucket = new LinkedList();
    //     bucket.add(data);
    //     this.buckets[position] = bucket;
    //}
this.buckets[position] = data;
}


get(key) {
    let position = this.hash.key;
    if (this.buckets[position]) {
        console.log('this.buckets[position]', this.buckets[position]);
        return this.buckets[position][key];
    } else {
        return null;
    }
}

has(key) {
    let position = this.hash(key);
    if (this.buckets[position]) {
        return true;
    } else {
        return false;
    }
}

// keys() {
//     let results = this.buckets.reduce((keysArr, bucket) => {
//         if (bucket) {
//             let newKeys = Object.keys(bucket);
//             keysArr = [...keysArr, ...newKeys];
//             return keysArr.push(Object.keys(bucket)[0]);
//         }else {
//             return keysArr;
//         }
//         }, []);
//         return results;
//     }

keys() {
    let results = this.buckets.reduce((keysArr, bucket) => {
        if (bucket) {
            let newKeys = Object.keys(bucket);
            keysArr = [...keysArr, ...newKeys];

        return keysArr;
    } else {
        return keysArr;
    }
    }, []);
    return results;
}

}


//this is the test code:

const table = new HashTable(1024);

console.log('table', table);');

let hashOne = table.hash('John');
let hashTwo = table.hash('Jane');
console.log('hashOne', hashOne);
console.log('hashTwo', hashTwo);

table.set('John', 'this is my value');
table.set('Jane', 'how do we define value');

console.log(' updated table', table);
console.log('get works', table.get('John'));
console.log('has worked:' , table.has('John')); //true
console.log('has worked:' , table.has('Joe')); //false











//copilot code:

add(key, value) {
    // get an index
    let hash = this.hash(key);
    console.log('hash', hash);
    // if the index doesn't exist, make it
    if (!this.buckets[hash]) {
        this.buckets[hash] = [];
    }
    // add the key/value pair to the index
    this.buckets[hash].push([key, value]);
    return hash;
}





//copilot code:
get(key) {
    // get the index
    let hash = this.hash(key);
    // get the bucket
    let bucket = this.buckets[hash];
    // iterate through the bucket
    if (!bucket) return null;
    for (let i = 0; i < bucket.length; i++) {
        // find a matching key
        if (bucket[i][0] === key) {
            // return the value
            return bucket[i][1];
        }
    }
}

contains(key) {
    // get the index
    let hash = this.hash(key);
    // get the bucket
    let bucket = this.buckets[hash];
    // iterate through the bucket

    if (!bucket) return false;
    for (let i = 0; i < bucket.length; i++) {

        // find a matching key
        if (bucket[i][0] === key) {
            // return the value
            return true;
        }
    }
    return false;
}

