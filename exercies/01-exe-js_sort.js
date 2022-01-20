// ONLY USE THE .sort() METHOD FOR THIS EXERCISE UNLESS MENTIONED

//Exercise 1: Using the array (arrOfStrings), sort an array from shortest string to the longest.
// DO NOT mutate the original array
const arrOfStrings = ['cat', 'wolf', 'yo', 'animal'];

const longestStr = (arr) => {

   function sortByLength( word1, word2){
      return word1.length - word2.length;
   };
     return arr.sort(sortByLength); 
   }
  
let longestStrings = longestStr(arrOfStrings)
console.log(longestStrings)

//ANSWER should be ['yo', 'cat', 'wolf', 'animal']

//Exercise 2: Using the same arr (arrOfStrings), sort its elements alphabetically.
// DU NOT mutate the original array
const arrOfStrings = ['cat', 'wolf', 'yo', 'animal'];

const sortedStr = (arr) => {
   return arr.sort();
}

let sortedStrings = sortedStr(arrOfStrings)

console.log(sortedStrings)

//ANSWER should be  ['animal', 'cat', 'wolf', 'yo']

// COMPLEX EXERCISE 3: Sort the  objects in the array by age in ascending order,
// if the age is the same sort them alphabetically in descending order
// Please do not mutate the original array

const people = [
  { name: 'Candice', age: 25 },
  { name: 'Tammy', age: 30 },
  { name: 'Allen', age: 19 },
  { name: 'Nettie', age: 21 },
  { name: 'Stuart', age: 30 },
  { name: 'Bill', age: 19 }
];

const sortByAge = (arr) => {
   
   function sortPeopleByAge(person1, person2){
      return parseInt(person1.age) - parseInt(person2.age);
   };
   
   return arr.sort(sortPeopleByAge);
}

let output = sortByAge(people)
console.log(output)
 
/* ANSWER should be
 [
  { name: 'Bill', age: 19 },
  { name: 'Allen', age: 19 },
  { name: 'Nettie', age: 21 },
  { name: 'Candice', age: 25 },
  { name: 'Tammy', age: 30 },
  { name: 'Stuart', age: 30 },
];
*/