var http = require('http');
var fs = require('fs');


//404 error
function send404Response(response) {
    response.writeHead(404, { "Context-Type": "text/plain" });
    response.write("Webpage Not Found");
    response.end();
}

//handle user request
function onRequest(request, response) {
    if (request.method == "GET" && request.url == "/") {
        response.writeHead(200, { "Context-Type": "text/html" })
        fs.createReadStream("./index.html").pipe(response);
    } else {
        send404Response(response);
    }
}

http.createServer(onRequest).listen(8888);