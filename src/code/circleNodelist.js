// 环形链表

// 第一种 遍历 找到重复的

function NodeList (val = null, next = null) {
  this.val = val
  this.next = next
}

const head = new NodeList(1)

head.next = new NodeList(2)
head.next.next = new NodeList(3)
head.next.next.next = new NodeList(4)
head.next.next.next.next = new NodeList(5)
// head.next.next.next.next.next = head.next.next
console.log('%o', head, 'gg')
function bianli(h) {
  let l = new Set()
  while (h && h.val !== null) {
    if (l.has(h)) {
      return true
    }
    l.add(h)
    h = h.next
  }

  return false
}

console.log(bianli(head))

// 第二种 快慢指针

function zhizhen(h) {
  let low = h
  let quick = h.next
  while (quick !== null) {
    if (quick == low) {
      return true
    }
    low = low.next
    quick = quick.next.next
  }
  return false
}
console.log(zhizhen(head))