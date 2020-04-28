let green = document.getElementById('circle_green');
let yellow = document.getElementById('circle_yellow');
let red = document.getElementById('circle_red');


function nextLight() {

    if (green.classList.contains("on")) {
        green.classList.remove("on");
        yellow.classList.add("on");
    }    else if (yellow.classList.contains("on")) {
        yellow.classList.remove("on");
        red.classList.add("on");
    }   else if (red.classList.contains("on")) {
        red.classList.remove("on");
        green.classList.add("on");
    }

    
}
