function snapCrackle (maxValue) {
let max = "";
  for (let n = 1; n <= maxValue; n++) {
    
  if (n % 2 !== 0 && n % 5 === 0) {
    max += "SnapCrackle, "
  }
  else if (n % 5 === 0) {
    max += "Crackle, "
  }
  else if (n % 2 != 0) {
    max += "Snap, "
  }
  else if (n % 2 === 0 && n % 5 !== 0) {
    max += n + ", ";
  }
}
console.log(max);
}

snapCrackle(10)