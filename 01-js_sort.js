// Class code examples

const numbers = [22, 23, 99, 68, 1, 0, 9, 112, 223, 64, 18];

console.log("before:" , numbers)

numbers.sort()

console.log("after: ", numbers)

console.log(typeof numbers[0]) //elements stay as numbers

console.log(numbers === numbers.sort()) // Array stays the same "box"

// Passing the sorting criteria using a function

// Rules are TWO elements that will be given to your function and your function MUST return -1, 0 or 1 according to wether el1 is smaller equal or greater the el2

function sortMyNumbers (el1, el2) {
 if(el1 < el2) return -1
 if(el1 === el2) return 0
 if(el1 > el2) return 1
}

function quickSort(el1, el2){ //quicker way of doing it
    return el1 - el2
}

const sortedNumbers = numbers.sort(sortMyNumbers)

console.log("sortedNumbers: ", sortedNumbers)

// We changed the order of the sorting numbers, decreasing now by simply modifying (> and <)
/*function sortMyNumbers (el1, el2) {
    if(el1 > el2) return -1
    if(el1 === el2) return 0
    if(el1 < el2) return 1
   }
*/
// Sort takes any function as long as it receives a 1, 0 or 

const students = [
	{firstName: 'John', lastName: 'Carr', age: 34},
  {firstName: 'Leonardo', lastName: 'Di Vittorio', age: 21},
  {firstName: 'Sarah', lastName: 'O\'Connor', age: 45},
]

function sortStudentsByAge(student1, student2){
    if(student1.age < student2.age ) return -1
    if(student1.age === student2.age ) return 0
    if(student1.age > student2.age ) return 1

}

function sortStudentsByAgeQuick(student1, student2){
    return parseInt(student1.age) - parseInt(student2.age)
}

console.log("students by age: ", students.sort(sortStudentsByAge))

