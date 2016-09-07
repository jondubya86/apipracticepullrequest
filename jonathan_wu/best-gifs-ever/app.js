console.log('hello from app.js')

$('body').click(function() {
    console.log('jquery is working')
})

function appendRandom(link) {
    $('.gif').empty()
    var theLink = link.data.image_url
    $('.gif').append("<img src='" + theLink + "'border='3px' border-color='black'>")

}

$('#btn1').on('click', function(event) {
    event.preventDefault();
    $.ajax({
        url: "http://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC",
        success: appendRandom
    })
})


function appendTrend(link) {
    $('.gif').empty()
        // var theLink = link.data.image_url
    for (var i = 0; i < 10; i++) {
        $('.gif').append("<center><img src='https://media.giphy.com/media/" + link.data[i].id + "/giphy.gif' border='3px' border-color='black'></center><br>")
    }
}

$('#btn2').on('click', function(event) {
    event.preventDefault();
    $.ajax({
        url: "http://api.giphy.com/v1/gifs/trending?api_key=dc6zaTOxFJmzC",
        success: appendTrend
    })
})

$('#search').on('submit', getSearch)
function getSearch(event) {
    event.preventDefault();
        $('.gif').empty()
    var input = $(this).serializeArray()[0].value
    var searchData = input.split(" ").join("+")
$.ajax({ url: "http://api.giphy.com/v1/gifs/search?q=" +searchData+ "&api_key=dc6zaTOxFJmzC" ,
    success: display})
}
function display (giphy){
    var gif = '"'+giphy.data[0].images.original.url+'"'
    console.log(gif)
    $('.gif').append('<center><img src='+gif+"border='3px' border-color='black'> <br></center>")}

