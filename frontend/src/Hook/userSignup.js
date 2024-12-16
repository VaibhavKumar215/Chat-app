import { useState } from "react";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useAuthContext } from "../Context/authContext";

const userSignup = () => {
    const [loading, setLoading] = useState(false);
    const {setAuthUser} = useAuthContext()

    function handleInputErrors({ fullName, email, password, confirmPassword, gender }) {
        if (!fullName || !email || !password || !confirmPassword || !gender) {
            toast.error("Please fill in all fields");
            return false;
        }

        if (password !== confirmPassword) {
            toast.error("Passwords do not match");
            return false;
        }

        if (password.length < 6) {
            toast.error("Password must have at least 6 characters");
            return false;
        }

        // const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        // if (!emailRegex.test(email)) {
        //     toast.error("Please enter a valid email address");
        //     return false;
        // }

        return true;
    }

    const signup = async ({ fullName, email, password, confirmPassword, gender }) => {
        // if (loading) {
        //     toast.info("Please wait, signup in progress");
        //     return;
        // }

        setLoading(true);
        
        const success = handleInputErrors({ fullName, email, password, confirmPassword, gender });
        if (!success) return;

       
        try {
            const res = await fetch("/api/auth/signup", {
                method: 'POST',
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ fullName, email, password, confirmPassword, gender }),
            });

            // if (!res.ok) {
            //     const errorData = await res.json();
            //     toast.error(errorData.error || "Signup failed");
            //     return;
            // }

            const data = await res.json();
            if(!res.ok){
                throw new Error(data.error);
            }
            toast.success("Signup successful!");
            localStorage.setItem("chat-user",JSON.stringify(data))

            setAuthUser(data)

        } catch (error) {
            toast.error(error.message || "An unexpected error occurred");
        } finally {
            setLoading(false);
        }
    };

    return { loading, signup };
};

export default userSignup;