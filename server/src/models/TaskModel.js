const mongoose = require("mongoose");
const User = require("./UserModel");

const taskSchema = new mongoose.Schema({
    title:{
        type: String,
        required: true
    },
    description:{
        type: String,
        required: true
    },
    status:{
        type: String,
        enum: ['pending', 'in-progress', 'completed'],
        default: "pending",
        required: true
    },
    priority:{
        type: String,
        enum: ['low', 'medium', 'high'],
        default: "medium",
        required: true
    },
    createdBy:{
        type: mongoose.Schema.Types.ObjectId,
        ref: User,
        required: true
    }
},{timestamps:true});

module.exports = mongoose.model("tasks", taskSchema);