const { log } = require('console');
const http = require('http')

const server = http.createServer((request, response) => {
    console.log('Petición del cliente recibida');
    console.log('ReqURL: ' + request.url);
    console.log('ReqMethod: ' + request.method);
    console.log('ReqContent-type: ' + request.headers['content-type']);
    console.log('ReqContent-length: ' + JSON.stringify(request.headers['content-length']));
    console.log('ReqUser-agent: ' + JSON.stringify(request.headers['user-agent']));
    response.writeHead(200, {'content-type':'application/json'});

    let addrRoot = {ok:true, message:'recibido'}
    let addrBye = {ok:true, message:'adios'}
    let message = {};
    if (response.statusCode == 200){
        if(request.url == '/') {
            message = addrRoot;
        }
        else if(request.url == '/bye') {
            message = addrBye;
        };
    };
    response.write(JSON.stringify(message));
    response.end();
});

server.listen(3000);