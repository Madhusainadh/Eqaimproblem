const express = require("express");
const mongoose = require("mongoose");
const postRouter = require("./Posts/Post.routes")
require("dotenv").config();
const cors = require("cors");
const app = express();
const PORT = process.env.PORT || 8080;
app.use(cors());
mongoose.set("strictQuery", true);
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", (req, res) => res.send("hello World"));
app.use("/post", postRouter);
app.listen(PORT, async () => {
  await mongoose
    .connect(
      process.env.MONGO
    )
    .then(() => console.log("User heat the server!!"));
});
