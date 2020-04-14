// 1. Create a function that takes an integer number as an argument and returns 
// “Even” for even numbers or “Odd” for odd numbers.

function number(yourNumber) {
    let result;
    if (yourNumber % 2 === 0) { //Check for even numbers, by dividing by 2, remainder should be 0.
        result = "Even!";   //If it's even, return and print even
        return result;
    }
    else {
        result = "Odd!";        //If it's odd, return and print odd
        return result;
    }
}

console.log(number(6));
console.log(number(3));
console.log(number(0));
console.log(number(13));


// 2. Trolls are attacking your comment section! Create a function that takes a 
// string and returns a new string with all vowels removed. For example, 
// “This website is for losers LOL!” returns “Ths wbst s fr lsrs LL!“.

function comment(sentence) {
    let newSentence = sentence.replace(/[aeiou]/gi, '');     //replace all vowels with nothing, g for global search and i for caseinsensitive
    return newSentence;
}

console.log(comment('This website is for losers LOL'));
console.log(comment('I am a stupid troll'));

// 3. Write a function which repeats the given string exact number of times. 
// For example, repeatString("Hello", 5) returns “HelloHelloHelloHelloHello”.

function repeatString(yourString, aNumber) {
    let newString = yourString.repeat(aNumber);     //repeat the given string the number of given times using repeat method and create a new string
    return newString;
    
}

console.log(repeatString('Hello', 5));
console.log(repeatString('Goodbye', 3));