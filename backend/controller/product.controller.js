import Product from "../models/product.model.js";
import mongoose from "mongoose";

// get all products
export const getProduct = async (req, res) => {
	try {
		const products = await Product.find({});
		res.status(200).json({ success: true, data: products });
	} catch (error) {
		console.log("Error in fetching products", error.message);
		res.status(500).json({ success: false, message: "Server Error" });
	}
};
//create product
export const createProduct = async (req, res) => {
	const product = req.body; //user will send data
	if (!product.name || !product.price || !product.image) {
		return res
			.status(400)
			.json({ success: false, message: "Please fill all the fields" });
	}
	const newProduct = await new Product(product); //create new product from model
	try {
		await newProduct.save();
		res.status(201).json({ success: true, data: newProduct });
	} catch (error) {
		console.error("Error creating product", error.message);
		res.status(500).json({ success: false, message: "Server Error" });
	}
};

// update product
export const updateProduct = async (req, res) => {
	const { id } = req.params;
	const product = req.body;
	if (!mongoose.Types.ObjectId.isValid(id)) {
		return res
			.status(404)
			.json({ success: false, message: "Invalid Product Id" });
	}
	try {
		const updatedProduct = await Product.findByIdAndUpdate(id, product, {
			new: true,
		});
		res.status(200).json({ success: true, data: updatedProduct });
	} catch (error) {
		console.error("Error updating product", error.message);
		res.status(500).json({ success: false, message: "Server Error" });
	}
};

// delete product
export const deleteProduct = async (req, res) => {
	const { id } = req.params; //get id from url

	if (!mongoose.Types.ObjectId.isValid(id)) {
		return res
			.status(404)
			.json({ success: false, message: "Invalid Product Id" });
	}
	try {
		await Product.findByIdAndDelete(id);
		res.status(200).json({ success: true, message: "Product deleted" });
	} catch (error) {
		console.log("Error in deleting product", error.message);
		res.status(500).json({ success: false, message: "Server Error" });
	}
};
