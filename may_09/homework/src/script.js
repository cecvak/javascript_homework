// Create a task list using the local storage. 
// On the page a user should see an input form and a button. 
// After the user types a task description in the input and clicks on the button, 
// the task has to be added to the local storage and also displayed on the page. 
// After the user reloads the page, all the saved tasks have to be displayed on 
// the page.
// Store the task list as a stringified array. 
// You can use jQuery to simplify DOM manipulations.


let getTasks = localStorage.getItem('tasks');   //get items as string from local storage
// console.log(getTasks); 
// console.log(typeof getTasks);   //string
let tasks = getTasks ? JSON.parse(getTasks) : [];     //parse string and store in array
// console.log(typeof tasks);    //object
// console.log(tasks);   // displays array

$('form').submit(function(event) {
    // event.preventDefault();      //prevent page from reloading

    let task = $('#task').val();    //get input value from form
    // console.log(task);  
    // tasks.push({'task' : task});  
    tasks.push(task);         //push input value to array
    // console.log(tasks);
    localStorage.setItem('tasks', JSON.stringify(tasks));     //store in local storage as string
})



$(function() {

    let list = $('<ul></ul>');                          // create list
    // let list = document.getElementById('task-list');
        $.each(tasks, function (key, value) {     //go through array and append as list items
            list.append(`                               
                <li>${value}</li>
                `);

    });

    $('.output-container').append(list);                // append list to div
   
}
)