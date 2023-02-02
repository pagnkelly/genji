// 100以内的素数
// 暴力

function baoli(n) {
  let count = 0
  for (let i = 2; i < n; i++) {
    count += isSushu(i) ? 1 : 0
  }
  return count
}

function isSushu(n) {
  for(let i = 2; i * i <= n; i++) {
    if (n % i === 0) {
      return false
    }
  }
  return true
}
console.log(baoli(100)) // 25
// 诶筛法
function eishai(n) {
  let arr = new Array(n)
  let count = 0
  for (let i = 2; i < n; i++) {
    if (!arr[i]) {
      count++
      for (let j = i * i; j < n; j += i) {
        arr[j] = true
      }
    }
  }
  return count
}
console.log(eishai(100)) // 25

//  2 * 2  3 * 3  4 * 4
//  2 * 3  3 * 4
//  2 * 4