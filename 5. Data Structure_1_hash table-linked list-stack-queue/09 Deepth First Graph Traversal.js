class Node {
  constructor(value) {
    this.value = value;
    this.visited = false;
    this.neighbors = [];
  }

  addNeighbor(node) {
    this.neighbors.push(node);
  }
}

let A = new Node("A");
let B = new Node("B");
let C = new Node("C");
let D = new Node("D");
let E = new Node("E");
let F = new Node("F");
let G = new Node("G");
let H = new Node("H");
let I = new Node("I");
let J = new Node("J");
let K = new Node("K");
let L = new Node("L");
let M = new Node("M");

A.addNeighbor(E);
A.addNeighbor(F);
B.addNeighbor(D);
C.addNeighbor(D);
D.addNeighbor(B);
D.addNeighbor(C);
D.addNeighbor(E);
D.addNeighbor(I);
E.addNeighbor(A);
E.addNeighbor(D);
E.addNeighbor(F);
E.addNeighbor(I);
F.addNeighbor(A);
F.addNeighbor(E);
F.addNeighbor(I);
G.addNeighbor(H);
G.addNeighbor(I);
H.addNeighbor(G);
H.addNeighbor(I);
H.addNeighbor(L);
I.addNeighbor(D);
I.addNeighbor(E);
I.addNeighbor(F);
I.addNeighbor(G);
I.addNeighbor(H);
I.addNeighbor(J);
I.addNeighbor(K);
I.addNeighbor(M);
J.addNeighbor(I);
J.addNeighbor(M);
K.addNeighbor(I);
K.addNeighbor(L);
K.addNeighbor(M);
L.addNeighbor(H);
L.addNeighbor(K);
M.addNeighbor(I);
M.addNeighbor(J);
M.addNeighbor(K);

let path = "";

function DFGT(start_node) {
  path += start_node.value + " "; // write the node
  start_node.visited = true; // set it been visited

  // find all its "non visited" neighbors, then do the function recursively
  start_node.neighbors.forEach((neighbor_node) => {
    if (!neighbor_node.visited) DFGT(neighbor_node);
  });

  return;
}

DFGT(A);

console.log(path);
// out put: A E D B C I F G H L K M J
