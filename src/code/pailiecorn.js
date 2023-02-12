/**
 *   o
 *   o o
 *   o o
 */

function pailie(n) {
  let line = 0
  let count = 0

  while (count <= n) {
    line++
    count += line
  }
  return line - 1
}

console.log(pailie(5)) // 2

// 二分

function erfen(n) {
  let low = 0;
  let high = n
  while (low <= high) {
    let mid = Math.floor((high - low) / 2 + low)
    let count = Math.floor((mid * mid + mid) / 2)
    if (count == n) {
      return mid
    } else if (count > n) {
      high = mid -1
    } else {
      low = mid + 1
    }
  }
  return Math.floor(high)
}
console.log(erfen(5))

// 牛顿迭代
// (mid * mid + mid) / 2 i n /i  (mid * mid + mid) / 2 = n  i * i = 2n - i
function niudun (i, x) {
  let res = (i + (2 * x - i) / i) / 2
  if (res === i) {
    return parseInt(i)
  }
  return niudun(res, x)
}

console.log(niudun(1, 5))