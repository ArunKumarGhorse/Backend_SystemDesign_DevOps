import express from "express"

const app = express(); // server 
const database = [{ name: "Arun", age: 20, email: "arun@gmail.com", salary: 150000 },
{ name: "vijay", age: 21, email: "vijay@gmail.com", salary: 120000 }
]

app.use(express.json()); // to parse data in js obj form

app.get("/users",(req,res)=>{
    res.send(database);
})

app.post("/users",(req,res)=>{
    database.push(req.body);
    res.send("user added successfully");
})

app.put("/users",(req,res)=>{
    let fetchUser = null;
    for(let i=0;i<database.length;i++){
        if(database[i].email==req.body.email){
            fetchUser = database[i];
        }
    }

    if(fetchUser==null){
        res.send("User not found :)");
        return;
    }
    for(const [key,values] of Object.entries(req.body)){
        fetchUser[key]=values;
    }
    res.send("user update successfully");
})

app.listen(3000,()=>{
    console.log("Server is listening at port 3000");
})