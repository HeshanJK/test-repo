const express = require('express');
const mongoose = require('mongoose');
const bodyparser = require("body-parser");
const cors = require("cors");
const app = express();
const PORT =process.env.PORT || 8000; 

const dotenv = require("dotenv");
require('dotenv/config')

const productRouter = require("./routes/productRouter")
const userRouter =require('./routes/userRouter')
const orderRouter = require('./routes/orderRouter')
const orderItemRouter = require('./routes/orderItemRouter')

app.use(cors());
app.use(bodyparser.json());
app.use(express.json())

//api
app.use("/api/product",productRouter) 
app.use("/api/user",userRouter) 
app.use("/api/order",orderRouter) 
app.use("/api/order/item",orderItemRouter) 

const URL = process.env.DB_URL

mongoose.connect(URL,{
    useUnifiedTopology: true,
    useNewUrlParser: true,
    // useCreateIndex: true,
    // useFindAndModify: false,
  })
.then(()=>{
    console.log('DB connected');
})
.catch((err) => console.log('DB connection error',err));

app.listen(PORT, () =>{
    console.log(`App is running on ${PORT}`);
});