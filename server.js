const express = require('express');
const mongoose = require('mongoose');
const router = require("./routes/productTable")
const app = express();

const PORT = 8000;
const DB_URL ='mongodb+srv://shihara:1234@cluster0.mqq6o.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';

app.use(express.json())
app.use("/api",router)

mongoose.connect(DB_URL)
.then(()=>{
    console.log('DB connected');
})
.catch((err) => console.log('DB connection error',err));

app.listen(PORT, () =>{
    console.log(`App is running on ${PORT}`);
});