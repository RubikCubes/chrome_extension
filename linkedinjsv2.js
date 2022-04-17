
var listener = new window.keypress.Listener();
var project_name = 'ENTER PROJECT ID'
var my_scope = this;
var my_combos = listener.register_many([
    {
        "keys"          : "shift right",
        "is_exclusive"  : true,
        "on_keyup"      : function(e) {
            console.log('yes')
            document.querySelector('.skyline-pagination-link[rel="next"]').click()
            
        },
    
        "this"          : my_scope
    },
    {
        "keys"          : "shift down",
        "is_exclusive"  : true,
        "on_keyup"      : function(e) {

            
        var firstChild = document.querySelector('.expandable-list-profile-core__list :first-child').querySelector('.expandable-list-profile-core__list-item')

        var groupedTitles = firstChild.querySelector('.grouped-position-entity__company-data-container')
        var company
        var title

        var name = document.querySelector('.topcard-condensed__content-left .artdeco-entity-lockup__title').innerText.trim()

        //company
        if(typeof(groupedTitles) != 'undefined' && groupedTitles !=null){
            console.log('groupedCompany exists!');
            company = groupedTitles.querySelector('.grouped-position-entity__company-name').innerText.trim()
        } else{
            console.log('groupedCompany does not exist!');
            company = firstChild.querySelector('.position-item__company-link').innerText.trim()
        }
        //title
        if(typeof(groupedTitles) != 'undefined' && groupedTitles != null){
            console.log('groupedTitles exists!');
            title = firstChild.querySelector('dl :first-child').querySelector('dd').innerText.trim()
        } else{
            console.log('groupedTitles does not exist!');
            title = firstChild.querySelector('.position-item__position-title-link').innerText.trim()
        }

        var publicLI = document.querySelector('.personal-info__link').href.split("?")[0]
        var candidateLocation = document.querySelector('.topcard-condensed__content-left .lockup__details div div').textContent.trim().replace('· ','')

        var popupText = name+"|"+company+"|"+title+"|"+candidateLocation+"|"+publicLI

        prompt('copy/paste', popupText)

        },
    
        "this"          : my_scope
    }
]);

