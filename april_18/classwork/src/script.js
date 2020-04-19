// 1. Suppose we have an array of people.
let people = ["Mary", "Greg", "Jane", "James"];
// Using the splice() function, remove “Jane” from the array and add “Elizabeth” 
// and “Artie”.  
// Then the array should look like this [“Mary”, “Greg”, “Elizabeth”, “Artie”, 
// “James”].

console.log(people);
people.splice(people.indexOf('Jane'),1, 'Elizabeth', 'Artie');
console.log(people);

// 2. Suppose we have an array of objects.
books = [
  {
    author: 'Bill Gates',
    title: 'The Road Ahead',
  },
  {
    author: 'Steve Jobs',
    title: 'Walter Isaacson',
  }
];
// Using forEach() function, print each element to the webpage in the following way:
// 1. Book ‘The Road Ahead’ is written by ‘Bill Gates’
// 2. Book ‘Walter Isaacson’ is written by ‘Steve Jobs’

books.forEach(function(book, i) {
    console.log(`${i +1}. Book '${book.title}' is written by '${book.author}'`)
});



// 3. Suppose we have an array of numbers.
let numbers = [112, -20, 52, 0, -1, 944];
// Using filter() function, create a new array consisting only positive numbers.
let numbers2 = numbers.filter(function(item) {
    return item > 0;
});
console.log(numbers);
console.log(numbers2);

// 4. Suppose we have an array of objects.
let keyValueArray = [
  {
    key: 'name',
    value: 'James'
  },
  {
    key: 'age',
    value: 27
  },
  {
    key: 'surname',
    value: 'Doe'
  }
];
// Using map() function, create a new array consisting reformatted objects
// like this:
// [
//   {
//     name: 'James'
//   },
//   {
//     age: 27
//   },
//   {
//     surname: 'Doe'
//   }
// ]

console.log(keyValueArray);

let newArray = keyValueArray.map(function(item) {
    let newObject = { [item.key]: item.value };
    return newObject;
});

console.log(newArray);


// 1. Create a constructor function called Video. The function should accept 
// arguments of title (a string), uploader (a string, the person who uploaded it), 
// and seconds (a number, the duration), and it should save them as properties of the 
// object. Create a method of the Video constructor called watch() which should log a 
// string to the console like “You watched all 1800 seconds of Walking with Dinosaurs!” 
// Create a new object using the Video constructor and call the watch() method of it.

function Video (title, uploader, seconds) {
    this.title = title;
    this.uploader = uploader;
    this.seconds = seconds;
    
    this.Watch = function() {
        console.log(`You watched all ${this.seconds} seconds of ${this.title}!`);
    };
}

let video1 = new Video('Walking with Dinosarus', 'BBC', 1800);
video1.Watch();



// 2. Suppose we have a student object:
let student = {
  name: 'Alex',
  lastname: 'Wood'
};
// Write a function called displayStudentInfo which accepts an object and returns 
// the string “Your full name is NAME LASTNAME”. Use object destructuring to create 
// “name” and “lastname” variables.

 function displayStudentInfo() {
    let {name, lastname} = student;
    return `Your full name is ${name} ${lastname}`;
 }

 console.log(displayStudentInfo(student));