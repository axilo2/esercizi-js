function sumUntil(maxValue) {
  let sum = 0;
  for (let s = 0; s <= maxValue; s++) {
    sum += s
  }
  return sum
}

console.log(sumUntil(5));