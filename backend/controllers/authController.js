import generateTokenAndSetCookie from '../jwt/generateTokenAndSetCookie.js'
import User from '../models/userModel.js'
import bcrypt from 'bcryptjs'

export const signup = async(req,res)=>{
    try {
        const {fullName,email,password,confirmPassword,gender} = req.body

        if(password !== confirmPassword){
            return res.status(400).json({error:"Password don't match"})
        }

        const user =await User.findOne({email})
        if(user){
            return res.status(400).json({error:"Username already exists"})
        }

        //Hashing password 
        const salt = await bcrypt.genSalt(10)
        const hashPassword = await bcrypt.hash(password,salt)

        const name = fullName.replace(" ","")
        
        const boysProfilePic = `https://avatar.iran.liara.run/public/boy?username=${name}`
        const girlProfilePic = `https://avatar.iran.liara.run/public/girl?username=${name}`

        const newUser = new User({
            fullName,
            email,
            password: hashPassword,
            gender,
            profilePic: gender === 'Male' ? boysProfilePic : girlProfilePic
        })

        if(newUser){
            await newUser.save();

            //Generate JWT token
            generateTokenAndSetCookie(newUser._id,res)

            res.status(201).json({
                _id: newUser._id,
                fullName: newUser.fullName,
                email: newUser.email,
                profilePic: newUser.profilePic
            })
        }
        else{
            res.status(400).json({error:"Invalid user data"})
        }
        
    } catch (error) {
        console.log("Error in signup controller", error.message);
        res.status(500).json({error: "Internal Server Error"})
    }
}

export const login = async(req,res)=>{
    try {
        const{email,password} = req.body;
        const user = await User.findOne({email})
        
        const isPassword = await bcrypt.compare(password,user?.password||"")

        if(!user || !isPassword){
            return res.status(400).json({error:"Invalid credentials"})
        }

        generateTokenAndSetCookie(user._id,res)

            res.status(201).json({
                _id: user._id,
                fullName: user.fullName,
                email: user.email,
                profilePic: user.profilePic,
                message:"Login successfull"
            })
       
    } catch (error) {
        console.log("Error in login controller: ", error.message);
        res.status(500).json({error: "Internal Server Error"})
    }
}

export const logout = (req,res)=>{
   try {
    res.cookie("JWTtoken","",{maxAge: 0})
    res.status(200).json({message:"Logged out successfully"})
   } catch (error) {
    console.log("Error in logout controller: ", error.message);
    res.status(500).json({error: "Internal Server Error"})
}
}