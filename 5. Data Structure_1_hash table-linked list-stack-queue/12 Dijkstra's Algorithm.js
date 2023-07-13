class Node {
  constructor(value) {
    this.value = value;
    this.visited = false;
    this.distanceFromStartNode = Infinity;
    this.previousNode = null; // to record the shortest path from start node to target node
    this.edges = [];
  }

  addEdges(edge) {
    this.edges.push(edge);
  }
}

class Edge {
  // A --2-- B
  // for A : node=B, edge_weight=2; show B is a neighbor node of A
  constructor(node, edge_weight) {
    this.node = node;
    this.edge_weight = edge_weight;
  }
}

let A = new Node("A");
let B = new Node("B");
let C = new Node("C");
let D = new Node("D");
let E = new Node("E");
let F = new Node("F");

A.addEdges(new Edge(B, 2));
A.addEdges(new Edge(C, 2));
B.addEdges(new Edge(A, 2));
B.addEdges(new Edge(D, 1));
B.addEdges(new Edge(E, 4));
C.addEdges(new Edge(A, 2));
C.addEdges(new Edge(D, 1));
C.addEdges(new Edge(F, 2));
D.addEdges(new Edge(B, 1));
D.addEdges(new Edge(C, 1));
D.addEdges(new Edge(E, 2));
D.addEdges(new Edge(F, 3));
E.addEdges(new Edge(B, 4));
E.addEdges(new Edge(D, 2));
E.addEdges(new Edge(F, 1));
F.addEdges(new Edge(C, 2));
F.addEdges(new Edge(D, 3));
F.addEdges(new Edge(E, 1));

/**
 * ? use MinHeap to:
 * * 1. store nodes with "distanceFromStartNode" in ascending
 * * 2. take the smallest distanceFromStartNode's node
 */
class MinHeap {
  constructor() {
    this.values = [];
  }

  enqueue(node) {
    if (this.values.length == 0) {
      this.values.push(node);
      return;
    }

    this.values.push(node);
    let newNode_Index = this.values.length - 1;
    let parentNode_Index = Math.floor((newNode_Index - 1) / 2);
    while (
      parentNode_Index >= 0 &&
      this.values[newNode_Index].distanceFromStartNode <
        this.values[parentNode_Index].distanceFromStartNode
    ) {
      // swap two node while newNode smaller than parentnode
      let parentNode = this.values[parentNode_Index];
      this.values[parentNode_Index] = this.values[newNode_Index];
      this.values[newNode_Index] = parentNode;
      // update index number
      newNode_Index = parentNode_Index;
      parentNode_Index = Math.floor((newNode_Index - 1) / 2);
    }
  }

  dequeue() {
    if (this.values.length == 0) return null;
    else if (this.values.length == 1) {
      const removeNode = this.values.shift();
      return removeNode;
    }

    // swap first & last node, and pop the new last node(old first node & the smallest distanceFromStartNode's node)
    const lastNode_index = this.values.length - 1;
    let removedNode = this.values[0];
    this.values[0] = this.values[lastNode_index];
    this.values.pop();

    this.minHeapify(0); // sort the minHeap again

    return removedNode;
  }

  minHeapify(parentNode_index) {
    let smallest_index = parentNode_index;
    let leftNode_index = parentNode_index * 2 + 1;
    let rightNode_index = parentNode_index * 2 + 2;

    // find the smallestNode's index
    if (
      leftNode_index <= this.values.length &&
      this.values[leftNode_index] < this.values[parentNode_index]
    )
      smallest_index = leftNode_index;
    if (
      rightNode_index <= this.values.length &&
      this.values[rightNode_index] < this.values[smallest_index]
    )
      smallest_index = rightNode_index;

    // if childNode's distanceFromStartNode smaller than parentNode's
    if (smallest_index != parentNode_index) {
      let smallestNode = this.values[smallest_index];
      this.values[smallest_index] = this.values[parentNode_index];
      this.values[parentNode_index] = smallestNode;
      this.minHeapify(smallest_index); // do the function again with the old smallestNode's index
    }
  }

  // sort minHeap when the node's distanceFromStartNode changed
  decrease_piority(node) {
    let node_index = this.values.indexOf(node);
    let parentNode_index = Math.floor((node_index - 1) / 2);
    while (
      parentNode_index >= 0 &&
      this.values[node_index].distanceFromStartNode <
        this.values[parentNode_index].distanceFromStartNode
    ) {
      // swap 2 nodes
      let targetNode = this.values[node_index];
      this.values[node_index] = this.values[parentNode_index];
      this.values[parentNode_index] = targetNode;
      // update index
      node_index = parentNode_index;
      parentNode_index = Math.floor((node_index - 1) / 2);
    }
  }
}

function Dijkstra(startNode) {
  let MH = new MinHeap();
  // set the startNode's distance to 0, and be visited
  startNode.distanceFromStartNode = 0;
  startNode.visited = true;
  // push all nodes to the minHeap
  MH.enqueue(A);
  MH.enqueue(B);
  MH.enqueue(C);
  MH.enqueue(D);
  MH.enqueue(E);
  MH.enqueue(F);
  // get the smallest node of distanceFromStartNode (startNode)
  let currentNode = MH.dequeue();
  // 1. min heap最小值的node => currentNode
  // 2. node鄰居中，沒有拜訪過的node => neighborNode
  // 3. if (neighborNode.distance > currentNode.distance + weight)
  //  => neighborNode.distance = currentNode.distance + weight
  // 4. neighborNode.previous = currentNode, MH decrease neighborNode's priority
  while (MH.values.length != 0) {
    currentNode.edges.forEach((edge) => {
      let neighborNode = edge.node;
      let edge_weight = edge.edge_weight;
      // prevent each travel twice
      if (neighborNode.visited == false) {
        if (
          neighborNode.distanceFromStartNode >
          currentNode.distanceFromStartNode + edge_weight
        ) {
          neighborNode.distanceFromStartNode =
            currentNode.distanceFromStartNode + edge_weight;
          neighborNode.previousNode = currentNode;
          MH.decrease_piority(neighborNode);
        }
      }
    });
    currentNode = MH.dequeue(); // get the smallest node of distanceFromStartNode from minHeap again
    currentNode.visited = true;
  }
}

// run the function
Dijkstra(A);
console.log("A's information");
console.log(A.distanceFromStartNode);
console.log(A.previousNode);
console.log("B's Info");
console.log(B.distanceFromStartNode);
console.log(B.previousNode.value);
console.log("C's Info");
console.log(C.distanceFromStartNode);
console.log(C.previousNode.value);
console.log("D's Info");
console.log(D.distanceFromStartNode);
console.log(D.previousNode.value);
console.log("E's Info");
console.log(E.distanceFromStartNode);
console.log(E.previousNode.value);
console.log("F's Info");
console.log(F.distanceFromStartNode);
console.log(F.previousNode.value);
