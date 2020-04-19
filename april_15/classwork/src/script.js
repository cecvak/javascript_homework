// 1. Write a program that lists the properties of an object. For example, 
// for the object
// let student = {
//   name: "Jane Rayy",
//   class: "VI",
//   age: 12
// };
// Output will be: name, class, age

// for (let key in student) {
//     console.log(key);
// }



// 2.  Create an object that holds information of your favorite recipe. It should have properties 
// for title (a string), servings (a number), and ingredients (a string, each ingredient separated by a comma). 
// Display the recipe information on the webpage. Use heading for the title. Use paragraphs for other info. For example:
// Mole
// Servings: 2
// Ingredients: cumin, cocoa, cinnamon

// let recipe = {
//     title: "Chocolate cake",
//     servings: 4,
//     ingredients: "cocoa, eggs, flour, sugar",

//     displayRecipe: function() {
//         document.write(`<h1>${(this.title)}</h1>  
//         <p>Servings: ${(this.servings)}</p>
//         <p>Ingredients: ${(this.ingredients)}</p>`);
//     }
// };

// recipe.displayRecipe();

// 3. Write a function to get a copy of the object where the keys have become the values and the 
// values become the keys. 
// For example, for the object
// let person = {
//   name: 'Alex',
//   lastname: 'Doe',
//   age: 25,
// };
// The resulting object will be
// {
//    Alex: 'name',
//    Doe: 'lastname',
//    '25': 'age'
// };


// 1. Suppose we have this array: people = ["Alex", "Mary", "Devon", "James"]; 
// Do the following manipulations with the array: 
// 1) Remove “James” from the array; 
// 2) Remove “Alex” from the array; 
// 3) Add your name to the beginning of the array; 
// 4) Add “Jane” to the end of the array; 
// 5) Using for-loop, write all names of the changed array to the webpage using document.write() .

// let people = ["Alex", "Mary", "Devon", "James"];
// console.log(people);

// people.pop();   //remove James
// console.log(people);

// people.shift(); //remove Alex
// console.log(people);

// people.unshift('Cecilia');  //Add my name to beginning
// console.log(people);

// people.push('Jane');    //Add Jane to end
// console.log(people);

// for(let i = 0; i < people.length; i++) {    //write all names
//     document.write(people[i]);
// }



// 2. Write a function that accepts an array and returns a reversed version of it. 
// Do not use the reverse() function. 
// For example: ['a', 'b', 3, 'c', [], 10] will be [10, [], 'c', 3, 'b', 'a'] .

// let firstArray = ['a', 'b', 3, 'c', [], 10];
// console.log(firstArray);

// function reverseArray(myArray) {
//     let newArray = [];

//     for (let i = myArray.length -1; i >= 0; i--) {
//     // console.log(myArray[i]);
//     newArray.push(myArray[i]);
//     }
//     return newArray;
    
// }

// console.log(reverseArray(firstArray));

// 3. Write a script that displays the reading status of the following books 
// (either to the webpage or to the console).
// let myLibrary = [ 
//   {
//     author: 'Bill Gates',
//     title: 'The Road Ahead',
//     isRead: true
//   },
//   {
//     author: 'Steve Jobs',
//     title: 'Walter Isaacson',
//     isRead: true
//   },
//   {
//     author: 'Suzanne Collins',
//     title:  'Mockingjay: The Final Book of The Hunger Games', 
//     isRead: false
// }];
// Example output:
// I already read ‘The Road Ahead’ by Bill Gates
// I already read ‘Walter Isaacson’ by Steve Jobs
// I still need to read ‘Mockingjay: The Final Book of The Hunger Games’ by Suzanne Collins

// console.log(myLibrary.author);


// for(let book of myLibrary) {
//     // console.log(book);
//     if (book.isRead) {
//         console.log(`I already read ${book.title} by ${book.author}. `);
//     }
//         else  {
//             console.log(`I still need to read ${book.title} by ${book.author}.`);
//         }
// }



// 1. Create an object that describes a car (manufacturer, model, year of release, average speed) 
// and the following methods of this object: 
//     1) A method that displays the car info; 
//     2) A method for counting a time frame necessary to cover a given distance with the average speed 
//     (object methods can also accept parameters as regular functions). 
//     Note that every 4 hours the driver has to take a 1-hour break.

let car = {
  manufacturer: 'Volvo',
  model: 'V70',
  'year of release': 2005,
  'average speed': 90,  //km/hour

  carInfo: function() {
      console.log(`Car manufacturer: ${this.manufacturer}. Car model: ${this.model}. Year of release: ${this["year of release"]}. Average speed: ${this["average speed"]} `);
  },

  carTime: function(distance) {
    let hours = distance / (this["average speed"]);
    // console.log(hours);
    let originalHours = Math.trunc(hours);
    // console.log(originalHours +" hours");
    let minutes = hours * 60;
    // console.log(minutes +" total minutes");
    let finalMinutes = Math.round(minutes % 60);
    // console.log(finalMinutes +" minutes left");
    let time = Math.trunc(originalHours / 4);
    // console.log(time);
    let finalHours = originalHours + time;
    // console.log(finalHours);

    let finalTime = `It will take ${finalHours} hours and ${finalMinutes} minutes`;
    console.log(finalTime);
  }
};

car.carInfo();
car.carTime(900); //kilometers

// 2. And the tricky one :smile: Create an object that describes time (hours, minutes, seconds) 
// and the following methods for if this object: 
//       1) A method for displaying the time in format hh:mm:ss; 
//       2) A method for changing the time by a given amount of seconds; 
//       3) A method for changing the time by a given amount of minutes; 
//       4) A method for changing the time by a given amount of hours. 
//       Note that in the last three methods changing one part may influence another. 
//       For example, if we add 30 seconds to «20:30:45», we should get «20:31:15», not «20:30:75».


let time = {
  hours: 20,
  minutes: 30,
  seconds: 45,

  displayTime: function() {
    document.write(`<h1>The time is: ${this.hours}:${this.minutes}:${this.seconds}</h1>`);
  },

  changeSeconds: function(seconds) {
      this.seconds = this.seconds + seconds;
      return this.seconds;
  },

};

time.displayTime();
time.changeSeconds(30);
time.displayTime();