const http = require('http');
const url = require('url');

const server = http.createServer((request,response)=>{
    /* 
    url =>> /add?num1=10&num2=20
    ?parsed{
            pathname:"/add",
            query:{
                num1:10,
                num2:20
            }
        }
    */
    const parsed = url.parse(request.url,true);
    const operation = parsed.pathname.slice(1);
    const number1 = Number(parsed.query.num1);
    const number2 = Number(parsed.query.num2);

    if(operation=="add"){
        response.end(JSON.stringify(number1 +number2));
    }else if(operation=="sub"){
        response.end(JSON.stringify(number1 -number2));
    }else if(operation=="div"){
        response.end(JSON.stringify(number1 /number2));
    }else if(operation=="mul"){
        response.end(JSON.stringify(number1 *number2));
    }else{
        response.end("Invalid URL");
    }

})

server.listen(3000,()=>{
    console.log("Server is listening at PORT: 3000");
})