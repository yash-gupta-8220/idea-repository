const express = require("express");
const router = express.Router();
const Idea = require("../models/Idea");

// Add Idea
router.post("/", async (req, res) => {
    const idea = new Idea(req.body);
    await idea.save();
    res.json(idea);
});

// Get All Ideas
router.get("/", async (req, res) => {
    const ideas = await Idea.find();
    res.json(ideas);
});
// Add Comment
router.post("/:id/comment", async (req, res) => {
    const idea = await Idea.findById(req.params.id);

    idea.comments.push(req.body.comment);

    await idea.save();

    res.json({ message: "Comment added" });
});

module.exports = router;