class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
    this.node_count = 0;
    this.queue = [];
    this.path = "";
  }

  // x: find where the new node position (want be null)
  // y: find the new node's parent
  addNode(node) {
    let y = null;
    let x = this.root;
    while (x !== null) {
      y = x;
      if (node.value < x.value) x = x.left;
      else x = x.right;
    }
    // judge the new node position
    if (y == null) this.root = node;
    else if (node.value < y.value) y.left = node;
    else y.right = node;
    // node_count add 1
    this.node_count++;
  }

  // * Binary Tree Traversal

  BFTT(node) {
    if (node !== null) {
      this.queue.push(node);
      for (let i = 0; i < this.queue.length; i++) {
        let currentNode = this.queue[i];
        if (currentNode.left !== null) this.queue.push(currentNode.left);
        if (currentNode.right !== null) this.queue.push(currentNode.right);
      }
    }
    // set the path
    for (let i = 0; i < this.node_count; i++)
      this.path += this.queue[i].value + " ";
  }

  preOrder(node) {
    if (node !== null) {
      this.path += node.value + " ";
      this.preOrder(node.left);
      this.preOrder(node.right);
    }
  }

  inOrder(node) {
    if (node !== null) {
      this.inOrder(node.left);
      this.path += node.value + " ";
      this.inOrder(node.right);
    }
  }

  postOrder(node) {
    if (node !== null) {
      this.postOrder(node.left);
      this.postOrder(node.right);
      this.path += node.value + " ";
    }
  }

  // * BTF searching

  search_recursively(node, key) {
    if (node == null || node.value == key) return node;
    else {
      if (key < node.value) return this.search_recursively(node.left, key);
      else return this.search_recursively(node.right, key);
    }
  }

  search_interatively(node, key) {
    while (node !== null && node.value != key) {
      if (key < node.value) node = node.left;
      else node = node.right;
    }
    return node;
  }

  setPath_empty() {
    this.path = "";
  }
}

let bst = new BinarySearchTree();

bst.addNode(new Node(10));
bst.addNode(new Node(15));
bst.addNode(new Node(5));
bst.addNode(new Node(7));
bst.addNode(new Node(8));
bst.addNode(new Node(2));
bst.addNode(new Node(6));
bst.addNode(new Node(13));

bst.BFTT(bst.root);
console.log("BFTT Traversal: " + bst.path);
bst.setPath_empty();

bst.preOrder(bst.root);
console.log("Pre_Order Traversal: " + bst.path);
bst.setPath_empty();

bst.inOrder(bst.root);
console.log("In_Order Traversal: " + bst.path);
bst.setPath_empty();

bst.postOrder(bst.root);
console.log("Post_Order Traversal: " + bst.path);
bst.setPath_empty();

console.log(bst.search_recursively(bst.root, 8));
console.log(bst.search_interatively(bst.root, 1));
