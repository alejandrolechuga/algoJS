function Node (data) {
  this.data = data;
  this.right = null;
  this.left = null;
}

function BinaryTree () {
  this.root;
}

BinaryTree.prototype.lookup = function (node, target) {
  // Base case == emty tree
  // if the target is not found return a false value
  if (!node) { 
    return false;
  }
  else {
    // check if is found here 
    if (target == node.data) {
      return node;
    }
    else {
      //otherwise recur down to the correct subtree 
      // choose the side to base on the less-than operation
      if (target < node.data) {
        return this.lookup(node.left, target);
      } else  {
        return this.lookup(node.right, target);
      }
    }
  }
};

BinaryTree.prototype.insert =  function (node, data) {
  // if the node is null return a new node
  if (node == null) {
    return Node(data);
  } else {
    // otherwise recur down the tree
    if (node.data <= data) {
      node.left = this.insert(node.left , data);
    } else {
      node.right = this.insert(node.right, data);
    }
    return node;
  }
};