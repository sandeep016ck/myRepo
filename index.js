
const express = require('express');
const dotenv=require('dotenv');
const path = require('path');
const cors=require('cors')
const dbconnect = require('./Backend/config/Dbconnection');
dotenv.config();
const app=express();
const PORT=process.env.PORT

dbconnect();
app.use(express.json());
app.use(cors());
app.use(express.static(path.join(__dirname ,'frontend')));

app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'frontend','main.html'));
})



app.use('/user',require('./Backend/routes/userRoutes'))
// app.use('/ToDo-App/todo',require('./Backend/routes/todoRoutes'))


app.listen(PORT,(req,res)=>{
    console.log(`server is running at ${PORT}`);
})