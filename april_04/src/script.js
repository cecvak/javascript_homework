// HOMEWORK
// 1. Write a calculator. Request 2 numbers and an operation as a symbol (+ - * /). 
// The program solves it depending on the operation and shows the result.
// FINISHED!!
let calcNumber1 = +prompt('Enter a number.');
let calcNumber2 = +prompt('Enter another number.');
let operation = prompt('What do you want to do with the numbers? Enter + - * /');
let result;

switch(operation) {
    case "+" :
        result = calcNumber1 + calcNumber2;
        break;
    case '-'  :
        result = calcNumber1 - calcNumber2;
        break;
    case '*' :
        result = calcNumber1 * calcNumber2;
        break;
    case '/' :
        result = calcNumber1 / calcNumber2;
        break;
}
console.log(`${calcNumber1} ${operation} ${calcNumber2} = ${result}`);

// if (operation == '+') {
//     result = calcNumber1 + calcNumber2;
// }
//     else if (operation == '-') {
//         result = calcNumber1 - calcNumber2;
//     }
//     else if (operation == '*') {
//         result = calcNumber1 * calcNumber2;
//     }
//     else if (operation == '/') {
//         result = calcNumber1 / calcNumber2;
//     }
//     console.log(`${calcNumber1} ${operation} ${calcNumber2} = ${result}`);


// 2. Count the factorial of the number given by a user. For example, 4! is 
// 1 * 2 * 3 * 4 = 24, or 6! is 1 * 2 * 3 * 4 * 5 * 6 = 720.
// FINISHED!
let factorialNumber = prompt('Enter a number.');
var i;

for (i = factorialNumber -1; i >= 1; i--) {
    factorialNumber =  factorialNumber * i;
}
console.log(factorialNumber);


// 3. Count sheep. Request a non-negative integer, 3 for example, and print a string 
// with a murmur: "1 sheep...2 sheep...3 sheep..." to the page as a paragraph. 
// If a user types a negative number in, alert an error.
// FINISHED!
let sheep = prompt('Enter number of sheep (non-negative number');
var i;
if (sheep < 0) {
    alert('Error! You entered a negative number.');
    console.log('error');
 }
 else {
 for (i = 0; i <= sheep; i++) {
     
        document.write(+i +' sheep...');
     } 
 }

// 4. Show a user the prompt where they have to write a correct answer for 2 + 2 * 2. 
// Show the prompt as many times until the user answers correctly.
// FINISHED!
let solution = 0;
do {
    solution = prompt('What is 2 + 2 * 2?');
}
    while (solution != 6);
    alert('You answered correct!');

// CLASSWORK PART 1
// 1. Request a user’s age and define whether he/she is an infant (0–2), a child (3-11), a teen (12–18), 
// an adult (19-60) or a senior citizen (60– ...). Display the result in the console.
// FINISHED!

let age = prompt('What is your age?');

if (age <= 2) {
    console.log('You are an infant!');
} else if (age >= 3 && age <= 11 ) {
    console.log('You are a child!');
} else if (age >=12 && age <= 18) {
    console.log('You are a teen.');
} else if (age >= 19 && age <= 60) {
    console.log('You are an adult.');
} else 
    {
        console.log('You are a senior citizen.');
    }


    // 2. Request a number from 0 to 9 from a user and display the symbol that is placed on that keyboard button 
    // (for example, 1–!, 2–@, 3–# etc). Display a result in the console.
    // FINISHED!

let number = prompt('Pick a number between 0 and 9');
    if (number == 1) {
        console.log('!');
    } else if (number == 2) {
        console.log('"');
    } else if (number == 3) {
        console.log('#');
    } else if (number == 4) {
            console.log('¤');
    } else if (number == 5) {
            console.log('%');
    } else if (number == 6) {
            console.log('&');
    } else if (number == 7) {
            console.log('/');
    } else if (number == 8) {
            console.log('(');
    } else if (number == 9) {
            console.log(')');
    } else if (number == 0) {
            console.log('=');
    }



    // 3. Ask a user 3 questions, each with 3 answer options. Write these options also in the prompt window, after a question. 
    // The user gets 2 points for each correct answer. Show the earned points after the test.
    // FINISHED!
let question1 = prompt('What is the capital of Sweden? Stockholm, Oslo or Copenhagen?');
let question2 = prompt('What is the capital of the UK? Amsterdam, Rome or London?');
let question3 = prompt('What is the capital of Finland? Berlin, Helsinki or Vienna?');
let points = 0;

if (question1 == 'Stockholm') {
    points = points + 2; // points += 2;
} 
if (question2 == 'London') {
    points = points + 2;
}
if (question3 == 'Helsinki') {
    points = points + 2;
}

console.log(`You get ${points} points!`);


//4.  Request a number from a user, and define whether it is positive, negative, or zero. 
// Display a resulting message as an alert.

let userNumber = +prompt('Enter a number.');
if (userNumber == 0) {
    alert ('You entered zero!');
}
    else if (userNumber > 0) {
        alert ('You entered a positive number!');
    }
    else if (userNumber < 0) {
        alert ('You entered a negative number!');
    }



    //5.  Request a user’s age and check whether it is realistic (0-120 y.o.). 
    // If it is realistic, display a message ‘Hi! You are # years old’, otherwise – ‘Hm… Is it even possible?’.
let age2 = prompt('What is your age?');
if (age2 <= 120) {
    console.log(`Hi! You are ${age2} years old.`);
} else {
    console.log('Hm... Is that even possible?');
}


// CLASSWORK 2
// 1. One task to do using switch:
// Request a number of a month from a user. Print the name of the month to the 
// webpage as a paragraph using document.write().

let month = prompt('Enter the number of a month.');
 switch(month)  {
     case '1':
         document.write('January');
         break;
    case '2':
        document.write('February');
        break;
    case '3':
        document.write('March');
        break;
    case '4':
        document.write('April');
        break;
    case '5':
        document.write('May');
        break;
    case '6':
        document.write('June');
        break;
    case '7':
        document.write('July');
        break;
    case '8':
        document.write('August');
        break;
    case '9':
        document.write('September');
        break;
    case '10':
        document.write('October');
        break;
    case '11':
        document.write('November');
        break;
    case '12':
        document.write('December');
        break;
    default:
        document.write('That is not a month!');
     }


// 2. One task using while loop:
// Request a number and an extent. Raise the number to the given power and 
// display the result. Do not use ** or Math.pow() here.
let number3 = +prompt('Enter a number.');
let extent = +prompt('Enter the extent you want to raise the number');
var i = 1;
let result2 = number3;
while (i < extent) {
    i++;
    result2 = result2 * number3;
}

console.log(result2);


//3.  One task using do while loop:
// Suggest a user solve 2 + 2 * 2 until he/she does it right.
// See above for solution.

//4. And one task using for loop:
// Count sheep. Request a non-negative integer, 3 for example, 
// and print a string with a murmur: “1 sheep...2 sheep...3 sheep...” 
// to the page using document.write(). If a user types a negative number in, 
// alert an error.
// See above for solution.


// Examples:
// let isAdult;
// let age = prompt('How old are you?');

// if (age > 18) {
//     isAdult = true;
// } else {
//     isAdult = false;
// }

// let age = prompt('How old are you?');
// let isAdult = age > 18 ? true : false; // let isAdult = age > 18;

