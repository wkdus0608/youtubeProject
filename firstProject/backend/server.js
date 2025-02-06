import express from "express";
// dotenv = 민감한 정보 관리하는 Node.js 패키지
import dotev from 'dotenv';
import connectDB from "./config/db.js";
import Product from "./models/product.model.js"; // 모델 import

dotev.config(); 
connectDB();

const app = express();

app.use(express.json()); 

app.post("/api/products", async (req, res) => {
    const product = req.body;

    if(!product.name || !product.price || !product.image) {
        return res.status(400).json({ success:false, message: "Please provide all fields"});
    }

    const newProduct = new Product(product);

    try {
        await newProduct.save();
        res.status(201).json({ success: true, data: newProduct });
    } catch (error) {
        console.error("Error is Create product:", error.message);
        res.status(500).json({ success: false, message: "Server Error"});
    }
});


// 5000은 점유중인 상태 -> 5001로 변경.
app.listen(5001, () => {
    console.log("Server started at http://localhost:5001");
});