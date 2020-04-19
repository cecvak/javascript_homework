// 1. Create a “groceries list” array. 
// Each element of the array is an object that contains the name of a product, 
// an amount needed and a property saying whether it is bought or not. 
// Write a few functions for working with this array: 
// 1) Function for displaying the entire list; 
// 2) Function for adding a purchase to the list. 
//     Note that if a product already exists in the array, the amount needs 
//     to be increased in the existing purchase, not in a new one; 
// 3) Function for purchasing a product. The function accepts the name of a product and 
    // marks it as bought.


    //Array with grocery list items
let groceries = [
    {
        name: 'Milk',
        amount: 1,
        isbought: false
    },
    {
        name: 'Bread',
        amount: 2,
        isbought: false
    },
    {
        name: 'Banana',
        amount: 5,
        isbought: false 
    },
];

// Function to display grocery list
function displayGroceries(grocery) {
    console.log(`Product name: ${grocery.name}, Amount: ${grocery.amount}, Has been bought: ${grocery.isbought}.`);

}

groceries.forEach(displayGroceries);

//Function for adding to list, check if name exists if so increase amount if not add a new item
function addGroceries(newGroceries) {
    // for (let i = 0; i < groceries.length; i++) {
    //     if (groceries[i].name.toLowerCase() == newGroceries.name.toLowerCase()) {
    //         groceries[i].amount = newGroceries.amount + groceries[i].amount;
    for(let item of groceries) {
        if (item.name.toLowerCase() == newGroceries.name.toLowerCase()) {
            item.amount = newGroceries.amount + item.amount;
            return groceries;
        }
    }
    groceries.push(newGroceries);
        return groceries;
}

addGroceries({name: 'cheese', amount: 8, isbought: false} );
addGroceries({name: 'Milk', amount: 3, isbought: false} );
addGroceries({name: 'milk', amount: 3, isbought: false} );
addGroceries({name: 'Milk', amount: 2, isbought: false});
addGroceries({name: 'bread', amount: 2, isbought: false});
addGroceries({name: 'eggs', amount: 12, isbought: false});
addGroceries({name: 'Cheese', amount: 2, isbought: false} );
// addGroceries({name: 'Bread', amount: 2, isbought: false});


console.log(groceries);
groceries.forEach(displayGroceries);


// Function for purchasing a product. The function accepts the name of a product and 
    // marks it as bought.

function bought(purchased) {
    for(let item of groceries) {
        if (item.name.toLowerCase() == purchased.name.toLowerCase()) {
            item.isbought = true;
            return groceries;
        }
    }
}

bought({name: 'cheese'});
bought({name: 'bread'});
groceries.forEach(displayGroceries);



// 2. Create an array of classrooms. 
// A classroom object consists of a name, 
// a number of seats (10 to 20) and the faculty it is meant for. 
// Write a few functions for working with it: 
// 1) Display all the classrooms; 
// 2) Display all the classrooms for a given faculty; 
// 3) Display only the classrooms that would fit a given group. 
//     A group object contains a name, the number of students, and the faculty name.