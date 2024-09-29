/*In this exercise, we will be given a list of instructors and we will create a single object to organize them based on their course.

Instruction
Create a function named organizeInstructors that will receive an array of instructor objects, and will return a new object that has the following format:

{
  CourseName: [instructors]
} 
*/

const organizeInstructors = function (instructors) {
  let course =[]
  instructors.forEach(element => {
    if(!course.includes(element.course) ){
      course.push(element.course)}
  });
  let arr = []
  course.forEach((element) => {
    arr.push(element)
    let temp = instructors.filter(courseName => courseName.course === element)
    temp.forEach(element => arr.push(element.name))
  })
  
  return arr
  ////////////////////////////////////////////////////////////
  // let arr = {}
  // instructors.forEach(num =>{
  //   if(Object.values(arr) !== num.course){
      
  //     // console.log(Object.values(arr) !== num.course)
  //     // console.log('value',Object.values(arr))
  //     Object.assign(arr,{courseName:num.course})
  //   }
  // })
  // console.log(arr)
};

console.log(
  organizeInstructors([
    { name: "Samuel", course: "iOS" },
    { name: "Victoria", course: "Web" },
    { name: "Karim", course: "Web" },
    { name: "Donald", course: "Web" },
  ])
); // { iOS: ["Samuel"], Web: ["Victoria", "Karim", "Donald"]}
console.log(
  organizeInstructors([
    { name: "Brendan", course: "Blockchain" },
    { name: "David", course: "Web" },
    { name: "Martha", course: "iOS" },
    { name: "Carlos", course: "Web" },
  ])
); //{ Blockchain: ["Brendan"], Web: ["David", "Carlos"], iOS: ["Martha"]}

module.exports = organizeInstructors;
