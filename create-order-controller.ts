import { Request, Response } from "express";
import { orders, Order } from "../models/order";
import { products, Product } from "../models/product";

// read
export const getOrder = (req: Request, res: Response) =>{
    res.json(orders)
}

// create order
export const createOrder = (req: Request, res: Response) => {
    try {
        const newProduct: Product = { id: 6, name: "meja", size: "m" }
        const newOrder: Order = { id: 1, product: newProduct, quantity: 4}
        orders.push(newOrder)
        res.json(orders)
    } catch (error){
        console.log(error)
    }
};

// update
export const updateOrder = (req: Request, res: Response) => {
     try {
        const id = parseInt(req.params.id, 10);
        const existingOrder = orders.find(x => x.id == id)

        if(existingOrder){
            existingOrder.id = 3,
            existingOrder.quantity = 10
        }
        res.json(orders)
    } catch (error){
        console.log(error)
    }
}

// delete
export const deleteOrder = (req: Request, res: Response) => {
  try {
    const id = parseInt(req.params.id, 10);
    const indexOrder = orders.findIndex((o) => o.id === id);

    const deletedOrder = orders.splice(indexOrder, 1);
    console.log(orders)
    res.json(orders);
  } catch (error) {
    (error);
  }
};