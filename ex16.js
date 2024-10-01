/*Caze Maker II
We will still be given an input string to convert. However, this time, we'll also be given a casing style to work with. The following code block will describe all the casing styles to support. We may also receive an array of casing styles, and each of these should be applied.

Instruction
Create a function named makeCaze that will receive an input string and one or more casing options. Return a new string that is formatted based on casing options:

Precedence of each of the casing styles are as follows, values higher in the list should be processed first:

camel, pascal, snake, kebab, title
vowel, consonant
upper, lower
Our function should be able to handle all of these cases.

For more information on casing styles, read Wikipedia's Special Case Styles for a list of various casing examples.

*/

const makeCaze = function (input, caze) {
  let arr = input.split(' ')
  let temp = ''
  // console.log(typeof caze)
  if (typeof caze === 'string'){
    if(caze === 'camel') {
      arr.forEach( (word,i) => {
        if(i===0){
          temp += word
        }else{
          temp += word.charAt(0).toUpperCase() + word.slice(1)
        }
      })
    }

    if(caze === 'pascal'){
      arr.forEach( word => {
        temp += word.charAt(0).toUpperCase() + word.slice(1)
      })
    }

    if(caze === 'snake'){
      temp = arr.join('_')
    }

    if(caze === 'kebab'){
      temp = arr.join('-')
    }

    if(caze === 'title'){
      arr.forEach( word => {
        word = word.charAt(0).toUpperCase() + word.slice(1)
        temp += word + ' '
      }) 
    }

    if(caze === 'vowel'){ //vowel upper letter
      const vowels = ['a','e','i','o','u']
      for(let i=0; i<input.length; i++){
        if(vowels.includes(input[i])){
          temp += input[i].toUpperCase()
        }else{
          temp += input[i]
        }
      }
    }

    if (caze === 'consonant') { // consonant upper letter
      const vowels = ['a','e','i','o','u']
      for(let i=0; i<input.length; i++){
        if(!vowels.includes(input[i])){
          temp += input[i].toUpperCase()
        }else{
          temp += input[i]
        }
      }
    }

    if (caze === 'upper') {
      for (let i=0; i< input.length; i++){
        temp += input[i].toUpperCase()
      }
    }
    
  }else {
    caze.forEach(caze => {
      // console.log(caze)
       temp = makeCaze(input,caze)
    })
  }
  return temp
  
};

console.log(makeCaze("this is a string", "camel")); // thisIsAString
console.log(makeCaze("this is a string", "pascal")); // ThisIsAString
console.log(makeCaze("this is a string", "snake")); // this_is_a_string
console.log(makeCaze("this is a string", "kebab")); // this-is-a-string
console.log(makeCaze("this is a string", "title")); // This Is A String
console.log(makeCaze("this is a string", "vowel")); // thIs Is A strIng
console.log(makeCaze("this is a string", "consonant")); // THiS iS a STRiNG
console.log(makeCaze("this is a string", ["upper", "snake"])); // THIS_IS_A_STRING

module.exports = makeCaze;
