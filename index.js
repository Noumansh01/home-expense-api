import express from "express";
const app = express();
import 'dotenv/config';
const port = process.env.PORT || 4000;
import userRouter from "./src/routes/auth/userRoute.js";
import itemRouter from "./src/routes/items/itemsRoute.js";

// middleware to parse JSON bodies
app.use(express.json());

// middleware to parse URL-encoded bodies (e.g., from forms)
app.use(express.urlencoded({ extended: true }));

// middleware to parse route to routes folder 
app.use("/api/user",userRouter );
app.use("/api/item",itemRouter );


app.get("/", (req , res)=>{
    res.send("hello world");
});

app.listen(port,()=>{
    console.log(`Running on port ${port}`);
});