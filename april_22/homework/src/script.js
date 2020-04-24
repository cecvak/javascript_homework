// Create a class that describes a regular marker. 
// It should contain the following components: 
// A field that stores the color of the marker;
// A field that stores the amount of ink in the marker (in percentage);
// A method for input. The method takes a string and displays 
// the text in the given color on the webpage. 
//     The text appears as long as the marker has ink. 
//     One non-space character takes 0,5% ink from the marker.
// Create a class that describes a refillable marker. 
//     The class should inherit from the regular marker. 
//     Also add a method that refills the marker. 
//     Demonstrate the work of these methods.



class Marker {
    constructor(color, amount, textstring) {
        this.color = color;
        this.amount = amount;
        this.textstring = textstring;
        this.restofString = this.restofString;
    }

    text() {
        this.textstring = prompt('Write something!');
        console.log(`amount of characters: ${this.textstring.length}`);
        let inkneeded = this.textstring.length/2;
        console.log(`amount of ink needed: ${inkneeded}%`);
        console.log(`amount of ink in marker: ${this.amount}%`);
        let charsToPrint = this.amount * 2;
        console.log(`Possible characters to print: ${charsToPrint}`);
        let newString = this.textstring.slice(0, charsToPrint);
        this.restofString = this.textstring.slice(charsToPrint, -1);
        console.log(`Characters in new string: ${newString.length}`);
       
        if (this.amount >= 1) {
            document.write(`<p style="color:${this.color}"> ${newString}</p>`);
        }
        else if (this.amount == 0 ) {
            document.write(`No ink!`);
        }
    }
}

class refill extends Marker {
    constructor(color, amount, textstring, restofString) {
        super(color, amount, textstring, restofString);
    }
    
    refillMarker() {
        this.text();
        this.amount = 100;

        let color = this.color;

        // let divided = [];
        // for (let i = 0, )
        // let n = this.amount;
        // // document.write(`Marker refilled!`);
        // console.log(this.restofString);
        // // let dividedString = this.restofString.match(/.{1.this.amount}/g);
        // // console.log(dividedString);
        // let someString = 'aaaabbbbccccdddd'
        function divideString(oldString, length) {
            //  oldString = this.restofString;
            //  length = this.amount;
            let textArray = [];
            textArray = oldString.match(new RegExp('.{1,' + length + '}', 'g'));
            // document.write(textArray);
            for (let line of textArray) {
                document.write(`<p style ="color:${color}"> Refilled! ${line}</p>`);
            }
            return textArray;
        }

        
        divideString(this.restofString, this.amount*2);
        
        // for (let refilled of divideString) {
        //     document.write(`Refilled! ${refilled}`);
        // }
        // console.log(this.restofString.match(/.{1,10}/g));
        // let re = new RegExp('.{1, ' + this.amount + '}', 'g');
        // console.log(this.restofString.match(new RegExp('.{1, ' + this.amount + '}', 'g')));

        // for (let i = 100; i < this.restofString.length; i++) {
        //     document.write(`Marker has been refilled! ${this.restofString.substring(0, 100)}`);
        // } 
        // document.write(`Marker refilled!`);
        // document.write(`<p style="color:${this.color}"> ${this.restofString}</p>`);

                // if (this.amount = 0) {
        //     this.amount = 100;
        //     console.log(this.amount);
        //     document.write(`<p style="color:${this.color}"> ${this.textstring}</p>`);
        // }
    }
    
}

let marker1 = new Marker('blue', 100);
let marker2 = new refill('red', 100);
marker1.text();
marker2.refillMarker();


// Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.

