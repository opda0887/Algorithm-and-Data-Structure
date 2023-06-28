// for string key

class Hashtable {
  constructor(size) {
    this.size = size;
    this.table = [];
    for (let i = 0; i < this.size; i++) this.table.push([]);
  }

  // parse string into number
  parse(key_string) {
    let key_number = 0;
    for (let i = 0; i < key_string.length; i++)
      key_number += key_string.charCodeAt(i); // add each char's ASCII
    return key_number;
  }

  // multiplication method
  multiplication_hash(key_string) {
    let key_number = this.parse(key_string); // first do "string_key into number_key"
    const A = (Math.sqrt(5) - 1) / 2;

    const index = Math.floor(this.size * ((key_number * A) % 1));
    return index;
  }

  // set data into hashtable
  set(key, value) {
    const index = this.multiplication_hash(key);
    this.table[index].push({ key, value });
  }

  // get the data from hashtable
  get(key) {
    const index = this.multiplication_hash(key);
    for (let i = 0; i < this.table[index].length; i++) {
      if (this.table[index][i].key == key) return this.table[index][i];
    }
    return null;
  }

  // print all data in hashtable
  printAll() {
    console.log(this.table);
  }
}

let myHashtable = new Hashtable(6);

myHashtable.set("White", "#FFFFFF");
myHashtable.set("Black", "#000000");
myHashtable.set("Orange", "#FFA500");
myHashtable.set("Brown", "#A52A2A");

console.log(myHashtable.get("White"));
myHashtable.printAll();
