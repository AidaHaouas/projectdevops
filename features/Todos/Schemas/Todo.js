const mongoose = require("mongoose");

const todoSchema = new mongoose.Schema({
    value: String,
    date: Date,
    state:String,
    user_id: String
});

const todoModel = new mongoose.Model("todos", todoSchema);

module.exports = todoModel;