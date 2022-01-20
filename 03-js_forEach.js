// Class code examples

const students = [
    { firstName: 'John', lastName: 'Carr', age: 34 },
    { firstName: 'Leonardo', lastName: 'Di Vittorio', age: 21 },
    { firstName: 'Sarah', lastName: "O'Connor", age: 45 }
]

students.forEach(console.log) // console,log is a function, it does not work inside the array. 

/*
for(const student of students){
     console.log(student)
} */

const greetings = []

const printOlderThan25 = (person) => {
    if(person.age >= 25) 
    greetings.push (`Hello ${person.firstName}`)
}

students.forEach(printOlderThan25)


const numberArray = [1,2,3,4,5,6,7,8,9]

const printOddindexElements = (ele, index) =>{
    if (index %2 !==0) console.log(`Element ${ele} is an even index`)
}

numberArray.forEach( printOddindexElements)