const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const studentRoutes=require("./routes/studentRoutes")
const cors = require("cors");
const app = express();
app.use(express.json());
app.use(cors());
app.get("/", (req, res) => {
  res.send("Student Lead API is running");
});
dotenv.config();
connectDB();

app.use("/api/students", studentRoutes);

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));