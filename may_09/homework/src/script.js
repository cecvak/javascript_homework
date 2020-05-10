// Create a task list using the local storage. 
// On the page a user should see an input form and a button. 
// After the user types a task description in the input and clicks on the button, 
// the task has to be added to the local storage and also displayed on the page. 
// After the user reloads the page, all the saved tasks have to be displayed on 
// the page.
// Store the task list as a stringified array. 
// You can use jQuery to simplify DOM manipulations.

// let tasks = '{"tasks":[{"task":"clean house"} ]}';
// console.log(tasks);

let tasks = [];
tasks = JSON.parse(localStorage.getItem('tasks'));
console.log(tasks);

$('form').submit(function(event) {
    // event.preventDefault();

    let task = $('#task').val();
    tasks.push({'task' : task});
    // console.log(tasks);
    localStorage.setItem('tasks', JSON.stringify(tasks));

    // console.log(localStorage);
    
})


$(function() {
    let listContainer = $('<div></div>');

    let taskString = "";
        $.each(tasks, function (key, value) {
            taskString = (value.task + '<br>');
            listContainer.append(taskString);
            console.log(taskString);
    });

    $('.output-container').append(listContainer);

}
)