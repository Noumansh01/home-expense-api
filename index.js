const express = require("express");
const app = express();
const port = process.env.PORT || 4000;
const userRoutes = require("./routes/auth/userRoute.js");

app.use("/api/user",userRoutes );


app.get("/", (req , res)=>{
    res.send("hello world");
});

app.listen(port,()=>{
    console.log(`Running on port ${port}`);
});