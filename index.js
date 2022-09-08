const express = require("express");
const{ dbConnect }= require("./config/dbConnect");
const userRouter = require("./routes/users.route");

const app = express();

app.get("/",(req,res)=>{
    res.status(4000).send("Welcom to my server")
})
app.use("/users",userRouter);

async function start(){
await dbConnect();

app.listen(4000,(err)=>{
    console.log("App is working on http://localhost:4000")
})
}

start();