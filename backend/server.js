import express from 'express'
import dotenv from 'dotenv'
import cookieParser from 'cookie-parser';

import authRouter from './routes/authRouter.js';
import messageRouter from './routes/messageRoutes.js'
import userRouter from './routes/userRoutes.js';

import {connectDB} from './database/db.js'
import { app,server } from './socket/socket.js';

dotenv.config()
const PORT = process.env.PORT || 3001

app.use(express.json()) //to parse the incomming request with JSON payloads(from req.body)
app.use(cookieParser())
// app.get("/",(req,res)=>{
//     res.send("Hello")
// })

app.use('/api/auth',authRouter)
app.use('/api/messages',messageRouter)
app.use('/api/users',userRouter)

server.listen(PORT,()=>{
    connectDB();
    console.log(`http://localhost:${PORT}`)})