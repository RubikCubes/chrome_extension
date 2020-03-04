
var listener = new window.keypress.Listener();

var my_scope = this;
var my_combos = listener.register_many([
    {
        "keys"          : "up",
        "is_exclusive"  : true,
        "on_keyup"      : function(e) {

         
            document.getElementsByClassName('tool-projects')[0].click()
            document.querySelector('button[data-item-id="1106937686"]').click()
            document.getElementsByClassName('save-to-project')[0].click()
            // console.log("And now you've released one of the keys.");
            var full_name_split = $('#topcard h1').first().text().split(' ');
            var first_name = full_name_split[0]
            var last_name = full_name_split[full_name_split.length - 1]
            var company = $('h5 a').first().text();
            var title = $('#profile-experience h4 a').first().text();
            var linkedinUrl = $(location).attr('href').split('?')[0];
            var publicLI = $("#topcard > div.module-footer > ul > li.public-profile.searchable > a").attr('href');
            var candidateLocation = $('.location-industry .location').text();
            
            var data = first_name+"|"+last_name+"|"+company+"|"+title+"|"+candidateLocation+"|"+linkedinUrl+"|"+publicLI
            window.prompt("data", data)            

            $('.next .page-link')[0].click()
        },
        "this"          : my_scope
    },
    {
        "keys"          : "right",
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

            $('.status-container button:contains("Archived")').click()
            $('.next .page-link')[0].click()
        },
    
        "this"          : my_scope
    },

]);



