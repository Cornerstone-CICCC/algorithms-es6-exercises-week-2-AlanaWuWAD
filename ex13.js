/*
In this activity, we will be converting date strings like "2017/12/02", into more English friendly date strings like December 2nd, 2017.

Talking Calendar
We will be given a date as a string (not a Date object). The date will always be formatted as YYYY/MM/DD. We will have to parse the given string and produce a human readable date.

Instruction
Create a function named talkingCalendar that takes in a date string with the format YYYY/MM/DD, and returns a new human readable date that looks like December 2nd, 2017.
*/

const talkingCalendar = function (date) {
    const month = ['Junuary', 'Febuary', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']

    let dateArr = date.split('/')
    month.forEach((num, i) => {
      if (dateArr[1] == i+1) {
        dateArr[1] = num
      }
    })
    if (dateArr[2]<3){
      dateArr[2] == 1? dateArr[2] = '1st':''
      dateArr[2] == 2? dateArr[2] = '2nd':''
    }else{
      dateArr[2] == 3? dateArr[2] = '3rd': dateArr[2] = `${dateArr[2]}th`
    }
    
    return `${dateArr[1]} ${dateArr[2]}, ${dateArr[0]}`
};

console.log(talkingCalendar("2017/12/02")); // December 2nd, 2017
console.log(talkingCalendar("2007/11/11")); // November 11th, 2007
console.log(talkingCalendar("1987/08/24")); // August 24th, 1987

module.exports = talkingCalendar;
