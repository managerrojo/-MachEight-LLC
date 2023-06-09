function findNumberPairs(numbers, targetSum) {
  const numMap = new Map();
  const pairs = [];

  for (let i = 0; i < numbers.length; i++) {
    const complement = targetSum - numbers[i];
    if (numMap.has(complement)) {
      const complementIndex = numMap.get(complement);
      pairs.push([numbers[i], numbers[complementIndex]]);
    }
    numMap.set(numbers[i], i);
  }
  return pairs;
}

console.log(findNumberPairs([4, 5, 7, 3, 10, 2], 1));
console.log(findNumberPairs([1, 9, 5, 0, 20, -4, 12, 16, 7], 12));
console.log(findNumberPairs([1, 4, 3, 0, 2, -4, 2, 6, 7], 4));
console.log(findNumberPairs([11, 90, 54, 0, 21, 41, 10, 16, 7], 100));
console.log(findNumberPairs([1, 9, 5, 0, 20, -4, 12, 16, 7], 3));
