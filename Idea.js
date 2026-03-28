const mongoose = require("mongoose");

const ideaSchema = new mongoose.Schema({
    title: String,
    description: String,
    domain: String,
    comments: [String]
});

module.exports = mongoose.model("Idea", ideaSchema);