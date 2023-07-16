/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} target
 * @param {number} k
 * @return {number[]}
 */
var distanceK = function (root, target, k) {
  const parents = new Map();
  const result = [];
  dfs(root, target, parents, null);
  dfsDist(target, null, 0, k, parents, result);
  return result;
};

function dfs(node, target, parents, parent) {
  if (!node) return;
  parents.set(node, parent);
  dfs(node.left, target, parents, node);
  dfs(node.right, target, parents, node);
}

function dfsDist(node, prev, dist, k, parents, result) {
  if (!node) return;
  if (dist === k) {
    result.push(node.val);
  }
  if (node.left !== prev) {
    dfsDist(node.left, node, dist + 1, k, parents, result);
  }
  if (node.right !== prev) {
    dfsDist(node.right, node, dist + 1, k, parents, result);
  }
  if (parents.get(node) !== prev) {
    dfsDist(parents.get(node), node, dist + 1, k, parents, result);
  }
}
