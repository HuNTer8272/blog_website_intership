import express from 'express';
import { PostController } from './controller/index.js';

const router = express.Router();

router.get("/",(req,res)=>res.send("echo"));
router.get("/posts",(req,res)=>{PostController.getAllPost});
router.get("/posts/:id",PostController.getById);
router.put("/posts/create",PostController.create);
router.post("/posts/edit/:id",PostController.update);
router.delete("/posts/delete/:id",PostController.delete);

export default router;


// import  express  from "express";
// import { initDb } from "./db/index.js";
// import Post from "./model/post.js";
// const Router = express.Router();
// const app = express();

// initDb();
// app.use(express.json());

// app.get('/',(req,res)=>{
//     res.send("hello")
// })


// Router.put('/posts/create',(req,res)=>{
//      console.log(req.body);
//      const user =Post(req.body);
//      user.save()
//      res.send(req.body)
// })

// export default Router