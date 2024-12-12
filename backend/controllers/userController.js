import User from "../models/userModel.js";

const getUsers = async(req,res)=>{
    try {
        // const loggedInUserId = req.user._id;

        // const filteredUser = await User.find({_id: {$ne: loggedInUserId}})
        const allUser = await User.find()

        res.status(200).json({allUser})

    } catch (error) {
        console.log("Error in getUser: ", error.message);
        res.this.status(500).json({error:"Internal server error"})
    }
}

export default getUsers