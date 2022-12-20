const mongoose=require('mongoose')


const Data=mongoose.Schema({
   email:
   {type:String,
    unique:true},
   password:{type:String,
    unique:true},
})

const Mydata=mongoose.model('DATA',Data);
module.exports=Mydata;