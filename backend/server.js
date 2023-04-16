const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");//convert json format to javascript object
const cors = require("cors");
const dotenv = require("dotenv");
const app = express();
require("dotenv").config();



const PORT = process.env.PORT || 8070;
app.use(cors());
app.use(bodyParser.json());//app middleware


const URL=process.env.DB_URL;

mongoose.connect(URL, {
    //useCreateIndex: true,
    //useUnifiedTopology: true,
    //useNewUrlParser: true,
    //useFindAndModify: false,
    //Model.prototype.save()
});
const connection = mongoose.connection;
connection.once("open", ()=>{
    console.log("DB connect");
})


const deliveryRouter = require("./routes/deliveries.js");
//http://localhost:8070/delivery
app.use("/delivery",deliveryRouter); 



app.listen(PORT, ()=>{
    console.log("App is running on "+ PORT);
});


