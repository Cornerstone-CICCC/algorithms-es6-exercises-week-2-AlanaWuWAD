/*
In this exercise, we will be counting the number of vowels that appear in a given string. 
For this exercise, consider the following to be vowels: a, e, i, o, and u.

Instruction
Create a function named numberOfVowels that will receive a string and return the number of vowels in that string.

*/

const numberOfVowels = function (data) {
  let num = 0
  const vowels = ['a','e','i','o','u']
  let arr = data.split('')
  arr.forEach(word => {
    vowels.forEach(item => word === item? ++num:num)})
  return num
}

console.log(numberOfVowels("orange")); // 3
console.log(numberOfVowels("cornerstone college")); // 7
console.log(numberOfVowels("aeiou")); // 5

module.exports = numberOfVowels;


// const numberOfVowels = function (data) {
//   let num = 0
//   let arr = data.split('')
//   arr.forEach(word => {
//     if (word === 'a' || word === 'e' || word === 'i' || word === 'o' || word === 'u') {
//       num += 1
//     }
//   })
//   return num
// };

