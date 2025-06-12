

require("dotenv").config();
const express = require("express");
const app = express();

app.use(express.json());
const bookRouter = require("../routes/bookRoutes"); 
app.use("/books", bookRouter);


app.listen(process.env.APP_PORT, ()=>{
    console.log("Server is running on PORT :", process.env.APP_PORT);
});