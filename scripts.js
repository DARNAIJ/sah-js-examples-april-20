// Third part:
console.log('Sript file is loaded.');

$('h1').html('This is done by <em>JavaScript</em>!');
$('h2').toggleClass('blue');
$('h2').toggleClass('blue');

let name = 'Adam';
let age = 34;

age = age + 5;

function myLitteFunction() {
    // condition: number of ps is smaller than 5
    // >, <, <=, >=, ===, !==(not =), ezek a lehetőségek, amiket hsználhatunk
    if ($('p').length < 5) {
        $('main').append('<p>A p is appended in the main.</p>');
    }
    $('main').append('<p>A p is appended in the main.</p>');
    $('p').css('border', '1px solid red');
    $('p').css('padding', '10px');
} else {
    console.log('We reached the maximum paragraph number');
}

myLitteFunction();
myLitteFunction();

$('#add').click(myLitteFunction);
$('#remove').click(function () {
    $('p:last-child').remove();
} );

// Fourth part:

// if (condition that true or false) {
    // condition is true
// } else { 
    // condition is false
// }

let colors = ['orange', 'yellow', 'blue', 'lime', 'magenta',];

colors.forEach(function(color){
    $('#box-container').append('<div class="box"></div>');
    $('.box:last-child').css('background',color);
});

for (let i = 0; i < 100; i = i++) {
   console.log(i);
}


// $('#box-container').append('<div class="box"></div>');
//$('.box:last-child').css('background', colors[0]);
//$('#box-container').append('<div class="box"></div>');
//$('.box:last-child').css('background', colors[1]);
//$('#box-container').append('<div class="box"></div>');
//$('.box:last-child').css('background', colors[2]);
//$('#box-container').append('<div class="box"></div>');
//$('.box:last-child').css('background', colors[3]);
//$('#box-container').append('<div class="box"></div>');
//$('.box:last-child').css('background', colors[4]);

// Single line comment

/*
Multiple
lines
of comments
*/

//First part