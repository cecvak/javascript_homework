// function sayHello(name) { //name is parameter
//     document.write('<h1>Hello ' + name +'</h1>');
// }

// sayHello('Alice'); //value, Alice, is argument
// sayHello('Jane');

// function sum(number) {
//     // console.log(number);
//     let sum = 0;

//     for (let i = 1; i <= number; i++) {
//         sum += i; // sum = sum + i;
//     }

//     // console.log(sum);
//     return sum;
// }

// let someSummation = sum(10);
// console.log(someSummation);

// function favoriteAnimal(animal) {
//     return `Your favorite animal is ${animal}!`;
// }

// let yourAnimal = favoriteAnimal('cat');
// console.log(yourAnimal);
// console.log(favoriteAnimal('cat'));


// Each function has to return a value, do not display a result inside a function.
// 1. Write a function which accepts an argument and returns the type of the 
// argument.
// function argumentType(yourArgument) {
//     // console.log(typeof yourArgument);
//     return typeof(yourArgument);
// }

// // argumentType(5);
// let anArgument = 'blue';
// console.log(argumentType(anArgument));


// 2. Write a function that accept two integers and returns the larger one.

// function numbers(number1, number2) {
//     if (number1 > number2) {
//         return number1;
//     }
//     else {
//         return number2;
//     }
// }

//  let result = numbers(3, 7);
// //  let result = numbers(5, 2);
//  console.log(result);

//  let result2 = numbers(5, 2);
//  console.log(result2);


// 3. Write a function that show how old a dog in human years, it should take one argument - puppy’s age. 1 human year is 7 dog years. 
// The function should return a string like “Your doggie is NN years old in dog years!”

// function dogYears(dogAge) {
//     return dogAge * 7;
// }

// let yourDog = dogYears(5);
// console.log(`Your doggie is ${yourDog} years old in human years!`);

// 4. Write a function that accepts a string as a parameter and counts the number of vowels within the string.

// function vowelsCount(yourWords) {
//     let vowels = 'aeiouAEIOU';
//     let vowelsCount = 0;
//     for (let i = 0; i < yourWords.length; i++) {
//         if (vowels.indexOf(yourWords[i]) !== -1)
//         {
//             vowelsCount += 1;
//         }
//     }
//     return vowelsCount;
// }

// let sentence = vowelsCount('some sentence');
// console.log(sentence);




// function add() {
//     // console.log(arguments[0]); //arguments is a keyword. check for the first argument
//     let result = 0;

//     for (let i = 0; i < arguments.length; i++) {
//         result += arguments[i];
//     }
//     return result;
// }

// // let addResult = add(1, 5, 3);
// let addResult2 = add(2, 3);
// console.log(addResult2);

// function greeting(name) {
//     return 'Hello,' + name;
// }

// let message = greeting('Jane');
// console.log(message);


// Part two
// 1. Write a function that accepts a string as a parameter and counts the number of vowels within the string.


// 2. Write a function that accepts hours, minutes, and seconds and 
// returns that time only in seconds. 
// For example, 1 hour 25 minutes 43 seconds returns 5145 seconds.

// function time(hours, minutes, seconds) {
//     minutes = minutes * 60;
//     hours = hours * 3600;
//     calcSeconds = minutes + hours + seconds;
//     return calcSeconds;
// }

// let yourTime = time(1, 25, 43);
// console.log(yourTime);



// 3. Write a function that accepts two arguments: a string and a 
// character. The function has to count the number of occurrences of 
// the specified character within the string. For example, there are 2 
// occurrences of a character “o” in the string “Hello world”.

// function countChar(yourString, char) {
//     let count = 0;
//     for (let i = 0; i < yourString.length; i++) {
//         if (yourString[i] == char) {
//             count += 1;
//         }
//     }
//     return count;
// }

// let yourChar = countChar('Hello world', 'o');
// console.log(yourChar);


// 1. Write a function that reverse a number. For example, 12345 = 54321.
// function numberReverse(someNumber) {
//     someNumber = someNumber + "";
//     return someNumber.split("").reverse().join("");
// }

// let yourNumber = 12345;
// console.log(numberReverse(yourNumber));



// 2. Write a function that accepts three separate digits and makes them a number. For example, 1, 4, and 9 will become 149.
// function digits(digit1, digit2, digit3) {
//     let makeNumber = digit1 + digit2 + digit3;
//     let newNumber = +makeNumber;
//     // console.log(typeof newNumber);
//     return newNumber;
    
// }

// console.log(digits("1", "4", "9"));

// 3. Write a function that accepts a year and returns whether it is a leap year. 
// A year is a leap year if it is (1) divisible by 4 and not divisible by 100, or else (2) is divisible by 400. 
// It should return a boolean value.

function leapYear(year) {
    let isLeap = (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
    return isLeap;
}

console.log(leapYear(2018));


// 4. Write a function that takes two parameters: the year of birth and the year to count years in relation to. 
// Provide output in this format: For dates in the future: “You are NN years old.” For dates in the past: “You will be born in NN years.” 
// If the year of birth equals the year requested return: “You were born this very year!” 
// For example, for 2000 and 1998 you will get “You will be born in 2 years.”

function numberofYears(birthYear, otherYear) {
    if (otherYear > birthYear) {
        let old = otherYear - birthYear;
        let sentence = `You are ${old} years old.`;
        return sentence;
    }
        else if (birthYear > otherYear) {
            let willBe = birthYear - otherYear;
            let sentence = `You will be born in ${willBe} years.`;
            return sentence;
        }
        else if (birthYear == otherYear) {
            let sentence = "You will be born this very year!";
            return sentence;
        }
}

// numberofYears(2020, 2020);
console.log(numberofYears(2020, 2008))