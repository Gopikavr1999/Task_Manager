const User = require("../models/UserModel");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

//SignUp
exports.signup = async (req, res) => {
    try {
        const { name, email, password } = req.body;

        //check existing email
        const exist = await User.findOne({ email });
        if (exist) return res.status(400).json({ message: "Email already exists" });

        const hashed = await bcrypt.hash(password, 10);

        const newUser = await User.create({
            name,
            email,
            password: hashed
        })

        return res.status(201).json({ message: "User created", user: newUser })
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

exports.login = async (req, res) => {
    try {
        const {email,password} = req.body;
        const user = await User.findOne({email:email});
        if(!user) return res.status(400).json({message:"Invalid Email"});

        const decode = await bcrypt.compare(password, user.password);
        if(!decode) return res.status(401).json({message:"Incorrect Password"})
        
        const token = jwt.sign({id: user._id},process.env.JWT_SECRET,{expiresIn:'7d'})
        res.json({token});
    } catch (error) {
        res.status(500).json({message:error.message})
    }
}