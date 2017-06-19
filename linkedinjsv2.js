//Write Code Below


//Remove the // to un-comment out the line. Or feel free and to copy/paste the lines below to just under //Write Code Below 

///****EXAMPLE****


// var listener = new window.keypress.Listener();


// // Add project name in between the ' '
// project = 'ADD_PROJECT_NAME'

// **side note** project name must be EXACT! 

// listener.sequence_combo("1 a", function() {
       // Clicks the project page
//     $('.tool-projects').click();
       //Adds project
//     $('.suggestion-value:contains('+project+')').click();
       // Set status. You will need to find the value of the status ID for this to work
//     $('select[name="statusId"] option[value="34207826"]').prop('selected',true).click()
       //Clicks the "add" button
//     $('.add-to-project .actions .btn-primary').click()
       //Clicks the send inmail button
//     $('.send-inmail').click();
       //Finds the first name on the page
//     first_name = $('#topcard h1').text().split(' ')[0];
//     setTimeout(function(){
           // Sets the subject line
//         $('.compose-subject').val(first_name+", SUBJECT LINE GOES HERE");
            // Sets the message 
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







