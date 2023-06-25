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

  // * Insert a node at a specific position
  insertAt(index, value) {
    if (index > this.length || index < 0) return null;
    else if (index === 0) {
      this.unshift(value);
      return;
    } else if (index === this.length) {
      this.push(value);
      return;
    }

    let currentNode = this.head;
    let node = new Node(value);
    // for loop to find the index-1's node
    for (let i = 0; i < index - 1; i++) currentNode = currentNode.next;
    node.next = currentNode.next; // new node's next point to the old index's node
    currentNode.next = node; // index-1 node's next point to the new node

    this.length++;
  }

  // * Remove a node at a specific position from the Linked List
  removeAt(index) {
    if (index >= this.length || index < 0) return null;
    else if (index === 0) {
      let rm_Node = this.shift();
      return rm_Node;
    } else if (index === this.length - 1) {
      let rm_Node = this.pop();
      return rm_Node;
    }

    let currentNode = this.head;
    // for loop to find the index-1's node
    for (let i = 0; i < index - 1; i++) currentNode = currentNode.next;

    let rm_Node = currentNode.next;
    currentNode.next = currentNode.next.next;

    this.length--;

    return rm_Node;
  }

  // * Get the node data at the Linked List
  get(index) {
    if (index >= this.length || index < 0) return null;

    let currentNode = this.head;
    // for loop to find the index's node
    for (let i = 0; i < index; i++) currentNode = currentNode.next;

    return currentNode.value;
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

myLinkesList.insertAt(3, "Lapus");
myLinkesList.removeAt(2);

let findNode = myLinkesList.get(0);
console.log(findNode);

myLinkesList.printAllNodes();
myLinkesList.printLength();
