import express from "express"
import { products } from "./data.js";
const app = express();
// middleware
app.use(express.json());
// route parameter
app.get("/product/:id", (req, res) => {
    // req.params.id
    const index = req.params.id;
    res.send(products[index - 1]);
})

app.post("/product", (req, res) => {
    products.push(req.body);
    res.json(req.body);
})

app.patch("/product", (req, res) => {
    const data = req.body;
    const fetchProduct = products.find((p1) => p1.id == data.id);
    if (!fetchProduct) {
        return res.status(404).json({
            message: "Product not found"
        });
    }

    Object.assign(fetchProduct, data);

    res.json({
        message: "Product updated successfully",
        product: fetchProduct
    });
})

app.delete("/product/:id", (req, res) => {
    const id = req.params.id;
    const index = products.findIndex((p1) => p1.id == id);
    if (index >= 0) {
        const p = products.splice(index, 1);
        res.json(p)
    } else {
        res.send("Product not found");
    }
})

//query parameter + filter
app.get("/product", (req, res) => {
    const { price, rating, brand, name, category, inStock } = req.query;
    let filterData = products;
    if (price) {
        filterData = filterData.filter((p) => p.price >= price);
    }
    if (rating) {
        filterData = filterData.filter((p) => p.rating >= rating);
    }
    if (brand) {
        filterData = filterData.filter((p) => p.brand == brand);
    }
    if (category) {
        filterData = filterData.filter((p) => p.category == category);
    }
    if (inStock) {
        filterData = filterData.filter((p) => p.inStock == inStock);
    }
    res.json(filterData);
})
app.listen(3000, () => {
    console.log("Server is listening at port 3000");
})