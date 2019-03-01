
var express = require('express');
var path = require("path");
var http = require("http");
var history = require('connect-history-api-fallback');
const app = express();
app.use('/', history()); // 由js控制路由，一定要写在express.static前面！！！
app.use('/', express.static('public'));

// API部分
app.get('/api', (request, response) => {
    console.log(request);
    console.log(request.query);
    if (request.method == "GET") {
        console.log("GET");
        http.get('http://127.0.0.1' + request.url, function (req, res) {
            console.log(res)
            var html = '';
            req.on('data', function (data) {
                console.log(request.url)




                html += data;
            });
            req.on('end', function () {
                console.log(html);
                response.send(html);
            });
        });
    } else if (request.method == "POST") {
        console.log("GET");
    } else if (request.method == "DELETE") {
        console.log("GET");
    } else if (request.method == "PUT") {
        console.log("GET");
    }
})

const server = app.listen(8888, '127.0.0.1', () => {
    var host = server.address().address;
    var port = server.address().port;
    console.log('running at http://' + host + ':' + port)
});