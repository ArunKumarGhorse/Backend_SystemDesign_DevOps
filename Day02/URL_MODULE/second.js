const http = require('http');
const url = require('url');
const server = http.createServer((req,res)=>{
    const str = req.url;
    //localhost:3000/add/4/5
    const path = req.url.split('/');
    // path = ["",add,4,5]
    const operation = path[1];
    const num1 = Number(path[2]);
    const num2 = Number(path[3]);

    if(operation=="add"){
        res.end(JSON.stringify(num1+num2));
    }else if(operation=="sub"){
        res.end(JSON.stringify(num1-num2));
    }else if(operation=="div"){
        res.end(JSON.stringify(num1/num2));
    }else if(operation=="mul"){
        res.end(JSON.stringify(num1*num2));
    }else{
        res.end("Invalid URL");
    }

})

server.listen(3000,()=>{
    console.log("Server is listening on PORT: 3000");
})