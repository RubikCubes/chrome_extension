//Write Code Below
alert('this chrome extension loaded')

//Code written by Morgan Allen
//morganvallen@gmail.com

//Remove the // to un-comment out the line. Or feel free and to copy/paste the lines below to just under //Write Code Below 

///****EXAMPLE****


var listener = new window.keypress.Listener();


// // Add project name in between the ' '
project = 'test_project'

// **side note** project name must be EXACT! 

listener.sequence_combo("1 a", function() {
    $('.tool-projects').click();
    $('.suggestion-value:contains('+project+')').click();
    $('.btn-primary')[0].click()

    first_name = $('#topcard h1').text().split(' ')[0];
    
    $('.send-inmail').click();
    setTimeout(function(){
        $('.compose-subject').val(first_name+", help us bring transparency to the financial industry!");
        $('.compose-txtarea').val("\
Hey "+first_name+",\n\
\n\
This is some text\n\
\n\
with line breaks\n\
\n\
Replace this with your message.\n\
\n\
You can even use "+first_name+" again.\n\
\n\
Best,\n\
Your Name Here"
        )
    }, 2000)
}, true)
