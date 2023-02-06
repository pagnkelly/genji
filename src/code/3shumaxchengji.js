// [1, 2, 3, 4, 5] 3数最大乘积

// 排序法
function max3chengji(nums) {
  nums.sort()
  const n = nums.length
  return Math.max(nums[0] * nums[1] * nums[n - 1], nums[n-1] * nums[n-2] * nums[n-3])
}
console.log(max3chengji([1, 2, 3, 4, 5, 6]))

// 线性筛查

function xianxing(nums) {
  let min1 = Number.MAX_SAFE_INTEGER
  let min2 = Number.MAX_SAFE_INTEGER
  let max1 = Number.MIN_SAFE_INTEGER
  let max2 = Number.MIN_SAFE_INTEGER
  let max3 = Number.MIN_SAFE_INTEGER
  for (let x of nums) {
    if (x < min1) {
      min2 = min1
      min1 = x
    } else if (x < min2) {
      min2 = x
    }

    if (x > max1) {
      max3 = max2
      max2 = max1
      max1 = x
    } else if (x > max2) {
      max3 = max2
      max2 = x
    } else if (x > max3) {
      max3 = x
    }
  }
  return Math.max(min1 * min2 * max1, max1 * max2 * max3)
}
console.log(xianxing([1, 2, 3, 4, 5, 6]))