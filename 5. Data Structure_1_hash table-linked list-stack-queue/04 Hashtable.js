class Hashtable {
  constructor(size) {
    this.size = size; // decide the size(m)
    this.table = [];
    for (let i = 0; i < this.size; i++) this.table.push([]); // array of arrays
  }

  // division method
  devision_hash(key) {
    return key % this.size;
  }

  // multiplication method
  multiplication_hash(key) {
    const A = (Math.sqrt(5) - 1) / 2;
    return Math.floor(this.size * ((key * A) % 1));
  }

  // set a data into this table
  set(key, value) {
    // i use multiplication method
    let index = this.multiplication_hash(key);
    this.table[index].push({ key, value });
  }

  // get the data by key
  get(key) {
    let index = this.multiplication_hash(key);
    for (let i = 0; i < this.table[index].length; i++) {
      if (this.table[index][i].key == key) return this.table[index][i];
    }
    return null;
  }

  // print the hashtable
  printTable() {
    console.log(this.table);
  }
}

let myHashtable = new Hashtable(6);

myHashtable.set(11424, "Mike");
myHashtable.set(6254, "James");
myHashtable.set(4171, "Drake");
myHashtable.set(554, "Kevin");

myHashtable.printTable(); // Mike & Kevin will collision
console.log(myHashtable.get(6254));
console.log(myHashtable.get(123));
