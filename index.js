import express from "express";
const app = express();
import 'dotenv/config';
import userRouter from "./src/routes/auth/userRoute.js";
import itemRouter from "./src/routes/items/itemsRoute.js";
import shoppingRouter from "./src/routes/shoppingList/shoppingListRoute.js";
import {connect_db} from "./src/db/connection.js";



const port = process.env.PORT || 4000;

// middleware to parse JSON bodies
app.use(express.json());

// middleware to parse URL-encoded bodies (e.g., from forms)
app.use(express.urlencoded({ extended: true }));

// middleware to parse route to routes folder 
app.use("/api/user",userRouter );
app.use("/api/item",itemRouter );
app.use("/api/shopping",shoppingRouter );


app.get("/", (req , res)=>{
    res.send("hello world");
});
// mongodb connection function calling 
connect_db();

app.listen(port,()=>{
    console.log(`Running on port ${port}`);
});