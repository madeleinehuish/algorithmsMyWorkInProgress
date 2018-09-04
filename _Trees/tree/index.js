// --- Directions
// 1) Create a node class.  The constructor
// should accept an argument that gets assigned
// to the data property and initialize an
// empty array for storing children. The node
// class should have methods 'add' and 'remove'.
// 2) Create a tree class. The tree constructor
// should initialize a 'root' property to null.
// 3) Implement 'traverseBF' and 'traverseDF'
// on the tree class.  Each method should accept a
// function that gets called with each element in the tree


//check out https://github.com/benoitvallon/benoitvallon.github.io/blob/master/_posts/data-structures-series/tree.md
//for more ideas for methods...

//also see under _Search for binary search trees

class Node {
	constructor(data) {
		this.data = data;
		this.children = [];
	}

	add(data) {
		this.children.push(new Node(data));
	}

	remove(data) {
		this.children = this.children.filter(node => {
			return node.data!==data;
		})
	}

}

class Tree {
	constructor() {
		this.root = null;
	}

	traverseBF(fn) {
		const arr = [this.root];
		while(arr.length) {
			const node = arr.shift();
			arr.push(...node.children);
			fn(node);
		}
	}

	traverseDF(fn) {
		const arr = [this.root];
		while(arr.length) {
			const node = arr.shift();
			arr.unshift(...node.children);
			fn(node);
		}
	}
}

module.exports = { Tree, Node };

// these methods below were from school and I haven't implemented tests yet...

// Write a function named treeCount that takes in the following:
//   tree (a Tree)
// The function returns a the number of values in the tree.
// Example:
//    1
//   /|\       produces 4
//  2 4 7
function treeCount(tree) {
  return 1 + tree.children.reduce((sum, child) => sum + treeCount(child), 0);
}

// Write a function named binTreeCount that takes in the following:
//   tree (a Binary Tree)
// The function returns a the number of values in the tree.
// Example:
//    1
//   / \       produces 3
//  2   7
function binTreeCount(tree) {
  if (tree === null) {
    return 0;
  } else {
    return 1 + binTreeCount(tree.left) + binTreeCount(tree.right);
  }
}

// Write a function named treeHeight that takes in the following:
//   tree (a Tree)
// The function returns a the height of the longest branch.
// Example:
//    1
//   /|\       produces 2
//  2 4 7
//
//    1
//   /|       produces 3
//  2 4
//    |
//    7
function treeHeight(tree) {
  return 1 + tree.children.reduce((maxHeight, child) =>
    Math.max(maxHeight, treeHeight(child)), 0);
}

// Write a function named binTreeHeight that takes in the following:
//   tree (a Tree)
// The function returns a the height of the longest branch.
// Example:
//    1
//   / \       produces 2
//  2   7
//
//    1
//   / \       produces 3
//  2   4
//     / \
//    *   7
function binTreeHeight(tree) {
  if (tree === null) {
    return 0;
  } else {
    return 1 + Math.max(binTreeHeight(tree.left), binTreeHeight(tree.right));
  }
}
