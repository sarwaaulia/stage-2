import {Request, Response} from "express" 
import {posts, Post} from "../models/post-model"

export const getPosts = (req: Request, res: Response) =>{
    res.json(posts)
}

export const deleteBlog = (req: Request, res: Response) => {
    const id = parseInt(req.params.id, 10);
    const index = posts.findIndex((i) => i.id === id)

    if (index === -1){
       return res.status(404).json({message: 'posts not found'})
    } 
    posts.splice(index, 1)[0]
    res.status(200).json({message: 'posts not found'})
}