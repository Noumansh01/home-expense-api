const express = require("express");
const app = express();
const port = process.env.PORT || 4000;
const {Router}= require("./routes/auth/userRoute");

app.use("/api/user",Router );


app.get("/", (req , res)=>{
    res.send("hello world");
});

app.listen(port,()=>{
    console.log(`Running on port ${port}`);
});