import {Product} from "./product";

export interface Order {
    id: number, 
    product: Product,
    quantity: number
}

export let orders: Order[]= []