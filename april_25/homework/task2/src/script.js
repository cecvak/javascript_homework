// 2. Create an HTML page with OPEN button and a modal box. 
// The modal box should have text and a CLOSE button. 
// The modal box is not displayed from the beginning. 
// It appears when clicking the OPEN button and disappears when clicking CLOSE.


// Get modal
let modal = document.getElementById('myModal');

// Get button that opens modal
let button = document.getElementById('open');

// Get span element that closes the modal
let span = document.getElementsByClassName('close')[0];

// Click button to open modal
button.onclick = function() {
    modal.style.display = 'block';
}

// Click close to close modal
span.onclick = function() {
    modal.style.display = 'none';
}

// CLick outside modal to close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = 'none';
    }
}