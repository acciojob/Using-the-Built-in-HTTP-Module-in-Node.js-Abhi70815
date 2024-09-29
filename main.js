const http = require('http');
const fs= require('fs');

const server = http.createServer((req,res)=>{
    // Get the file path from the command line arguments
console.log("request receoved");
    const filepath = process.argv[2];
    fs.readFile(filepath, (err,data)=>{

        if(err){
            res.writeHead(500, {'Content-Type': 'text/plain'});
            res.end('Error reading file');
        }
        else{
            res.writeHead(200, {'Content-Type' : 'text/plain'});
            res.end(data);
        }
    })
       
});

server.listen(3000, 'localhost', ()=>{
    console.log("server is runing");
})