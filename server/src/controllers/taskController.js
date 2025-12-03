const Task = require("../models/TaskModel")

//Create Task
exports.createTasks = async (req, res) => {
    try {
        console.log("create task....");

        const task = Task.create({
            ...req.body,
            createdBy: req.user.id
        });

        res.status(201).json({ success: true, task })
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

// Get Tasks - Filtering + Pagination + Sorting
exports.getTasks = async (req, res) => {
    try {
        let { status, priority, page = 1, limit = 10, sortBy, order } = req.query;

        page = Number(page);
        limit = Number(limit);
        order = order === "desc" ? -1 : 1;

        const filter = { createdBy: req.user.id };

        if (status) filter.status = status;
        if (priority) filter.priority = priority;

        const sortOptions = {};
        if (sortBy) sortOptions[sortBy] = order;

        const tasks = await Task.find(filter).sort(sortOptions).skip((page - 1) * limit).limit(limit);
        console.log("tasks",tasks);
        
        const total = await Task.countDocuments(filter);

        res.json({ success: true, page, totalPages: Math.ceil(total / limit), totalTasks: total, tasks });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

// Update Task
exports.updateTasks = async (req, res) => {
    try {
        const task = await Task.findOneAndUpdate(
            { _id: req.params.id, createdBy: req.user.id },
            req.body,
            { new: true }
        )

        if (!task) return res.status(404).json({ message: "Task not found" });
        res.json({ success: true, task });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

// Delete Task
exports.deleteTask = async (req, res) => {
    try {
        const task = await Task.findOneAndDelete(
            { _id: req.params.id, createdBy: req.user.id },
            req.body
        )

        if (!task) return res.status(404).json({ message: "Task not found" });
        res.json({ success: true, message: "Task deleted" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}