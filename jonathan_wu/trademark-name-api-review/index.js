// console.log('hello from index.js')

// $('body').click(function()
// 	{console.log('Hello from jquery')})

$('#search').on('submit', searchNow)

function searchNow(event) {
    event.preventDefault();
    var searchBar = $("input").val()

    $.ajax({
        url: "http://www.markerapi.com/api/v1/trademark/search/" + searchBar + "/username/jondubya/password/LTW497kvwQ",
        success: appendList
    })
}

function appendList(list) {
    var results = list.result.count
    var wordmark = results.trademarks[0].wordmark
    var code = results.trademarks[0].code
    var serial = results.trademarks[0].serialnumber
    var registration = results.trademarks[0].registratondate
    var description = results.trademarks[0].description
    if (results < 1) {
        $('#results').append('This name is available!')
    }
    else {
    	$('results').append('Name: <li>'+wordmark+'</li><br>')
    	$('results').append('Code: <li>'+code+'</li><br>')
    	$('results').append('Serial : <li>'+serial+'</li><br>')
    	$('results').append('Registration : <li>'+registration+'</li><br>')
    	$('results').append('Description : <li>'+description+'</li><br>')
    }
}
