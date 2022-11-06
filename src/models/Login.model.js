const mongoose=require("mongoose");
const Schema=mongoose.Schema;

const Login=new Schema({
    numeroDeProcesso:Number,
    senha:String
}
)

module.exports=mongoose.model("Login",Login)