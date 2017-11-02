//Write Code Below
alert('this chrome extension loaded')


//Remove the // to un-comment out the line. Or feel free and to copy/paste the lines below to just under //Write Code Below 

///****EXAMPLE****


// var listener = new window.keypress.Listener();


// // Add project name in between the ' '
// project = 'ADD_PROJECT_NAME'

// **side note** project name must be EXACT! 

// listener.sequence_combo("1 a", function() {

//     $('.tool-projects').click();


//     $('.suggestion-value:contains('+project+')').click();


//     $('.add-to-project .actions .btn-primary').click()


//     $('.send-inmail').click();


//     first_name = $('#topcard h1').text().split(' ')[0];

//     setTimeout(function(){

//         $('.compose-subject').val(first_name+", SUBJECT LINE GOES HERE");


//         $('.compose-txtarea').val("\
// Hey "+first_name+",\n\
// \n\
// Add some text to a message here\n \
// \n\
// This will be on a new line \n \
// \n\
// Can create bullet points:\n \
// \n \
//     -Like this if you want!\n \
//     \n\
//     -Second bullet point\n \
//     \n\
//     -Third bullet point\n \
// \n\
// ...and so much more!\n \
// \n\
// Add some more text! Thanks "+first_name+". \n \
// \n\
// Best,\n \
// SOME NAME"
//         )

//     }, 2000)




//next profile
listener.sequence_combo("shift n p", function(){
    $('a[title="Next Page"]')[0].click();
}, true);







