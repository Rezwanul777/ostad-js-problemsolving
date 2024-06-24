// 1) Write a function named ‘calculateSum’ that takes two arguments and returns their sum.

function calculateSum(num1, num2) {
    return sum= num1 + num2;
    
}

const addNumbers=calculateSum(5,6)

console.log(addNumbers)

//2) Write a function named ‘isEven’ that takes one argument and returns true if the number is even, and false otherwise.

function isEven(num) {
    if(num%2==0) return true;
    else return false;
}

console.log(isEven(111))


//3) Write a function named ‘findMax’ that takes an array of numbers and returns the largest number in the array.

function findMax(numbers) {

    let max=numbers[0];
    for(let i=0; i<numbers.length; i++) {
        if(numbers[i]>max) 
            max=numbers[i];
    }

    return max;
}

let result=findMax([76546,9,98,67,890,123,890700])
console.log(result);

//4) Write a function named ‘reverseString’ that takes a string and returns the string reversed.

function reverseString(str) {
    return str.split('').reverse().join('');
}

// Example usage:
let reversedresult = reverseString('world');
console.log(reversedresult);  

//5) Write a function named ‘filterOddNumbers’ that takes an array of numbers and returns a new array containing only the odd numbers.

function filterOddNumbers(numbers){
    let oddNumbrers=[]
    for(let i=0; i<numbers.length; i++){
        if(numbers[i] % 2 !==0){
            oddNumbrers.push(numbers[i]);
        }
    }
    return oddNumbrers;
}

const resultFilteredOddNum=filterOddNumbers([1,6,5,10,45,66,90,77])
console.log(resultFilteredOddNum);

//Write a function named ‘sumArray’ that takes an array of numbers and returns the sum of all elements.

function sumArray(numbers){
    let sum=0;
    for(let i=0; i<numbers.length; i++){
        sum+=numbers[i];
    }
    return sum;
}

const resultSumArray=sumArray([1,6,5,10,45,66,90,77])
console.log(resultSumArray);

//Write a function named ‘sortArray’ that takes an array of numbers and returns a new array sorted in ascending order.

function sortArray(numbers) {
    
    const sortedArray = [...numbers];
    sortedArray.sort((a, b) => a - b);
    
    return sortedArray;
}


const numbers = [5, 3, 8,55, 1, 2,67];
const sortedNumbers = sortArray(numbers);
console.log(sortedNumbers)

//Write a function named ‘capitalizeFirstLetter’ that takes a string and returns the same string with the first letter capitalized. Ex-  console.log(capitalizeFirstLetter("hello"));

function capitalizeFirstLetter(str) {
    if (str.length === 0) {
        return str;
    }
    return str.charAt(0).toUpperCase() + str.slice(1);
}

console.log(capitalizeFirstLetter("hello"));