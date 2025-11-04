export interface Product {
    id: number, 
    name: string,
    size: string,
}

export let products: Product[]= [
    {id: 1, name: "baju", size: "S"},
    {id: 2, name: "celana", size: "M"},
    {id: 3, name: "handuk", size: "m"},
    {id: 4, name: "koper", size: "L"},
    {id: 5, name: "sajadah", size: "m"}
]

console.log(products)