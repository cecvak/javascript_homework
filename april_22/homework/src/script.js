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
        // console.log(`amount of characters: ${this.textstring.length}`);
        let inkneeded = this.textstring.length/2;
        // console.log(`amount of ink needed: ${inkneeded}%`);
        // console.log(`amount of ink in marker: ${this.amount}%`);
        let inkLeft = this.amount - inkneeded;
        let charsToPrint = this.amount * 2;
        // console.log(`Possible characters to print: ${charsToPrint}`);
        let newString = this.textstring.slice(0, charsToPrint);
        this.restofString = this.textstring.slice(charsToPrint, -1);
        // console.log(`Characters in new string: ${newString.length}`);

        if (this.amount>=1 && inkneeded <=100){
            document.write(`<p style="color:${this.color}"> ${this.textstring}</p>`);
            document.write(`Ink left: ${inkLeft}%`);
        }
        else if (this.amount >= 1) {
            document.write(`<p style="color:${this.color}"> ${newString}</p>`);
            document.write(`No ink left!`);
        }
        else if (this.amount === 0 ) {
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

        function divideString(oldString, length) {
            let textArray = [];
            textArray = oldString.match(new RegExp('.{1,' + length + '}', 'g'));
            for (let line of textArray) {
                document.write(`<p style ="color:${color}"> Refilled! ${line}</p>`);
            }
            return textArray;
        }

        divideString(this.restofString, this.amount*2);
        
    }
    
}

let marker1 = new Marker('blue', 10);
let marker2 = new refill('red', 50);
marker1.text();
marker2.refillMarker();



