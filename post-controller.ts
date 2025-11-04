import { products, Product } from "../models/product";
import { Request, Response } from "express";

export const getProducts = (req: Request, res: Response) =>{
    res.json(products)
}

// create
export const createProduct = (req: Request, res: Response) => {
    try {
        const newProduct: Product = { id: 6, name: "meja", size: "m" }
        products.push(newProduct)
        console.log(products)
        res.json(products)
    } catch (error){
        console.log(error)
    }
};

// update
export const updateProduct = (req: Request, res: Response) => {
    try {
        const id = parseInt(req.params.id, 10);
        const existingProduct = products.find(x => x.id == id)

        if(existingProduct){
            existingProduct.size = "m"
        }
        res.json(products)
    } catch (error){
        console.log(error)
    }
};

// delete
export const deleteProduct = (req: Request, res: Response) => {
  try {
    const id = parseInt(req.params.id, 10);
    const index = products.findIndex((p) => p.id === id);

    const deletedProduct = products.splice(index, 1);
    console.log(products)
    res.json(products);
  } catch (error) {
    (error);
  }
};