/**
 * ! In queue, we only can use "enqueue(push)" & "dequeue(shift)"
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

  enqueue(value) {
    let node = new Node(value);

    if (this.head === null) this.head = node;
    else {
      let currentNode = this.head;
      while (currentNode.next !== null) currentNode = currentNode.next;
      currentNode.next = node;
    }

    this.length++;
  }

  dequeue() {
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

myStack.enqueue("Peter");
myStack.enqueue("Wang");
myStack.enqueue("Hary");

myStack.dequeue();

myStack.printAllNodes(); // Wang Hary
