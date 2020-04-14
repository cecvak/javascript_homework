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
function digits(digit1, digit2, digit3) {
    // let makeNumber = digit1 + digit2 + digit3;
    // let newNumber = +makeNumber;
    let newNumber = "" + digit1 + digit2 + digit3; //either this or the next line
    // let newNumber = `${digit1}${digit2}${digit3}`;
    console.log(typeof newNumber);  //returns string
    let makeNumber = +newNumber;
    console.log(typeof makeNumber); // returns number
    return makeNumber;
    
}

console.log(digits(1, 4, 9));

// 3. Write a function that accepts a year and returns whether it is a leap year. 
// A year is a leap year if it is (1) divisible by 4 and not divisible by 100, or else (2) is divisible by 400. 
// It should return a boolean value.

// function leapYear(year) {
//     let isLeap = (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
//     return isLeap;
// }

// console.log(leapYear(2018));


// 4. Write a function that takes two parameters: the year of birth and the year to count years in relation to. 
// Provide output in this format: For dates in the future: “You are NN years old.” For dates in the past: “You will be born in NN years.” 
// If the year of birth equals the year requested return: “You were born this very year!” 
// For example, for 2000 and 1998 you will get “You will be born in 2 years.”

// function numberofYears(birthYear, otherYear) {
//     let sentence;
//     if (otherYear > birthYear) {
//         let old = otherYear - birthYear;
//         sentence = `You are ${old} years old.`;
//         return sentence;
//     }
//         else if (birthYear > otherYear) {
//             let willBe = birthYear - otherYear;
//             sentence = `You will be born in ${willBe} years.`;
//             return sentence;
//         }
//         else (birthYear == otherYear) {
//             sentence = "You will be born this very year!";
//             return sentence;
//         }
// }

// console.log(numberofYears(2020, 2008));

// 1. Write a function that accepts time (hours, minutes, seconds) and returns a string in the format hh:mm:ss. 
// If the seconds are not given, they should be displayed as 00.

// function time(hours, minutes, seconds) {
//     let timeString = `${hours}:${minutes}:${seconds}`;
//     if (typeof seconds === 'undefined') {
//         seconds = '00';
//         timeString = `${hours}:${minutes}:${seconds}`;
//         return timeString;
//         }
//         else {
//             return timeString;
//         }
// }

// console.log(time(14, 32));
// console.log(time(14, 32, 57));



// 2. (I gave this one during the classwork but you should use this function in the 4th exercise) 
// Write a function that accepts hours, minutes, and seconds and returns that time only in seconds. 
// For example, 1 hour 25 minutes 43 seconds returns 5145 seconds.

function timeToSeconds(hours, minutes, seconds) {
    minutes = minutes * 60;
    hours = hours * 3600;
    calcSeconds = minutes + hours + seconds;
    return calcSeconds;
}

let yourTime = timeToSeconds(1, 25, 43);
console.log(yourTime);

// 3. Write a function that accepts the number of seconds, translates it into hours, minutes, and seconds, and returns as a hh:mm:ss string.

function secondsToCalc(yourSeconds) {
    // calculate hours from seconds
    totalHours = Math.trunc(yourSeconds/3600);
    // console.log(totalHours);

    // calculate minutes from remaining seconds
    remainingSeconds = totalHours * 3600;
    // console.log(remainingSeconds);
    remainingSeconds2 = yourSeconds - remainingSeconds;
    // console.log(remainingSeconds2);
    totalMinutes = Math.trunc(remainingSeconds2 / 60);
    // console.log(totalMinutes);

    // calculate seconds from remainder, total hours plus minutes from original seconds
    totalSeconds = yourSeconds - (totalHours*60 + totalMinutes)*60;
    // console.log(totalSeconds);

    let calculatedTime = `${totalHours}:${totalMinutes}:${totalSeconds}`;
    return calculatedTime;
}

console.log(secondsToCalc(5143));
console.log(secondsToCalc(5400));
console.log(secondsToCalc(170000));
console.log(secondsToCalc(3476));
console.log(secondsToCalc(120));


// 4. Write a function that counts the difference between the dates. 
// The function accepts 6 parameters that describe 2 dates (hours, minutes, and seconds for each one), 
// and returns them as hh:mm:ss. While solving this problem use the functions from the two previous ones: 
// at first, make the dates in seconds, count the difference in seconds, and translate it back into hh:mm:ss.
/*
function twoTimes(hour1, minute1, second1, hour2, minute2, second2) {
    // day 1 to seconds
    calcMinute1 = minute1 * 60;    
    calcHour1 = hour1 * 3600;
    let calc1 = calcMinute1 + calcHour1 + second1;
    // console.log(calc1);

    //  day 2 to seconds
    calcMinute2 = minute2 * 60;    
    calcHour2 = hour2 * 3600;
    let calc2 = calcMinute2 + calcHour2 + second2;
    // console.log(calc2);

    // difference in seconds
    let calcDifference = Math.abs(calc1 - calc2);   // change from negative to positive value
    // console.log(calcDifference);

    // translate back into hh:mm:ss
    // calculate hours from seconds
    let totalHours = Math.trunc(calcDifference/3600);   // remove decimals

    // calculate minutes from remaining seconds
    let remainingSeconds = totalHours * 3600;
    let remainingSeconds2 = calcDifference - remainingSeconds;
    let totalMinutes = Math.trunc(remainingSeconds2 / 60);

    // calculate seconds from remainder, total hours plus minutes from original seconds
    let totalSeconds = calcDifference - (totalHours*60 + totalMinutes)*60;

    let calculatedTime = `${totalHours}:${totalMinutes}:${totalSeconds}`;
    let timeDifference = `The difference between ${hour1}:${minute1}:${second1} and 
    ${hour2}:${minute2}:${second2} is ${calculatedTime}!`;
    return timeDifference;
}

console.log(twoTimes(7, 25, 43, 5, 37, 29));
console.log(twoTimes(3, 46, 42, 8, 26, 18));
*/

function twoTimes(hour1, minute1, second1, hour2, minute2, second2) {
    let calcSeconds1 = timeToSeconds(hour1, minute1, second1);
    // console.log(calcSeconds1);
    let calcSeconds2 = timeToSeconds(hour2, minute2, second2);
    // console.log(calcSeconds2);


    let timeDifference = Math.abs(calcSeconds1 - calcSeconds2);
    // console.log(timeDifference);
    let differenceTime = secondsToCalc(timeDifference);
    let message = `The difference between ${hour1}:${minute1}:${second1} and 
    ${hour2}:${minute2}:${second2} is ${differenceTime}!`;
    return message;
}

console.log(twoTimes(7, 25, 43, 5, 37, 29));
console.log(twoTimes(3, 46, 42, 8, 26, 18));