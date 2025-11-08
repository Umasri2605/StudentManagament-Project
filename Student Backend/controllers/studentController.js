const studentsdataModel=require("../models/studentModel");


exports.getAllStudents = async (req, res) => {
  try {
    const students = await studentsdataModel.find();
    res.json(students);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.getStudentById = async (req, res) => {
    try {
      const student = await studentsdataModel.findById(req.params.id);
      if (!student) return res.status(404).json({ message: "Student not found" });
      res.json(student);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  };

exports.addStudent = async (req, res) => {
  try {
    const newStudent = new studentsdataModel(req.body);
    const savedStudent = await newStudent.save();
    res.status(201).json(savedStudent);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.updateStudent = async (req, res) => {
  try {
    const updatedStudent = await studentsdataModel.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!updatedStudent)
      return res.status(404).json({ message: "Student not found" });
    res.json(updatedStudent);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.deleteStudent = async (req, res) => {
  try {
    const deletedStudent= await studentsdataModel.findByIdAndDelete(req.params.id);
    if (!deletedStudent)
      return res.status(404).json({ message: "Student not found" });
    res.json({ message: "Student deleted" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
