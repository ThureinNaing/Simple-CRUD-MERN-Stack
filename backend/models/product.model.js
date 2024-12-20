import mongoose from "mongoose";

const productSchema = mongoose.Schema(
	{
		name: {
			type: String,
			require: true,
		},
		price: {
			type: Number,
			require: true,
		},
		image: {
			type: String,
			require: true,
		},
	},
	{ timestamps: true } //created_at, updated_at
);

const Product = mongoose.model("Product", productSchema);
// Product => stored in db as "products"
export default Product;
