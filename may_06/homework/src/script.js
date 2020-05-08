
$('form').submit(function(event) {
    $('.result-container').empty(); 
    event.preventDefault();
    let title = $('#title').val();
    // console.log(title);
    $.ajax('http://www.omdbapi.com/?apikey=19394832&t='+title)
        .done(function (response) {
        
            if (response.Response === 'False') {
                alert('Movie not found!');
            }
            else {
            
            let movieContainer = $('<div></div>');
            movieContainer.addClass('movieContainer');
            let posterContainer = $('<div></div>');
            posterContainer.addClass('posterContainer');
            let infoContainer = $('<div></div>');
            infoContainer.addClass('infoContainer');

            let movieTitle = $('<h2></h2>');
            movieTitle.text(`${response.Title}`);
            movieTitle.addClass('movieTitle');

            let movieYear = $('<p></p>');
            movieYear.text(response.Year);
            movieYear.addClass('movieYear');

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
            poster.attr('src', response.Poster);
            poster.addClass('moviePoster');
            

            let ratingsArray = response.Ratings;
            // console.log(ratingsArray);
            let movieRating = $('<p></p>');
            movieRating.addClass('movieRating');
            let ratingString = "";
            $.each(ratingsArray, function (key, value) {
                ratingString = (value.Source + ": " + value.Value + '<br>');
                movieRating.append(ratingString);
                // console.log('source: ' + value.Source + ' rating: ' +value.Value);
            });


            posterContainer.append(
                poster
            );
            infoContainer.append(
                movieTitle,
                movieYear,
                movieCountry,
                director,
                genre,
                cast,
                plot,
                movieRating
            );

            movieContainer.append(
                posterContainer,
                infoContainer
            )

            $('.result-container').append(movieContainer);
            }    });
    
    
});

