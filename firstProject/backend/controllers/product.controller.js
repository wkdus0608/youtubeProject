import mongoose from "mongoose";
// Product = name, price, image 양식
import Product from "../models/product.model.js";


export const getProducts = async (req, res) => {
	try {
		const products = await Product.find({}); // MongoDB내 모든 문서 찾기
		res.status(200).json({ success: true, data: products }); // 성공하면 JSON 형태로 응답
	} catch (error) {
		console.log("error in fetching products:", error.message);
		res.status(500).json({ success: false, message: "Server Error" });
	}
};

// 생성 및 DB에 저장
export const createProduct = async (req, res) => {
	const product = req.body; // 생성하고자 하는 데이터 product에 저장

	if (!product.name || !product.price || !product.image) {
		return res.status(400).json({ success: false, message: "Please provide all fields" });
	} // name-price-image 모두 있는지 확인

	const newProduct = new Product(product); // 생성 입력받은 product

	try {
		await newProduct.save(); // MongoDB에 저장
		res.status(201).json({ success: true, data: newProduct });
	} catch (error) {
		console.error("Error in Create product:", error.message);
		res.status(500).json({ success: false, message: "Server Error" });
	}
};

// 수정
export const updateProduct = async (req, res) => {
	const { id } = req.params;
	const product = req.body;

    // id 형식이 아니라면, 404
	if (!mongoose.Types.ObjectId.isValid(id)) {
		return res.status(404).json({ success: false, message: "Invalid Product Id" });
	}

	try {
        // 해당 id의 product 찾아서 update
		const updatedProduct = await Product.findByIdAndUpdate(id, product, { new: true });
		res.status(200).json({ success: true, data: updatedProduct });
	} catch (error) {
		res.status(500).json({ success: false, message: "Server Error" });
	}
};

// 삭제
export const deleteProduct = async (req, res) => {
	const { id } = req.params;

	if (!mongoose.Types.ObjectId.isValid(id)) {
		return res.status(404).json({ success: false, message: "Invalid Product Id" });
	}

	try {
		await Product.findByIdAndDelete(id);
		res.status(200).json({ success: true, message: "Product deleted" });
	} catch (error) {
		console.log("error in deleting product:", error.message);
		res.status(500).json({ success: false, message: "Server Error" });
	}

};