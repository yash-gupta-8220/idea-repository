const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

// Connect MongoDB
mongoose.connect("mongodb://127.0.0.1:27017/ideaRepo")
.then(() => console.log("DB Connected"))
.catch(err => console.log(err));

// Test route
app.get("/", (req, res) => {
    res.send("Server is working 🚀");
});
app.use("/ideas", require("./routes/ideaRoutes"));
app.listen(3000, () => console.log("Server running on port 3000"));