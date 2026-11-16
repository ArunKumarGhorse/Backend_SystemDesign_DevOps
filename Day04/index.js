const http = require('http');
const url = require('url');
const database = [
    {name:"Arun",age:20,email:"arun@gmail.com"},
    {name:"Vijay",age:20,email:"vijay@gmail.com"},
    {name:"Bhavesh",age:20,email:"Bhavesh@gmail.com"}
]
function createUser(user){
    database.push(user.query);
}

function updateUser(user){
    for(let i=0;i<database.length;i++){
        if(database[i].email == user.query.email){
            database[i].age = 100;
        }
    }
}

function deleteUser(usermail){
   for(let i=0;i<database.length;i++){
        if(database[i].email == usermail){
            database.splice(i,1);
        }
    }
}



const server = http.createServer((request,response)=>{
    const parsed = url.parse(request.url,true);
    const operation = parsed.pathname.slice(1);
    const name = parsed.query.name;
    const email = parsed.query.email;

    if(operation == "creatUser"){
        createUser(parsed);
        response.end("User Created");
    }else if(operation=="updateUser"){
        updateUser(parsed);
        response.end("User Updated");
    }else if(operation=="deleteUser"){
        deleteUser(email);
        response.end("User Deleted");
    }else if(operation=="getUsers"){
        response.end(JSON.stringify(database));
    }

    // console.log(request.url);
    // /creatUser?name=Arun&age=20&email=arun@gmail.com
    // response.end("Server is working");
})

server.listen(3000,()=>{
    console.log("Server is listening at port 3000");
})