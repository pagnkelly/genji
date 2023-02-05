// 求根号x

// 二分法

function erfen(x) {
  let l = 0
  let r = x
  let index = 0
  while(l <= r) {
    let mid = parseInt((l + r) / 2)
    if (mid * mid <= x) {
      index = mid
      l = mid + 1
    } else {
      r = mid - 1
    }
  }
  return index
}
console.log(erfen(36))

//  牛顿迭代 理解 i * x/i = x   i * i  (i+x/i)/2 * (i+x/i)/2  x/i * x/i 中间的更靠近

function niudun(i, x) {
  let d = (i + x / i) / 2
  if (d === i) {
    return parseInt(d)
  }
  return niudun(d, x)
}

console.log(niudun(1, 25))