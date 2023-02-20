// 斐波那契数列 0， 1， 1， 2， 3， 5，8，13，21，34，55，

// 暴力 

function baoli(n) {
  if (n == 0) return 0
  if (n == 1) return 1
  return baoli(n - 1) + baoli(n-2)
}

console.log(baoli(10)) // 55

// 优化

function baoli2(n) {
  let arr = new Array(n)
  return recruse(n, arr)
}
function recruse(n, arr) {
  if (n == 0) return 0
  if (n == 1) return 1
  arr[n] = recruse(n - 1, arr) + recruse(n - 2, arr)
  return arr[n]
}

console.log(baoli2(10))


// 快慢指针

function db (n) {
  let low = 0
  let high = 1
  for (let i = 1; i < n; i++) {
    sum = low + high
    low = high
    high = sum
  }

  return high
}

console.log(db(10))