const mongoose = require("mongoose");

const todoSchema = new mongoose.Schema(
  {
    title: {
      type: String,
    },
    description: {
      type: String,
    }
  },
  {
    timestamps: true,
  }
);
const Todo = mongoose.model.todos || mongoose.model("todo", todoSchema);

module.exports = Todo;
