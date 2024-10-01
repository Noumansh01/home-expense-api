import express from "express";
const app = express();
const port = process.env.PORT || 4000;
import Router from "./src/routes/auth/userRoute.js";

app.use("/api/user",Router );


app.get("/", (req , res)=>{
    res.send("hello world");
});

app.listen(port,()=>{
    console.log(`Running on port ${port}`);
});