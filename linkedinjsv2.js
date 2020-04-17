
var listener = new window.keypress.Listener();
var project_name = 'ENTER PROJECT ID'
var my_scope = this;
var my_combos = listener.register_many([
//     {
//         "keys"          : "up",
//         "is_exclusive"  : true,
//         "on_keyup"      : function(e) {

         
//             document.getElementsByClassName('tool-projects')[0].click()
//             document.querySelector('button[data-item-id='+project_name+']').click()
//             document.getElementsByClassName('save-to-project')[0].click()
//             // console.log("And now you've released one of the keys.");
//             var full_name_split = $('#topcard h1').first().text().split(' ');
//             var first_name = full_name_split[0]
//             var last_name = full_name_split[full_name_split.length - 1]
//             var company = $('h5 a').first().text();
//             var title = $('#profile-experience h4 a').first().text();
//             var linkedinUrl = $(location).attr('href').split('?')[0];
//             var publicLI = $("#topcard > div.module-footer > ul > li.public-profile.searchable > a").attr('href');
//             var candidateLocation = $('.location-industry .location').text();
            
//             var data = first_name+"|"+last_name+"|"+company+"|"+title+"|"+candidateLocation+"|"+linkedinUrl+"|"+publicLI
//             window.prompt("data", data)            

//             $('.next .page-link')[0].click()
//         },
//         "this"          : my_scope
//     },
       {
        "keys"          : "right",
        "is_exclusive"  : true,
        "on_keyup"      : function(e) {
            console.log('yes')
            $('.send-inmail').click()
            setTimeout(function(){
                $('button[data-tracking-control-name="expand_templates"]').click()
                // v2
                // $('ul button[data-template-id="543473816"]').click()  

                // v5
                // $('ul button[data-template-id="534428351"]').click()                 

                // second message
                // $('ul button[data-template-id="543869206"]').click() 

                // Third message
                // $('ul button[data-template-id="534429381"]').click()                 

                // $('ul li[data-template-id="543473816"]').click()
            }, 1000)
            
        },
    
        "this"          : my_scope
    },
    {
        "keys"          : "up",
        "is_exclusive"  : true,
        "on_keyup"      : function(e) {
            $('.inmail-send-btn')[0].click()
            $('.next .page-link')[0].click()
        },
    
        "this"          : my_scope
    },
    {
        "keys"          : "down",
        "is_exclusive"  : true,
        "on_keyup"      : function(e) {
            $('.next .page-link')[0].click()
        },
    
        "this"          : my_scope
    },
    {
        "keys"          : "left",
        "is_exclusive"  : true,
        "on_keyup"      : function(e) {

            
            // $('button[data-lira-status-id="24246793"]').click()
            $('.status-container button:contains("Archived")').click()
            $('.next .page-link')[0].click()
        },
    
        "this"          : my_scope
    },
    {
        "keys"          : "z",
        "is_exclusive"  : true,
        "on_keyup"      : function(e) {
            $('#more-add-actions > li:nth-child(3) > button').click()
        },
    
        "this"          : my_scope
    },

]);



