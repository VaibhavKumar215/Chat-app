import { useState } from "react"
import { data } from "react-router-dom"
import { toast } from "react-toastify"
import { useAuthContext } from "../Context/authContext"

const userLogin = ()=>{

    const {setAuthUser} = useAuthContext()
    const [loading,setLoading] = useState(false)

    function handleInputErrors({email, password }) {
        if (!email || !password ) {
            toast.error("Please fill in all fields");
            return false;
        }

        return true;
    }

    const login = async({email,password})=>{

        setLoading(true)

        const success = handleInputErrors({ email, password });
        if (!success) return;
        
        try {
            const res = await fetch("/api/auth/login",{
                method: "POST",
                headers: {"Content-Type":"application/json"},
                body: JSON.stringify({email,password})
            })

            const data = await res.json()
            if(!res.ok){
               throw new Error(data.error)
            }

            localStorage.setItem("chat-user",JSON.stringify(data))
            setAuthUser(data)
            toast.success("Login Successful")

        } catch (error) {
            toast.error(error.message || "an unexpected error has occurred")
        }finally{
            setLoading(false)
        }
    }

    return {loading,login}
}

export default userLogin