const jwt = require("jsonwebtoken");

const authMiddleware = (req, res) =>{
    const token = req.headers.authorization?.split(" ")[1];

    if(!token) return res.status(401).json({message: "No token provided"});

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded.id; //Store user ID
        next();
    } catch (error) {
        res.status(401).json({message: "Invalid Token"});
    }
};

module.exports = authMiddleware;