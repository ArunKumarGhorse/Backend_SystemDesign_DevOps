const http = require("http");

const server = http.createServer((request,response)=>{
    response.end("Hello arun");
})

server.listen(3000,()=>{
    console.log("Server is listening on PORT: 3000");
})