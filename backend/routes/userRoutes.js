import express from 'express'
import protectRoute from '../middleware/protectRoute.js';
import getUsers from '../controllers/userController.js'

const userRouter = express.Router();

userRouter.get("/",protectRoute,getUsers)

export default userRouter
