const express = require("express");
const {signup, login} = require("../controllers/userController");
const router = express.Router();

router.post("/signup", signup); 
router.post("/login", login); 

router.get("/test", (req, res) => {
    res.send("User route working");
});

module.exports = router