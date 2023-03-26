const express = require("express");

const dotenv = require("dotenv");
const UserRouter = require("./routes/user.routes");

const TodoRouter = require("./routes/todo.routes");

const app = express();

const cors = require("cors");

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

dotenv.config();
const connectDB = require("./config/db");
const PORT = process.env.PORT || 8080;
app.use("/", UserRouter);
app.use("/", TodoRouter);
app.listen(PORT, async () => {
  connectDB();

  console.log(`Server Runs in Port ${PORT}`);
});
