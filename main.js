const http = require('http');
const fs= require('fs');
// TODO: Create an HTTP server
const server= http.createServer((req,res)=>{
    const filepath = process.argv[2]
    res.writeHead(200, {'Content-Type' : "text/plain"});
    res.end("Hello, World! \n");
});

// TODO: Listen on port 3000
const PORT = 3000;
server.listen(PORT,()=>{
    console.log(`Server is liistening on port ${PORT}`);
});
// DO NOT EDIT BELOW THIS LINE (Uncomment it once you are done with your code)

