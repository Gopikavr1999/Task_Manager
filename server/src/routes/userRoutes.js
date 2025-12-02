const express = require("express");
const {signup, login, updateRole} = require("../controllers/userController");
const { adminOnly } = require("../middleware/adminOnly");
const { auth } = require("../middleware/auth");
const router = express.Router();

router.post("/signup", signup); 
router.post("/login", login); 
router.post("/update-role/:id", auth, adminOnly, updateRole); 

router.get("/test", (req, res) => {
    res.send("User route working");
});

module.exports = router