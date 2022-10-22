const express=require("express");

const app=express();

const porta=process.env.PORTA || 3000;

app.get("https://uni-social.onrender.com/",(req,res)=>{
    res.json({error:false,message:"Hello World!"});
    res.send({error:false,message:"Hello World!"});
});

app.listen(porta,()=>{
    console.log({status:true,message:"server running.."})
});