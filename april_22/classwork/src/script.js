// function Person(name, age) {
//   this.name = name;
//   this.age = age;
//   // ...
//   this.greet = function() {
//     console.log(this.name);
//   }
// }
// ​
// let obj = {
  // properties
// };
// ​
// class Person {
//   constructor(name, age, interests) {
//     this.name = name;
//     this.age = age;
//     this.interests = interests;
//   }
// ​
//   greet() {
//     console.log(this.name);
//   }
// ​
//   addHobby(hobby) {
//     this.interests.push(hobby);
//   }
// }
// ​
// let person = new Person('Jane', 38, ['football', 'drawing']);
// person.greet();
// console.log(person);
// person.addHobby('hiking');
// person.interests.push('hiking');
// ​
// class Student extends Person {
//   constructor(name, age, interests, faculty, lastname) {
//     super(name, age, interests); // Super keyword calls constructor of a parent class
//     this.faculty = faculty;
//     this.lastname = lastname;
//   }
  // Computed property
//   get fullname() {
//     return `${this.name} ${this.lastname}`;
//   }
// ​
//   set fullname(fullname) {
    // this.name = fullname.split(' ')[0];
    // this.lastname = fullname.split(' ')[1];
//     [this.name, this.lastname] = fullname.split(' '); // ['Joe', 'Doe']
//   }
// ​
//   greet() {
//     super.greet(); // With super we can call methods of a parent class
//     console.log(`Hello, my name is ${this.name}, I'm ${this.age} years old`);
//   }
// }
// ​
// let student = new Student('Alex', 23, ['rugby', 'drawing'], 'computer science', 'Wood');
// student.greet();
// console.log(`${student.name} ${student.lastname}`);
// console.log(student.fullname);
// student.faculty = 'arts';
// student.name = 'Joe';
// student.lastname = 'Doe';
// student.fullname = 'Joe Doe';
// console.log(student.fullname);

// 1. Create a PrintMaсhine class that consists of font size, font color, 
// font-family, and print() method that accepts text and prints it to the webpage using document.write(). 
// The text should be displayed using the font properties of the class. 
// Create an instance of that class and call the print() method.

class PrintMaсhine {
    constructor(fontSize, fontColor, fontFamily) {
        this.fontSize = fontSize;
        this.fontColor = fontColor;
        this.fontFamily = fontFamily;
    }
    print() {
        document.write(`<p style="font-size:${this.fontSize}; 
        color:${this.fontColor}; font-family:${this.fontFamily}">Some text</p> ` );
    }
}

// let person = new Person('Jane', 38, ['football', 'drawing']);
let myPrint = new PrintMaсhine('40px', 'red', 'Arial');
myPrint.print();

// 2. Create a Shape class that consists of name, number of sides, and side length. 
// Add getter that returns the shape perimeter. 
// Create a new instance of Shape called square. 
// Get the perimeter to check whether it works correctly. 
// Create a new instance of Shape called triangle, get the perimeter to check that it works OK.

class Shape {
    constructor(name, sideNumber, sideLength) {
        this.name = name;
        this.sideNumber = sideNumber;
        this.sideLength = sideLength;
    }
    get perimeter() {
        return this.sideNumber * this.sideLength;
    }
}

let square = new Shape('square', 4, 20);
console.log(`Your perimeter is: ${square.perimeter}`);

let triangle = new Shape('triangle', 3, 10);
console.log(`Your perimeter is: ${triangle.perimeter}`);



// 3. Create a Square class that inherits from the Shape class you created in the last assignment. 
// Add calculateArea() method that calculates the square’s area. 
// Also set up the constructor so that the name property of Square class is automatically set to “square”, 
// and the “sides” property is automatically set to 4. When invoking the constructor, 
// you should therefore just need to provide the side length property.

class Square extends Shape {
    constructor(sideLength) {
        super('square', 4, sideLength);
    }

    calculateArea() {
        let area = this.sideLength * this.sideLength;
        console.log(`The area is ${area}`);
    }
    
}

let square2 = new Square ( 10);
square2.calculateArea();


// 4. Create an Animal class. Animal has a name and can eat. 
// The eat() method should display a string “The animal called NAME is eating”. 
// Create a Bird class that inherits from the Animal class. 
// Bird accepts a number of wings and has a method fly() that just displays some message. 
// Create an instance of Bird class and call eat() and fly() methods of it.

class Animal {
    constructor(name) {
        this.name = name;
    }
     eat() {
         console.log(`The animal called ${this.name} is eating.`);
     }
}

class Bird extends Animal {
    constructor(name, wings) {
        super(name);
        this.wings = wings;
    }

    fly() {
        console.log(`I can fly! Because I have ${this.wings} wings.`);
    }
}

let eagle = new Bird ('eagle', 2);
eagle.eat();
eagle.fly();




// Date
// You should also use Date object here. 
// To calculate the difference between two dates you can find the difference 
// in milliseconds. Like date1.getMilliseconds() - date2.getMilliseconds
// Create a class that describes an article (heading, short description, 
//     tags array, date of publication in format YYYY-MM-DD). 
//     Create a method of the class that will print all the article 
//     information to the webpage using document.write(). 
//     If the date of publication was less than a day ago, 
//     it is displayed as “today”, if less than a week ago - “N days ago”, 
//     and otherwise it is shown as the full date format dd:mm:yyyy.

class Article {
    constructor(heading, description, tags, date) {
        this.heading = heading;
        this.description = description;
        this.tags = tags;
        this.date = date;
    }

    printInfo() {
        let today = new Date();
        let date2 = new Date(this.date);
        let diff = today.getTime() - date2.getTime();
        // console.log(diff);
        let seconds = diff / 1000;  //difference in seconds
        let oneDay = 86400;     //seconds in one day
        // console.log(seconds);
        let week = oneDay * 7;  //seconds in one week
        let day = Math.trunc(seconds / oneDay);
        // console.log(day);
        // console.log(week);


        //display date as dd:mm:yyyy
        let postedDay = date2.getDate();
        let fixedDay = postedDay.toString().padStart(2, '0');
        let postedMonth = date2.getMonth()+1;
        let fixedMonth = postedMonth.toString().padStart(2, '0');
        let postedYear = date2.getFullYear();
        let postedDate = `${fixedDay}:${fixedMonth}:${postedYear}`
        console.log(postedDate);

        if (seconds <= oneDay) {
            document.write(`<h1> ${this.heading}</h1> <p>${this.description}</p> <p>${this.tags}</p> <p>Posted: Today</p>`);
            }
            else if (seconds <= week ) { 
                document.write(`<h1> ${this.heading}</h1> <p>${this.description}</p> <p>${this.tags}</p> <p>Posted: ${day} days ago</p>`);
            }
            else {
                document.write(`<h1> ${this.heading}</h1> <p>${this.description}</p> <p>${this.tags}</p> <p>Posted: ${postedDate}</p>`);
            }
    }
}


let article1 = new Article ('Stay at home', 'Things to do in times of social distancing', ['home', 'corona', 'distance'], '2020-03-02');

article1.printInfo();

