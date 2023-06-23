class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Linked_List {
  constructor() {
    this.head = null;
    this.length = 0;
  }

  // * Push a node into the Linked List
  push(value) {
    let node = new Node(value); // create new node

    if (this.head === null) this.head = node; // set the started node
    else {
      let currentNode = this.head;
      while (currentNode.next !== null) currentNode = currentNode.next; // find the last node
      currentNode.next = node; // push a node at the last position
    }

    this.length++;
  }

  // * Pop a node from the Linked List
  pop() {
    if (this.head === null) {
      return null;
    } else if (this.length === 1) {
      let last_node = this.head;
      this.head = null;
      this.length = 0;
      return last_node;
    } else {
      let currentNode = this.head;
      // find the second last node
      while (currentNode.next.next !== null) currentNode = currentNode.next;
      let last_node = currentNode.next;
      currentNode.next = null; // clear the last node (remove the pointer to the last node)
      this.length--;
      return last_node;
    }
  }

  // * Shift a node from the Linked List
  shift() {
    if (this.head === null) {
      return null;
    } else if (this.length === 1) {
      let rm_node = this.head;
      this.head = null;
      this.length = 0;
      return rm_node;
    } else {
      let rm_node = this.head;
      this.head = this.head.next; // set the second node to the first node
      this.length--;
      return rm_node;
    }
  }

  // * Unshift a node to the Linked List
  unshift(value) {
    let node = new Node(value);

    if (this.head === null) this.head = node; // set the started node
    else {
      let old_firstNode = this.head;
      this.head = node; // set the new start node
      this.head.next = old_firstNode; // set the old first node to the second
    }

    this.length++;
  }

  // * Print all nodes in the Linked List
  printAllNodes() {
    let currentNode = this.head;
    while (currentNode !== null) {
      console.log(currentNode.value);
      currentNode = currentNode.next;
    }
  }

  // * Print the Linked List's length
  printLength() {
    console.log("Linked List length = ", this.length);
  }
}

let myLinkesList = new Linked_List();
myLinkesList.push("Wang");
myLinkesList.push("Peter");
myLinkesList.push("May");

let rmNode = myLinkesList.pop();
console.log(rmNode);

rmNode = myLinkesList.shift();
console.log(rmNode);

myLinkesList.push("Lin");
myLinkesList.unshift("Opag");

myLinkesList.printAllNodes();
myLinkesList.printLength();
