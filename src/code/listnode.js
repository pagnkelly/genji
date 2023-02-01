const ListNode = (val = null, next = null) => {
  return {
    val,
    next
  }
}
function createHead() {
  const list = [2, 3, 4, 5]

  let head = ListNode(1)
  let cur = head
  list.forEach(item => {
    const node = ListNode(item)
    cur.next = node
    cur = node
  })

  return head
}


console.log('%o',createHead())

// 循环

function xunhuan (head) {
  let cur, prev, next;
  cur = head
  prev = null
  next = null
  while(cur !== null) {
    next = cur.next
    cur.next = prev
    prev = cur
    cur = next
  }
  return prev
}

console.log('%o', xunhuan(createHead()))

// 递归

function digui(head) {
  if (head == null || head.next == null) {
    return head
  }

  const new_head = digui(head.next)
  head.next.next = head
  head.next = null
  return new_head
}

console.log('%o', digui(createHead()))