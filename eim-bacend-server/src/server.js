const express = require("express");
const mongoose = require("mongoose");
const Student = require("./studentModel");
const bodyParser = require("body-parser");
const DB_URL = `mongodb://127.0.0.1:27017/b20-advance`;
mongoose
  .connect(DB_URL, { useNewUrlParser: true })
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB", error);
  });

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json({ extended: true }));


// Route for adding a new student
app.post('/addStudent', async (req, res) => {
  console.log('req.body:', req.body)
  try {
    const { name, marks } = req.body;
    const student = new Student({ name, marks });
    await student.save();
    res.status(201).json(student);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

app.get("/sum-of-all-marks", async (req, res) => {
  try {
    const result = await Student.aggregate([{ $group: { _id: null, total: { $sum: "$marks" } } }]);
    console.log('result:', result)
    res.send({ sum: result[0].total });
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal server error");
  }
});

app.get("/second-max", async (req, res) => {
  try {
    const result = await Student.aggregate([{ $sort: { marks: -1 } }, { $skip: 1 }, { $limit: 1 }]);
    console.log("result:", result);
    res.send(result[0]);
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal server error");
  }
});

// Route for updating a student
app.patch('/students/:id', async (req, res) => {
  try {
    const { name, marks } = req.body;
    const student = await Student.findById(req.params.id);
    if (!student) {
      return res.status(404).json({ message: 'Student not found' });
    }
    if (name) {
      student.name = name;
    }
    if (marks) {
      student.marks = marks;
    }
    await student.save();
    res.json(student);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});


// Route for deleting a student
app.delete('/students/:id', async (req, res) => {
  try {
    const student = await Student.findByIdAndDelete(req.params.id);
    if (!student) {
      return res.status(404).json({ message: 'Student not found' });
    }
    res.json({ message: 'Student deleted' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});



const PORT = 8080;
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
