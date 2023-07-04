// use Heap to implement PQ

class Node {
  constructor(key, priority) {
    this.key = key;
    this.priority = priority;
  }
}

class PriorityQueue {
  constructor() {
    this.values = [];
  }

  enqueue(key, priority) {
    const node = new Node(key, priority);

    // check the PQ is empty or not
    if (this.values.length == 0) {
      this.values.push(node);
      return true;
    }

    this.values.push(node);
    let nodeIndex = this.values.length - 1;
    let parentIndex = Math.floor((nodeIndex - 1) / 2);
    // check whether we have to swap the parent and child (parent.pry > child.pry)
    while (
      parentIndex >= 0 &&
      this.values[nodeIndex].priority > this.values[parentIndex].priority
    ) {
      // swap parent and child
      let parentNode = this.values[parentIndex];
      this.values[parentIndex] = this.values[nodeIndex];
      this.values[nodeIndex] = parentNode;
      // change the nodeIndex -> parentIndex & parentIndex -> its parentIndex
      nodeIndex = parentIndex;
      parentIndex = Math.floor((nodeIndex - 1) / 2);
    }
  }

  dequeue() {
    if (this.values.length == 0) return null;
    else if (this.values.length == 1) {
      let removeNode = this.values.pop();
      return removeNode;
    }

    // swap two (first & last) nodes, then remove last node
    let firstNode = this.values[0];
    this.values[0] = this.values[this.values.length - 1];
    this.values[this.values.length - 1] = firstNode;
    let removeNode = this.values.pop(); // the first node
    // then do "maxHeapify"
    this.maxHeapify(0);
    return removeNode;
  }

  maxHeapify(parentIndex) {
    let largestIndex;
    let leftIndex = parentIndex * 2 + 1;
    let rightIndex = parentIndex * 2 + 2;
    // find the largest value's index in: parentNode, leftNode, rightNode
    if (
      leftIndex <= this.values.length - 1 &&
      this.values[leftIndex].priority > this.values[parentIndex].priority
    )
      largestIndex = leftIndex;
    else largestIndex = parentIndex;
    if (
      rightIndex <= this.values.length - 1 &&
      this.values[rightIndex].priority > this.values[largestIndex].priority
    )
      largestIndex = rightIndex;
    // swap the data if the largestIndex !== parentIndex
    if (largestIndex !== parentIndex) {
      let highPriorityNode = this.values[largestIndex];
      this.values[largestIndex] = this.values[parentIndex];
      this.values[parentIndex] = highPriorityNode;
      this.maxHeapify(largestIndex);
    }
  }

  printPQ() {
    console.log(this.values);
  }
}

let myPQ = new PriorityQueue();

myPQ.enqueue("Wash dishes", 3);
myPQ.enqueue("Learn coding", 5);
myPQ.enqueue("Go to sleep", 1);
myPQ.enqueue("Play video games", 2);
myPQ.enqueue("Do math", 4);

myPQ.printPQ();

console.log(myPQ.dequeue());
console.log(myPQ.dequeue());
console.log(myPQ.dequeue());
myPQ.printPQ();
