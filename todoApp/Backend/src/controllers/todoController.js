const Todo = require("../models/todoModel");

//> postTodo

const postTodo = async (req, res) => {
  const { title, description } = req.body;

  try {
    let addTodo = await Todo.create({ title, description, user: req.userId });
  } catch (error) {
    console.log("error:", error.message);
    res.status(400).send({ message: error.message });
  }
};

//> getTodo

const getTodo = async (req, res) => {
  try {
    const todos = await Todo.find({ user: req.userId });
    res.status(201).json({ todos: todos });
  } catch (error) {
    res.status(400).send({ message: error.message });
  }
};

//> updateTodo

const updateTodo = async (req, res) => {
  try {
  } catch (error) {}
};

//> deleteTodo
const deleteTodo = async (req, res) => {
  const todo = await Todo.findById(req.params.id);

  if (todo.user.toString() !== req.userId.toString()) {
    res.status(400).json({ TodoDeleted: "You can't perform this action" });
  }
  try {
    await todo.remove();

    res.status(201).json({ DeleteStatus: "Success", todoDelted: todo });
  } catch (error) {
    res.status(400).json({ DeleteStatus: error.message });
    throw new Error("You can't perform this action", error.message);
  }
};

module.exports = {
  postTodo,
  getTodo,
  deleteTodo,
  updateTodo,
};
