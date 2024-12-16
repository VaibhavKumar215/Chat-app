import { useEffect, useState } from "react"
import { useConversation } from "../Context/conversationContext"
import { toast } from "react-toastify"

const useGetMessages = ()=>{

    const [loading, setLoading] = useState(false)
    const { selectedConversation, messages, setMessages} = useConversation()
    
    useEffect(() => {
        const getMessages = async()=>{  
            setLoading(true)
            try {
                const res = await fetch(`/api/messages/${selectedConversation._id}?limit=5`)
                const data = await res.json()
                if(!res.ok){
                    throw new Error(data.error || "Error in fetching the messages")
                }

                setMessages(data)
            } catch (error) {
                toast.error(error.message)
            }finally{
                setLoading(false)
            }
        }

        if(selectedConversation?._id)
            getMessages()      
    }, [selectedConversation?._id])
    
    return {loading, messages}
}

export default useGetMessages