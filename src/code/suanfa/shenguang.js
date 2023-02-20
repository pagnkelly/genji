// 深度优先
function treeNode(val, left, right) {
  this.val = val
  this.left = left
  this.right = right
}

let node7 = new treeNode(7, null, null)
let node6 = new treeNode(6, node7, null)
let node5 = new treeNode(5, null, null)
let node4 = new treeNode(4, null, null)
let node3 = new treeNode(3, node6, null)
let node2 = new treeNode(2, node4, node5)
let root = new treeNode(1, node2, node3)


console.log('%o', root)

function minDeep(root) {
  if (root == null) {
    return 0
  }

  if (root.left == null && root.right === null) {
    return 1
  }

  let min = Number.MAX_VALUE
  if (root.left) {
    min = Math.min(min, minDeep(root.left))
  }
  if (root.right) {
    min = Math.min(min, minDeep(root.right))
  }
  return min + 1
}

console.log(minDeep(root))
// 广度优先

function minDeep2(root) {
  let min = Number.MAX_VALUE
  root.deep = 1
  let queue = [root]
  
  while(queue.length) {
    let node = queue.pop()
    if (node.left == null && node.right == null) {
      min = Math.min(min, node.deep)
    }
    if (node.left) {
      node.left.deep = node.deep + 1
      queue.unshift(node.left)
    } 
    if (node.right) {
      node.right.deep = node.deep + 1
      queue.unshift(node.right)
    } 
  }
  return min
}
console.log(minDeep2(root))