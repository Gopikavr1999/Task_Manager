const jwt = require("jsonwebtoken");
const User = require("../models/UserModel");

exports.auth = async (req, res, next) =>{
    const token = req.headers.authorization?.split(" ")[1];

    if(!token) return res.status(401).json({message: "No token provided"});

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        //Fetch full userr details
        const user = await User.findById(decoded.id).select("-password");
        if(!user){
            return res.status(401).json({message: "User not found"});
        };
        // Store full user details
        req.user = user;
        console.log("decoded", decoded);        
        next();
    } catch (error) {
        res.status(401).json({message: "Invalid Token"});
    }
};

