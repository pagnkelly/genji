// 层序遍历
//        1
//       2 3
//     4 5 
//      6 7
function treeNode (val = null, left = null, right = null) {
  return {
    val,
    left,
    right
  }
}

let node7 = new treeNode(7, null, null)
let node6 = new treeNode(6, null, null)
let node5 = new treeNode(5, node6, node7)
let node4 = new treeNode(4, null, null)
let node3 = new treeNode(3, null, null)
let node2 = new treeNode(2, node4, node5)
let root = new treeNode(1, node2, node3)


function cengxu(r, i, arr) {
  if (!r || r.val == null) { return }
  arr[i] = r.val
  cengxu(r.left, 2*i, arr)
  cengxu(r.right, 2*i+1, arr)
}
var arr = new Array()
cengxu(root, 1, arr)
console.log(arr)