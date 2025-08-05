const express=require('express');

const ServerConfig=require('./config/serverConfig')

const app=express();


app.listen(ServerConfig.PORT,(req,res)=>{
    console.log(`server started at port ${ServerConfig.PORT}`);
    //console.log(process.env.PORT)
})


// 34.5.12.5:3000-> socket address(ip+port)
//127.0.0.1-> localhost ka ip address