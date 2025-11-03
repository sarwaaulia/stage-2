import {Request, Response} from "express" 
import { posts, Post } from "../models/post-model";

export const deletePost = (req: Request, res: Response) => {
  try {
    const id = parseInt(req.params.id, 10);
    const index = posts.findIndex((p) => p.id === id);

    const deletedPost = posts.splice(index, 1);
    console.log(posts)
    res.json(posts);
  } catch (error) {
    (error);
  }
};