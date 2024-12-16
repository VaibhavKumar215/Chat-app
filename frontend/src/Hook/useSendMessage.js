import { useState } from "react"
import { useConversation } from "../Context/conversationContext"
import { toast } from "react-toastify"

const useSendMessage = ()=>{

    const [loading , setLoading] = useState(false)
    const {messages,setMessages,selectedConversation} = useConversation()
    
    const sendMessage = async (message) =>{
        if (!message.trim()) {
            toast.error("Message cannot be empty");
            return;
        }
        setLoading(true)
        try {
            const res = await fetch(`/api/messages/send/${selectedConversation._id}`,{
                method:"POST",
                headers:{"Content-Type":"application/json"},
                body: JSON.stringify({message})
            })

            const data = await res.json()
            if(!res.ok){
                throw new Error(data.error || "Error in sending the message")
            }

            setMessages([...messages, data]);
        } catch (error) {
            toast.error(error.message)
        }finally{
            setLoading(false)
        }
    }

    return {loading, sendMessage}
}
 
export default useSendMessage