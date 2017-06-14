var listener = new window.keypress.Listener();


project = 'Security_Morgan'

listener.sequence_combo("1 a", function() {
    $('.tool-projects').click();
    $('.suggestion-value:contains('+project+')').click();
    $('select[name="statusId"] option[value="34207826"]').prop('selected',true).click()
    $('.add-to-project .actions .btn-primary').click()
    $('.send-inmail').click();
    first_name = $('#topcard h1').text().split(' ')[0];
    setTimeout(function(){
        $('.compose-subject').val(first_name+", help us bring transparency to the financial industry!");
        $('.compose-txtarea').val("\
Hey "+first_name+",\n\
\n\
I am on the recruiting team at NerdWallet and wanted to see if you might be open to a role on our team. We are a Series A startup with 10's of millions of users and generating $100MM+ in revenue.\n \
\n\
We are working to be the trusted source for helping consumers make the best financial decisions. We're transitioning from a content driven marketplace to a data driven one. We're in the early stages of collecting information by registering our members, linking their credit score and financial accounts and then looking after their financial needs proactively. We are being very proactive about any security concerns and building the team before any issues arise.\n \
\n\
I thought you could be a great fit for a Senior level role on our Security team. You'd be working very closely with our Senior Director of Security (https://www.linkedin.com/in/balasathiamurthy/) on building out our Security program. A few things that you would be responsible for in this role:\n \
\n \
    -Build creative tools and solutions to security-harden NerdWallet’s production infrastructure including systems and networking without diminishing productivity\n \
    \n\
    -Build security tools and monitoring capabilities to improve our ability to detect security incidents and response capabilities.\n \
    \n\
    -Be a go-to security expert that all team members can learn from, and evangelize NerdWallet's own security culture\n \
\n\
...and so much more!\n \
\n\
Let me know if are interested, I'd certainly like to tell you more about us! Thanks "+first_name+". \n \
\n\
Best,\n \
Morgan"
        )
    }, 2000)

    // Comment this in if you'be built your own proxy to add to Greenhouse
    // 
    // add_to_gh()

}, true);


//next profile
listener.sequence_combo("shift n p", function(){
    $('a[title="Next Page"]')[0].click();
}, true);







