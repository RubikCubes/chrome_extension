
var listener = new window.keypress.Listener();
var project_name = 'ENTER PROJECT ID'
var my_scope = this;
var my_combos = listener.register_many([
    {
        "keys"          : "right",
        "is_exclusive"  : true,
        "on_keyup"      : function(e) {
            console.log('yes')
            var x = $('.skyline-pagination-link[rel="next"]')[0].click()
            // console.log(x)
            console.log('done')
            
        },
    
        "this"          : my_scope
    },
    {
        "keys"          : "left",
        "is_exclusive"  : true,
        "on_keyup"      : function(e) {

            
            // $('button[data-lira-status-id="24246793"]').click()
            // $('.status-container button:contains("Archived")').click()
            $('.move-to-pipeline__dropdown-trigger')[6].click()
            setTimeout(function() {$('.artdeco-dropdown__item')[3].click()}, 300)
            // $('.next .page-link')[0].click()
        },
    
        "this"          : my_scope
    },
    {
        "keys"          : "z",
        "is_exclusive"  : true,
        "on_keyup"      : function(e) {
            console.log('this ran')
            $('.profile-list__select-all input[type="checkbox"]').click()
            setTimeout(function(){
                $('button[data-test-action="add-note"]').click()
            }, 400)


        },
    
        "this"          : my_scope
    },

]);

