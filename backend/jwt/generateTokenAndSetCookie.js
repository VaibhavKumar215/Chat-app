import jwt from 'jsonwebtoken'

const generateTokenAndSetCookie = (userId,res)=>{
    const token = jwt.sign({userId},process.env.JWT_SECRET_KEY,
        {
            expiresIn: '15d'
        }
    )

    res.cookie("JWTtoken",token,{
        maxAge: 15*24*60*60*1000,
        httpOnly: true,
        sameSite: "strict",
        secure: process.env.SECURE !== 'development'
    });
}

export default generateTokenAndSetCookie