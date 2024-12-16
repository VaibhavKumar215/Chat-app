import { useEffect, useState } from "react"
import {toast} from 'react-toastify'

const userConversations = ()=>{

    const [loading, setLoading] = useState(false)
    const [conversations, setConversations] = useState([])

    useEffect(() => {
        const getConversations = async() => {
            setLoading(true)
            try {
                const res = await fetch('/api/users')
                const data = await res.json()
                if(!res.ok){
                    throw new Error(data.error || "Failed to fetch conversations")
                }

                setConversations(data)
            } catch (error) {
                toast.error(error.message)
            }finally{
                setLoading(false)
            }
        }

        getConversations()
    }, [])

    return {loading,conversations}
}

export default userConversations