const express = require("express");
const Posts = require("./Post.model");

const app = express.Router();

app.get("/", async (req, res) => {
  try {
    const newPosts = await Posts.find({});
    if (newPosts) return res.send(newPosts);
    else {
      return res.send("Nothing is there yet");
    }
  } catch (e) {
    res.status(500).send(e.message);
  }
});
app.get("/:id", async (req, res) => {
    let { id } = req.params;
  
    try {
      let data = await Posts.findById(id);
    //   console.log(data);
      return res.send(data);
    } catch (e) {
      res.status(500).send(e.message);
    }
  });
app.post("/", async (req, res) => {
  try {
    let newPosts = await Posts.create(req.body);
    console.log(newPosts);
    return res.status(201).send(req.body);
  } catch (e) {
    res.status(500).send(e.message);
  }
});

app.delete("/:id", async (req, res) => {
  let { id } = req.params;

  try {
    let data = await Posts.findByIdAndRemove(id, { new: true });
    console.log(data);
    return res.send(data);
  } catch (e) {
    res.status(500).send(e.message);
  }
});

module.exports = app;
