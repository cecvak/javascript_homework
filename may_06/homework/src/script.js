

$('form').submit(function(event) {
    $('.result-container').empty();   
    event.preventDefault();
    let title = $('#title').val();
    console.log(title);
    $.ajax('http://www.omdbapi.com/?apikey=19394832&t='+title).done(function (response) {
         
        let container = $('<div></div>');
        console.log(response.Title);
        console.log(response.Actors);
        container.append(`
            <h2>${response.Title}</h2>
            <p>${response.Actors}</p>
        `);
        $('.result-container').append(container);
    });

});

