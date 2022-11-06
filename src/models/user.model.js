const mongoose=require("mongoose");
const Schema=mongoose.Schema


const User= new Schema({
    nome:String,
    numeroDeProcesso:Number,
    senha:String,
    email:String
},
{
    timestamps:true
}
)

module.exports=mongoose.model("User",User);