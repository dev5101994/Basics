const arr = [12, 32, 43, 55, 99];

const min = Math.min(...arr);
const max = Math.max(...arr);

console.log("Min:", min);
console.log("Max:", max);

arr.sort((a, b) => a - b);
console.log(arr);
////////
arr.sort((a, b) => b - a);
console.log("aa", arr);
////////
let alpha = ["boy", "apple", "dog", "cat"];
alpha.sort();
console.log(alpha);
////////
alpha.sort().reverse();
console.log(alpha);

// YT:https://www.youtube.com/shorts/MDE28Nkh2r4