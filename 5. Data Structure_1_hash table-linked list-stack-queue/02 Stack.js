/**
 * ! In stack, we only can use "push" & "pop"
 */

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.head = null;
    this.length = 0;
  }

  push(value) {
    let node = new Node(value);

    if (this.head === null) this.head = node;
    else {
      let currentNode = this.head;
      while (currentNode.next !== null) currentNode = currentNode.next;
      currentNode.next = node;
    }

    this.length++;
  }

  pop() {
    if (this.head === null) return null;
    else if (this.length === 1) {
      let rm_node = this.head;
      this.head = null;
      this.length = 0;
      return rm_node;
    } else {
      let currentNode = this.head;
      while (currentNode.next.next !== null) currentNode = currentNode.next;
      let rm_node = currentNode.next;
      currentNode.next = null;
      this.length--;
      return rm_node;
    }
  }

  // * Print all nodes in the Linked List
  printAllNodes() {
    let currentNode = this.head;
    while (currentNode !== null) {
      console.log(currentNode.value);
      currentNode = currentNode.next;
    }
  }
}

let myStack = new Stack();

myStack.push("Peter");
myStack.push("Wang");
myStack.push("Hary");

myStack.pop();

myStack.printAllNodes(); // Peter Wang
