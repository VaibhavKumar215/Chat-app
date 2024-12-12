import mongoose from "mongoose";

export const connectDB = async()=>{
    await mongoose.connect(process.env.MONGO_DB_URI)
    .then(()=>console.log("DB Connected"))
    .catch((error)=>console.log("Failed to Connect DB server",error))

    const db = mongoose.connection;
    db.on("connected",()=>{
        console.log("Database connection successfull")
    })

    db.on("error",()=>{
        console.log("Somoe Error is occured")
    })

    db.on("disconnected",()=>{
        console.log("Database connection is disconnected")
    })
    
}