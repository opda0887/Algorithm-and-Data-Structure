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

  printPQ() {
    console.log(this.values);
  }
}

let myPQ = new PriorityQueue();

myPQ.enqueue("Wash dishes", 3);
myPQ.enqueue("Learn coding", 5);
myPQ.enqueue("Go to sleep", 1);
myPQ.enqueue("Play video games", 2);

myPQ.printPQ();
