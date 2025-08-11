const express=require('express');

const ServerConfig=require('./config/serverConfig');
const connectDB = require('./config/dbConfig');

const app=express();


app.listen(ServerConfig.PORT,async()=>{
    await connectDB();
    console.log(`server started at port ${ServerConfig.PORT}`);
    //console.log(process.env.PORT)
})


// 34.5.12.5:3000-> socket address(ip+port)
//127.0.0.1-> localhost ka ip address