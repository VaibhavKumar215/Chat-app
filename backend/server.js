import express from 'express'
import dotenv from 'dotenv'
import cookieParser from 'cookie-parser';
import path, { join } from 'path'

import authRouter from './routes/authRouter.js';
import messageRouter from './routes/messageRoutes.js'
import userRouter from './routes/userRoutes.js';

import {connectDB} from './database/db.js'
import { app,server } from './socket/socket.js';



dotenv.config()
const PORT = process.env.PORT || 3001

const __dirname = path.resolve() 

app.use(express.json()) //to parse the incomming request with JSON payloads(from req.body)
app.use(cookieParser())

// app.get("/",(req,res)=>{
//     res.send("Hello")
// })

app.use('/api/auth',authRouter)
app.use('/api/messages',messageRouter)
app.use('/api/users',userRouter)


// Static is a middleware function provided by the express library that serves static files, such as HTML, CSS, JavaScript, and images, from a specified directory.
app.use(express.static(path.join(__dirname,"/frontend/dist")))

app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "frontend", "dist", "index.html"));
});

server.listen(PORT,()=>{
    connectDB();
    console.log(`http://localhost:${PORT}`)})