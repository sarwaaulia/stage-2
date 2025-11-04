import express from "express";
import { createProduct } from "../controllers/post-controller";
import { createOrder } from "../controllers/create-order-controller"
import { updateOrder} from "../controllers/create-order-controller"
import { deleteOrder } from "../controllers/create-order-controller";

const router = express.Router()

router.get("/products", createProduct)
router.post("/products", createProduct)

router.get("/orders", createOrder)
router.post("/orders", createOrder)

router.put("/orders/:id", updateOrder)
router.get("/orders/:id", updateOrder)

router.delete("/orders/:id", deleteOrder)

export default router