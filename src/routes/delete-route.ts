import express from "express";
import { deletePost } from "../controllers/delete-controller";

const router = express.Router()

router.delete("/products/:id", deletePost)
router.get("/products/:id", deletePost)

export default router
