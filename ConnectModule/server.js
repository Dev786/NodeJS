var connect = require('connect');
var http = require('http');
var app = connect();

function doFirst(request, response, next) {
    console.log("First");
    next();
}

function doSecond(request, response, next) {
    console.log("Second");
    next();
}
app.use('/', doFirst);
app.use('/profile', doSecond)
http.createServer(app).listen(8888);
console.log("Server is running");