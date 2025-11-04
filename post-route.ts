import express from "express";
import { getProducts } from "../controllers/post-controller";
import { deleteProduct } from "../controllers/post-controller";
import { updateProduct } from "../controllers/post-controller";

const router = express.Router()

router.post("/products", getProducts)
router.delete("/products/:id", deleteProduct)
router.get("/products/:id", deleteProduct)
router.get("/products/:id", updateProduct)
router.put("/products/:id", updateProduct)

export default router