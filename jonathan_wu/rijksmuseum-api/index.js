// console.log('hello from index.js')

// $('body').click(function()
// 	{console.log('Hello from jquery')})

$('#search').on('submit',searchWork)
function searchWork(data){
	 event.preventDefault();
	 var searchBar = $("input").val().split(' ').join('-')

    $.ajax({
        url: "https://www.rijksmuseum.nl/api/pages/en/rijksstudio/artists/"+searchBar+"?key=UvDVOscb&format=json",
        success: appendList
    })
}
// https://www.rijksmuseum.nl/api/nl/collection/RP-P-1912-609?key=UvDVOscb&format=json
function appendList(data){
		var works = data.contentPage.artObjectSet
	for (var i = 0;i < works.length;i++){
		$.ajax({
			url: 'https://www.rijksmuseum.nl/api/nl/collection/'+works[i]+'?key=UvDVOscb&format=json',
			success: appendPics
		})
	}
}

function appendPics(data){
	var newData = data.artObject.webImage.url
	$('#list').append('<img src="'+ newData+'"width="800"><br>')
}