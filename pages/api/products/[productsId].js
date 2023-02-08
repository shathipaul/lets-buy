import { products } from "@/data/products";

export default function handler(req, res) {
    const { productsId } = req.query
    const product = products.find((product) => product.id === parseInt(productsId))
    res.status(200).json(product)
}