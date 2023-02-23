// 最长增长子序列

function find(arr) {
  let start = 0
  let max = 0
  for (var i = 1; i < arr.length; i++) {
    if (arr[i] < arr[i-1]) {
      start = i
    }
    max = Math.max(max, i - start + 1)
  }
  return max
}

console.log(find([1, 2, 3, 2, 3, 4, 3, 4, 5, 6, 7]))