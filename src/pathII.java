// Given the root of a binary tree and an integer targetSum, return all root-to-leaf paths where the sum of the node values in the path equals targetSum. 
//Each path should be returned as a list of the node values, not node references.

// A root-to-leaf path is a path starting from the root and ending at any leaf node. A leaf is a node with no children.


import java.util.List;
import java.util.ArrayList;

class Solution {
    List<List<Integer>> result = new ArrayList<>();
    
    public List<List<Integer>> pathSum(TreeNode root, int targetSum) {
        List<Integer> currentArr = new ArrayList<>();
        dfs(root, targetSum, currentArr);
        return result;
    }

    public void dfs(TreeNode root, int targetSum, List<Integer> currentArr) {
        if(root == null) {
            return;
        }

        currentArr.add(root.val);
        targetSum -= root.val;

        if(targetSum == 0 && root.left == null && root.right == null) {
            result.add(new ArrayList<>(currentArr));
        } else {
            dfs(root.left, targetSum, new ArrayList<>(currentArr));
            dfs(root.right, targetSum, new ArrayList<>(currentArr));
        }

        
    }
}
