import Conversation from '../models/conversationModel.js'
import Message from '../models/messageModel.js'
import { getReceiverSocketId, io } from '../socket/socket.js';

export const sendMessage = async(req,res)=>{
    try {
        const {message} = req.body;
        const {id: receiverId} = req.params;
        const senderId = req.user._id

        let conversation = await Conversation.findOne({
            participants: {$all: [senderId,receiverId]}
        })

        if(!conversation){
            conversation = await Conversation.create({
                participants:[senderId,receiverId],
            })
        }

        const newMessage = new Message({
            senderId,
            receiverId,
            message
        })


        if(newMessage){
            conversation.message.push(newMessage._id)
        }

        await Promise.all([conversation.save(),newMessage.save()]);
        
        //Scoket io fuctionality
        const receiverSocketId = getReceiverSocketId(receiverId);
        if(receiverSocketId){
            io.to(receiverSocketId).emit("newMessage",newMessage)
        }

        res.status(201).json(newMessage)
    } catch (error) {
        console.log("Error in sendingMessage Controller: ",error.message);
        res.status(500).json({error:"Internal server error"})
    }   
}

export const getMessage = async(req,res)=>{
    try {
        const {id:userToChatId}= req.params;
        const sendId = req.user._id;

        const conversation = await Conversation.findOne({
            participants: {$all:[sendId,userToChatId]}
        }).populate("message")

        if (!conversation) {
            return res.status(200).json([]);
        }

        res.status(200).json(conversation.message)
    } catch (error) {
        console.log("Error in getmessage Controller: ",error.message);
        res.status(500).json({error:"Internal server error"})
    }
}