//Write Code Below




///****EXAMPLE****


// var listener = new window.keypress.Listener();


// // Add project name in between the ' '
// project = 'Security_Morgan'

// listener.sequence_combo("1 a", function() {
//     $('.tool-projects').click();
//     $('.suggestion-value:contains('+project+')').click();
//     $('select[name="statusId"] option[value="34207826"]').prop('selected',true).click()
//     $('.add-to-project .actions .btn-primary').click()
//     $('.send-inmail').click();
//     first_name = $('#topcard h1').text().split(' ')[0];
//     setTimeout(function(){
//         $('.compose-subject').val(first_name+", help us bring transparency to the financial industry!");
//         $('.compose-txtarea').val("\
// Hey "+first_name+",\n\
// \n\
// Add some text to a message here\n \
// \n\
// To create new lines \n \
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







