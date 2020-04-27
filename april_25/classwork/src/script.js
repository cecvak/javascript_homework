// 1. Create an HTML page that will contain text and a button. 
// Clicking the button should hide the text. 
// Clicking it again should display the text.

function hide() {
    let text = document.getElementById('text');
    if (text.style.visibility === "hidden") {
        text.style.visibility = "visible";
    } else {
        text.style.visibility = "hidden";
    }
}

// 2. Create an HTML page with a progress bar and a button. 
// Clicking the button should fill the progress bar by 5%. 
// To create a progress bar you can use <progress> tag https://developer.mozilla.org/en-US/docs/Web/HTML/Element/progress

let fillValue = +progress.getAttribute('value');
document.getElementById("progressText").innerHTML = `${fillValue}%`;

function fill() {
    let i;
    let fillValue = +progress.getAttribute('value');
    for (i = 5; i < progress.getAttribute('max'); i++) {
        if (fillValue < progress.getAttribute('max')) {
            fillValue = fillValue + i;
            progress.setAttribute('value', fillValue);
            document.getElementById("progressText").innerHTML = `${fillValue}%`;
            console.log(fillValue);
            return fillValue;
        }
        else if (fillValue == progress.getAttribute('max')) {
            document.getElementById("success").innerHTML = `Finished!`;
        }
    }
}

// function fill() {
//     let fillValue = +progress.getAttribute('value');
    
//     while(fillValue <= progress.getAttribute('max')) {
//         fillvalue = fillValue + 5;
//         console.log(fillValue);
//         progress.setAttribute('value', fillvalue);
//         document.getElementById("progressText").innerHTML = `${fillValue}%`;

//         return fillValue;
//     }
// }
    // else if (fillValue == progress.getAttribute('max')) {
    //     document.getElementById("success").innerHTML = `Finished!`;

    // }


// function fill() {
//     let fillValue = document.getElementById('progress').value;
//     document.getElementById("progress").value = fillValue + 5;
//     document.getElementById("progressText").innerHTML = `${fillValue}%`;
//     console.log(fillValue);
// }

// 3. Create an HTML page with a Like button. 
    // Clicking it should increase the number in the likes counter.

// function like() {
//     let i;
//     let number = +likes.getAttribute('value');
//     for (i=1; i < 100; i++) {
//         if (number < 100) {
//             number = number + i;
//             likes.setAttribute('value', number);
//             console.log(number);
//         document.getElementById('likes').innerHTML = `${number} likes.`;
//         return number;
//         }
        
//     }
    
// }
let num = 0;
function like() {
    let text = document.getElementById('likes');
    text.value = num;
    num++;
    document.getElementById('likes').innerHTML = `${num} likes`;
    console.log(num);
}

