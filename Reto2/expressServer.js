const express = require('express');
const app = express();

app.get('/', (request, response) => {
    console.log('Petición del cliente recibida');
    console.log('ReqURL: ' + request.url);
    console.log('ReqMethod: ' + request.method);
    console.log('ReqUser-agent: ' + JSON.stringify(request.headers['user-agent']));
    let message = {ok:true, message:'Recibido!'};
    if(response.statusCode == 200){
        response.send(JSON.stringify(message));
        response.end();
    };
});

app.get('/bye', (request, response) => {
    console.log('Petición del cliente recibida');
    console.log('ReqURL: ' + request.url);
    console.log('ReqMethod: ' + request.method);
    console.log('ReqUser-agent: ' + JSON.stringify(request.headers['user-agent']));
    let message = {ok:true, message:'Adios!'};
    if(response.statusCode == 200){
        response.send(JSON.stringify(message));
        response.end();
    };
});

app.listen(3000);
