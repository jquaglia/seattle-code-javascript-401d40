'use strict';

const Node = require('./Node.js');

class Tree {
  constructor(k) {
    this.k = k;
    this.root = null;
  }

  // @param callback {function}
  traverseIteratively(callback) {
    let current = this.root;
    let queue = [];

    queue.unshift(current);

    while (queue) {
      current = queue.pop();
      callback(current.value);

      current.children.forEach(child => {
        if (child) {
          queue.unshift(child);
        }
      });
    };
  }

  // @param callback {function}
  traverseRecursively(callback) {
      let current = this.root;
      const array = [];

      const weirdTraverse = (node) => {
        callback(node.value);
        if (node.children) {
          node.children.forEach(child => {
            weirdTraverse(child);
          });
        }
      };
      weirdTraverse(current);
  }
}



module.exports = Tree;
