import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    fullName: {
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        reqiured:true,
        minlength:6
    },
    gender:{
        type:String,
        required:true,
        value:["male","female"]
    },
    profilePic:{
        type:String,
        default:""
    }
    //createdAt and updatedAt
},{timestamps: true})

const User = mongoose.model("User",userSchema)

export default User;