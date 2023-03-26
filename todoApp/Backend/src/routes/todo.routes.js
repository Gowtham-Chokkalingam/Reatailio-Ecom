const express = require("express");
const { postTodo, getTodo, updateTodo, deleteTodo } = require("../controllers/todoController");
const { protect } = require("../middlewares/authMiddleware");

const router = express.Router();

router.route("/addTodo").post(protect, postTodo);
router.route("/getTodo").get(protect, getTodo);
router.route("/updateTodo/:id").patch(protect, updateTodo);
router.route("/deleteTodo/:id").delete(protect, deleteTodo);

module.exports = router;
   