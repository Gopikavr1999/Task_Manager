require("dotenv").config();
const connectDB = require("./src/config/db.js")
const express = require("express");

//Routes
const userRoutes = require("./src/routes/userRoutes.js")
const taskRoutes = require("./src/routes/taskRoutes.js");
const { auth } = require("./src/middleware/auth.js");

const app = express();

app.use(express.json());

//User Routes
app.use("/api/user", userRoutes);
app.use("/api/task", taskRoutes);

app.get("/check-token", auth, (req, res) => {
    res.json({ user: req.user });
});


//Test route
app.get("/", (req, res) => {
    res.send("API ready");
});


//Connect to MongoDB
connectDB();

//Start Server
const PORT = process.env.PORT || 5000; 
app.listen(PORT, () =>{
    console.log(`Server runnning on port ${PORT}`)
})