import express from "express"
import {getPosts} from "../controllers/post-controller"
import { deleteBlog } from "../controllers/post-controller"


const router = express.Router()

router.get("/posts", getPosts)
router.delete("/posts/:id", deleteBlog)

export default router