var http = require('http')
var fs = require('fs')

var server = http.createServer(function(request, response) {
    var url = request.url

    if (url === '/') {
        fs.readFile('index.html', function(err, data) {
            response.write(data)
            response.end()
        })
    } else if (url === '/page-2') {
        fs.readFile('page-2.html', function(err, data) {
            response.write(data)
            response.end()
        })
    } else if (url === '/page-3') {
        fs.readFile('page-3.html', function(err, data) {
            response.write(data)
            response.end()
        })
    } else if (url === '/page-4') {
        fs.readFile('page-4.html', function(err, data) {
            response.write(data)
            response.end()
        })
    } else if (url === '/page-5') {
        fs.readFile('page-5.html', function(err, data) {
            response.write(data)
            response.end()
        })
    } else if (url === '/page-6') {
        fs.readFile('page-6.html', function(err, data) {
            response.write(data)
            response.end()
        })
    } else if (url === '/main.css') {
        fs.readFile('main.css', function(err, data) {
            response.write(data)
            response.end()
        })
    } else if (url === '/app.js') {
        fs.readFile('app.js', function(err, data) {
            response.write(data)
            response.end()
        })
    } else if (url === '/dog-face-car.jpg') {
        fs.readFile('dog-face-car.jpg', function(err, data) {
            response.write(data)
            response.end()
        })

    } else if (url === '/snoop.gif') {
        fs.readFile('snoop.gif', function(err, data) {
            response.write(data)
            response.end()
        })
    } else if (url === '/hotdogloop.gif') {
        fs.readFile('hotdogloop.gif', function(err, data) {
            response.write(data)
            response.end()
        })
    } else if (url === '/naynay.gif') {
        fs.readFile('naynay.gif', function(err, data) {
            response.write(data)
            response.end()
        })
    } else if (url === '/rotcream.gif') {
        fs.readFile('rotcream.gif', function(err, data) {
            response.write(data)
            response.end()
        })
    } else if (url === '/dogtheftauto.gif') {
        fs.readFile('dogtheftauto.gif', function(err, data) {
            response.write(data)
            response.end()
        })
    } else if (url === '/skateboard-smooth.gif') {
        fs.readFile('skateboard-smooth.gif', function(err, data) {
            response.write(data)
            response.end()
        })
    } else if (url === '/smoothhat.gif') {
        fs.readFile('smoothhat.gif', function(err, data) {
            response.write(data)
            response.end()
        })
    } else if (url === '/pancake.gif') {
        fs.readFile('pancake.gif', function(err, data) {
            response.write(data)
            response.end()
        })
    } else if (url === '/puppy.gif') {
        fs.readFile('puppy.gif', function(err, data) {
            response.write(data)
            response.end()
        })
    } else {
        response.write('<h1>404</h1>')
        response.end()
    }
})

server.listen(9001)
