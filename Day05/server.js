import http from "http"
import { join } from "path";
const database = [{ name: "Arun", age: 20, email: "arun@gmail.com", salary: 150000 },
{ name: "vijay", age: 21, email: "vijay@gmail.com", salary: 120000 }
]
const server = http.createServer((request, response) => {
    // GET
    if (request.method == "GET" && request.url == "/users") {
        response.end(JSON.stringify(database, null, 2));
    }
    // POST
    else if (request.method == "POST" && request.url == "/users") {
        let body = '';
        request.on('data', (chunks) => {
            body += chunks;
        })
        request.on('end', () => {
            const user = JSON.parse(body);
            database.push(user);
            response.end("User created successfully");
        })
    }
    // PATCH
    else if (request.method == "PATCH" && request.url == "/users") {
        let body = '';
        request.on('data', (chunks) => {
            body += chunks;
        })
        request.on('end', () => {
            const user = JSON.parse(body);
            let fetchUser = null;
            for (let i = 0; i < database.length; i++) {
                if (database[i].email == user.email) {
                    fetchUser = database[i];
                    break;
                }
            }
            if(fetchUser==null){
                response.end("User not found");
                return;
            }
            for(const [key,values] of Object.entries(user)){
                fetchUser[key]=values;
            }
            response.end("User Info Updated successfully");
        })
    }
})
server.listen(3000, () => {
    console.log("Server is listening at port 3000")
})