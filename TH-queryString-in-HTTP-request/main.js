const http = require('http');

const url = require('url');

const StringDecoder = require('string_decoder').StringDecoder;

let server=http.createServer((req,res)=>{
    let parseUrl = url.parse(req.url, true);
    let queryStringObject = parseUrl.query; 
    
    res.end('Hello');
    console.log(queryStringObject);
});
server.listen(8080,()=>{
    console.log('localhost 8080');
})
