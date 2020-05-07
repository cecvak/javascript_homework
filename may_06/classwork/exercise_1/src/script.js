$.ajax('data/employees.json')
    .done(function (employees) {

        let list = $('<ul></ul>');
        list.addClass('bulleted');

        for (let employee of employees) {
            let listItem = $('<li></li>');
            listItem.text(employee.name);
            if (employee.inOffice) {
                listItem.addClass('in');
            }
            else {
                listItem.addClass('out');
            }
            list.append(listItem);
           
        }
        $('#employeeList').append(list);
    });
    
        