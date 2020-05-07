
$('form').submit(function(event) {
    // $('.moviePoster-container').empty();
    // $('.movieInfo-container').empty();  
    $('.result-container').empty(); 
    event.preventDefault();
    let title = $('#title').val();
    // console.log(title);
    $.ajax('http://www.omdbapi.com/?apikey=19394832&t='+title).done(function (response) {
         
        let movieContainer = $('<div></div>');
        movieContainer.addClass('movieContainer');
        let posterContainer = $('<div></div>');
        posterContainer.addClass('posterContainer');
        let infoContainer = $('<div></div>');
        infoContainer.addClass('infoContainer');

            // let movieContainer = $('<div></div>');
        // let containerPoster = $('<div></div>');
        // let containerPoster = $('moviePoster-container');
        // let containerInfo = $('<div></div>');
        // console.log(response.Title);
        // console.log(response.Actors);

        let movieTitle = $('<h2></h2>');
        movieTitle.text(`${response.Title} ${response.Year}`);
        movieTitle.addClass('movieTitle');

        // let movieYear = $('<h2></h2>');
        // movieYear.text(response.Year);
        // movieYear.addClass('movieYear');

        let movieCountry = $('<p></p>');
        movieCountry.text(response.Country);
        movieCountry.addClass('movieCountry');

        let director = $('<p></p>');
        director.text(response.Director);
        director.addClass('movieDirector');

        let genre = $('<p></p>');
        genre.text(response.Genre);
        genre.addClass('movieGenre')

        let cast = $('<p></p>');
        cast.text(response.Actors);
        cast.addClass('movieCast');

        let plot = $('<p></p>');
        plot.text(response.Plot);
        plot.addClass('moviePlot');

        let poster = $('<img></img>');
        // poster.src(response.Poster);
        poster.attr('src', response.Poster);
        poster.addClass('moviePoster');
        // let ratings = $('<p></p>');
        // ratings.text(response.Ratings);
        // ratings.addClass('movieRatings');

        posterContainer.append(
            poster
        );
        infoContainer.append(
            // poster,
            movieTitle,
            // movieYear,
            movieCountry,
            director,
            genre,
            cast,
            plot,
            // ratings
        );

        movieContainer.append(
            posterContainer,
            infoContainer
        )

        
        // movieContainer.append(
        //     $('.moviePoster-container'),
        //     $('.movieInfo-container')

        // )

        // $('.result-container').append(movieContainer);
        // $('.moviePoster-container').append(containerPoster);
        // $('.movieInfo-container').append(containerInfo);
        
        // $('.result-container').append(containerPoster);
        $('.result-container').append(movieContainer);
    });

});






// $('form').submit(function(event) {
//     $('.moviePoster-container').empty();
//     $('.movieInfo-container').empty();   
//     event.preventDefault();
//     let title = $('#title').val();
//     $.ajax('http://www.omdbapi.com/?apikey=19394832&t='+title).done(function (response) {
         
//         let movieTitle = $('<h2></h2>');
//         movieTitle.text(`${response.Title} ${response.Year}`);
//         movieTitle.addClass('movieTitle');

//         let movieCountry = $('<p></p>');
//         movieCountry.text(response.Country);
//         movieCountry.addClass('movieCountry');

//         let director = $('<p></p>');
//         director.text(response.Director);
//         director.addClass('movieDirector');

//         let genre = $('<p></p>');
//         genre.text(response.Genre);
//         genre.addClass('movieGenre')

//         let cast = $('<p></p>');
//         cast.text(response.Actors);
//         cast.addClass('movieCast');

//         let plot = $('<p></p>');
//         plot.text(response.Plot);
//         plot.addClass('moviePlot');

//         let poster = $('<img></img>');
//         poster.attr('src', response.Poster);
//         poster.addClass('moviePoster');

//         $('.moviePoster-container').append(
//             poster
//         );
//         $('.movieInfo-container').append(
//             movieTitle,
//             movieCountry,
//             director,
//             genre,
//             cast,
//             plot,
//         );

//     });

// });





// THIS WORKS! DON'T TOUCH!!!
// $('form').submit(function(event) {
//     $('.result-container').empty();   
//     event.preventDefault();
//     let title = $('#title').val();
//     console.log(title);
//     $.ajax('http://www.omdbapi.com/?apikey=19394832&t='+title).done(function (response) {
         
//         let container = $('<div></div>');
//         console.log(response.Title);
//         console.log(response.Actors);
//         container.append(`
//             <h2>${response.Title}</h2>
//             <p>${response.Actors}</p>
//         `);
//         $('.result-container').append(container);
//     });

// });

