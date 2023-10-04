class MyHashMap {
    constructor() {
        this.hashMap = new Array(10000).fill(null).map(() => []);
    }

    _hash(key) {
        return key % 10000;
    }

    put(key, value) {
        const index = this._hash(key);
        const bucket = this.hashMap[index];
        for (let i = 0; i < bucket.length; i++) {
            if (bucket[i][0] === key) {
                bucket[i][1] = value;
                return;
            }
        }
        bucket.push([key, value]);
    }

    get(key) {
        const index = this._hash(key);
        const bucket = this.hashMap[index];
        for (let i = 0; i < bucket.length; i++) {
            if (bucket[i][0] === key) {
                return bucket[i][1];
            }
        }
        return -1;
    }

    remove(key) {
        const index = this._hash(key);
        const bucket = this.hashMap[index];
        for (let i = 0; i < bucket.length; i++) {
            if (bucket[i][0] === key) {
                bucket.splice(i, 1);
                return;
            }
        }
    }
}

const myHashMap = new MyHashMap();
myHashMap.put(1, 1);
myHashMap.put(2, 2);
console.log(myHashMap.get(1));   
console.log(myHashMap.get(3));    
myHashMap.put(2, 1);
console.log(myHashMap.get(2));    
myHashMap.remove(2);
console.log(myHashMap.get(2));    
