function add_to_gh() {
    console.log('trying to add to greenhouse!')
    var full_name_split = $('#topcard h1').first().text().split(' ');
    var first_name = full_name_split[0]
    var last_name = full_name_split[full_name_split.length - 1]
    var company = $('h5 a').first().text();
    var title = $('#profile-experience h4 a').first().text();

    header = {'secret_header' : 'abc'}

    data = {
        "first_name": first_name,
        "last_name": last_name,
        "company": company,
        "title": title,
        "auth_code" : 'Basic ZGQ1MzA1ZTdiMTRhNjExZmJmNmQ1ZDI1Nzc0OTZjMTY=',
        "user" : '23470'
    }

    $.ajax({
        type: 'POST',
        url:'https://addtogreenhouse.appspot.com/',
        data: JSON.stringify(data),
        success: function(){window.alert(first_name + ' successfully added to Greenhouse!')},
        error: function(XMLHttpRequest, textStatus, errorThrown) { 
            alert("Status: " + textStatus); alert("Error: " + errorThrown);
        },
        headers: header,
        contentType: "application/json",
        // dataType:'json',
    })
}
    