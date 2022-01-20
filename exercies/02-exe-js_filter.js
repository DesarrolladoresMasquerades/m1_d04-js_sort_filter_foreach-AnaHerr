// ONLY USE THE .filter() METHOD FOR THIS EXERCISE

//Exercise 1: Given an array of numbers, filter out the numbers that are not even, and are less than 100.
const numbers = [1, 60, 112, 123, 100, 99, 73, 35];

const evenNumbers = (element) => {
   if (element % 2 !== 0 && element < 100)
   return true
}

let myEvenNumbers = numbers.filter(evenNumbers)
console.log(myEvenNumbers) // [1,99,73,35]

// Exercise 2: From the given array of people, get the people who are allowed to consume alcoholic beverages (i.e age > 21).

const people = [
  { name: "Candice", age: 25 },
  { name: "Tammy", age: 30 },
  { name: "Allen", age: 49 },
  { name: "Nettie", age: 21 },
  { name: "Stuart", age: 17 },
  { name: "Bill", age: 19 }
];

const adults = (people) => {
   return people.age >= 21
    }

let canConsume = people.filter(adults)
console.log(canConsume) 

/* Answer should be 
[
  { name: "Candice", age: 25 },
  { name: "Tammy", age: 30 },
  { name: "Allen", age: 49 },
]
*/

// Bonus: Using the same array above Just return the first two names of people eligible to drink. (i.e age > 21).
// might need to use a .map() here later at some point
// might also need to use another array method here which we haven't seen. Google it!, Again its a "MIGHT"


const adultsEligible = (list) => {
   const filterDrinkerByAge = function(person){
     return person.age >=21
   }
   return list.filter(filterDrinkerByAge)
}

let canConsumeTwo = adultsEligible(people).slice (0,2)
console.log(canConsumeTwo) 
//Answer should be ['Candice', 'Tammy'] */