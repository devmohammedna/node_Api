import express from "express";
import postsRouter from "./routes/post.js";

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.json("Welcome To Own Server");
});

app.use("/posts", postsRouter);

app.use("/", (req, res) => {
  res.status(404).json("Not Found");
});

const PORT = 8000;
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});