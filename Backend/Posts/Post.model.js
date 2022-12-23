const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema(
  {
    Description: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

const Posts = mongoose.model("post", PostSchema);
module.exports = Posts;
