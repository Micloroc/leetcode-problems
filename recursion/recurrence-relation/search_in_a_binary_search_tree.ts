class TreeNode {
    val: number
    left: TreeNode | null
    right: TreeNode | null

    constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
        this.val = (val === undefined ? 0 : val)
        this.left = (left === undefined ? null : left)
        this.right = (right === undefined ? null : right)
    }
}

function searchBST(root: TreeNode | null, val: number): TreeNode | null {
    if (root?.val === val) return root;

    if (!root?.left && !root?.right) return null;
    const leftSearch = searchBST(root.left, val)
    if (leftSearch) return leftSearch;

    const rightSearch = searchBST(root.right, val)
    if (rightSearch) return rightSearch;

    return null;

}