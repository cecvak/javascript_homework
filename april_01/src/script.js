// Request a length of a side of a square from a user and display the perimeter of the square in the console.
let side = prompt('Enter length of side of a square.'); //ask user for length
let square = side * 4; //calculate permimeter of square
console.log(square); //display perimeter of square

// // Request a user’s year of birth, count their age, and display the result to the console. Store the current year as a constant.
let birthYear = prompt('Enter your birth year.'); // ask user for their birth year
const currentYear = 2020; // store current year as a constant
let age = 2020 - birthYear; // calculate age
console.log(`You are ${age} years old.`); // display age in console

// Request a distance in kilometers between the two cities from a user, and the time they want to cover it within. 
// Count the speed needed to be on time.
let distance = prompt('Enter distance between cities in km.'); // ask user for distance
let minutes = prompt('Enter desired travel time in minutes.'); // ask user for time
let time = minutes / 60; // calculate minutes to hours
let speed = distance / time; // calculate travel time to be km/hour
console.log(`You need to travel at ${speed} km/hour.`);

// Create a simple currency converter. A user types in USD and the program converts them to EUR. 
// The exchange rate should be stored as a constant. Then display the result in the console.
let dollars = prompt('Enter amount of USD.'); //ask user for dollars
const euro = dollars * 0.92; // calculate exchange rate
console.log(`$${dollars} = €${euro}`); // display amount in euros

// A user types in the values of a and b for the formula a * x + b = 0 . The program has to calculate the x and display it in the console.
let a = prompt('Enter a number');
let b = prompt('Enter another number');
let x = (-b) / a;
console.log(`x is ${x}`);

// Request current time from a user in format HH:mm (HH is hour in a day from 00 to 23, mm are minutes in hour) and display 
// how many hours and minutes are left until tomorrow.
let currentTime = prompt('Enter a time as hh:mm');
let currentHours = currentTime.slice(0, currentTime.indexOf(':')); // get the input hours
let currentMinutes = currentTime.slice(currentTime.indexOf(':')+1); // get the input minutes
let hoursLeft = 23 - currentHours; // calculate hours left
let minutesLeft = 60 - currentMinutes; // calcualte minutes left
console.log(`There are ${hoursLeft} hours and ${minutesLeft} minutes left until tomorrow.`);