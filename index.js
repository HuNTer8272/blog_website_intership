  import express from 'express';
  import { initDb } from './db/index.js';
  import compression from "compression";
  import cors from "cors";
  import Post from './model/post.js';

  import dotenv from "dotenv";
  dotenv.config();
  const app = express();


app.use(compression());
app.use(cors()); // Allow all origins for simplicity. You can restrict it to specific origins if needed.


  app.use(express.json());

  app.listen(5000, async () => {
    await initDb();
    console.log("Example app listening at http://localhost:5000");
  });

  app.get("/", (req, res) => {
    res.send("<h1>hello World</h1>");
  });

  app.post("/create", async (req, res) => {
    try {
      const createPost = await Post.create(req.body);
      res.send(createPost);
    } catch (error) {
      console.log(error.message);
      res.status(500).json({ message: error.message });
    }
  });

  app.get("/posts", async (req, res) => {
    try {
      const posts = await Post.find({});
      res.send(posts);
    } catch (error) {
      console.log(error.message);
      res.status(500).json({ message: error.message });
    }
  });

  app.get("/posts/:id", async (req, res) => {
    try {
      const { id } = req.params;
      const post = await Post.findById(id);
      res.send(post);
    } catch (error) {
      console.log(error.message);
      res.status(404).json({ message: `Post not found at ${id}` });
    }
  });

  app.put("/edit/:id", async (req, res) => {
    try {
      const { id } = req.params;
      const post = await Post.findByIdAndUpdate(id, req.body);
      if (!post) {
        return res.status(404).send("Cannot find the post to update.");
      }
      const updatedPost = await Post.findById(id);
      res.send(updatedPost);
    } catch (error) {
      console.log(error.message);
      res.status(500).json({ message: "Cannot Update from the given id " });
    }
  });

  app.delete("/delete/:id", async (req, res) => {
    try {
      const { id } = req.params;
      const post = await Post.findByIdAndDelete(id);
      if (!post) {
        return res.status(404).send("Cannot find the post to delete.");
      }
      res.send("Post deleted");
    } catch (error) {
      console.log(error.message);
      res.status(500).json({ message: "Cannot Update from the given id" });
    }
  });
