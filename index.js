
// *************************** QUESTION 1 **************************************
 /* Mutating array methods are methods that change the array itself instead of returning a new array with the new changes. 
 They do not return a new copy of the array, rather mutate the original array, and all pointers to that same memory location 
 will reflect the change. 
 Non-mutating array methods on the other hand do not change the original array but return a new array with the new changes.
 They create something that one might think of as a 'copy' in a new location in memory that doesn’t have any further relationship 
 with the original. */
 //Examples of mutating array methods are:
// pop()
// unshift()
// reverse()
// sort()
// splice()

// Examples of non-mutating array methods are:
// slice()
// concat()
// map()
// filter()
// findIndex()



// *************************** QUESTION 2**************************************
const languages = ['C#', 'JavaScript', 'Ruby', 'PHP', 'Python'];
languages.push('Kotlin');
languages.splice(3,0,'Java');
languages.shift();
languages.unshift('Scala', 'Swift');
languages.splice(languages.indexOf('PHP'), 1, 'Go', 'Rust');



// *************************** QUESTION 3 **************************************
//The value of fruit will be:
[ 'apple', 'mango', 'orange' ]



// *************************** QUESTION 4 **************************************

maxNumber = function(numbers){
   return Math.max(...numbers);
}
let arrayOfNumbers = [10, 20, 4, 16 , 32];
let maxValue = maxNumber(arrayOfNumbers);
console.log(`The maximum value in the array is ${maxValue}`);



// *************************** QUESTION 5 **************************************

function valTimesIndex(array){
   let newarray = [];
   array.forEach((element, index) => {
      const newVal = element * index;
      newarray.push(newVal);
   });
   return newarray;
}
let arrayOfNumbers2 = [3, 6, 9, 12];
newarray = valTimesIndex(arrayOfNumbers2);
console.log('array is', arrayOfNumbers2, 'while newarray is', newarray);






// Using the array.map method just for reference
// let array = [1, 2, 3, 4, 5];
// const modifiedArray = array.map(number => number * array.indexOf(number));
// console.log(modifiedArray);