import { useState } from "react"
import { toast } from "react-toastify"
import { useAuthContext } from "../Context/authContext"


const userLogout = ()=>{
    const [loading, setLoading] = useState(false)
    const {setAuthUser} = useAuthContext()

    const logout = async()=>{
        setLoading(true)
        try {
            const res = await fetch('/api/auth/logout',{
                method: "POST",
                headers: {"Content-Type": "application/json"},
            })

            const data = res.json()
            if(!res.ok){
                toast.error(data.error)
                return
            }
            toast.success("Logged out Successfully")
            localStorage.removeItem("chat-user")
            setAuthUser(null)
        } catch (error) {
            toast.error(error.message || "Something went wrong");
        }finally{
            setLoading(false)
        }
    }

    return {loading, logout}
} 

export default userLogout