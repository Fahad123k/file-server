const mongoose=require('mongoose');

const useSchema= new mongoose.Schema({
    name:{
        type:String,
        required:true,
        trim:true,
    },
    datebirth:{
        type:String,
    },
    photo:{
        type:String,
       
    }
})

const UserModel=mongoose.model("User",useSchema);

module.exports =UserModel;