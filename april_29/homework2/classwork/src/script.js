$('.content').hide();


// Does not work, because arrow function with (this)
// $('.title').on('click', () => {
//     $(this).next().toggle();
// });


//Works!
$('.title').on('click', function() {
    $(this).next().slideToggle();
})

//Works! Difference between on and no on (click)?
// $('.title').click(function() {
//     $(this).next().toggle();
// })
