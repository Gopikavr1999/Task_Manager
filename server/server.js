require("dotenv").config();
const connectDB = require("./src/config/db.js")
const userRoutes = require("./src/routes/userRoutes.js")
const express = require("express");
const app = express();

app.use(express.json());

app.use("/api/user", userRoutes)
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