import express from "express";
import dotenv from "dotenv";
import path from "path"; // to combine client and backend
import { connectDB } from "./config/db.js";
import productRoutes from "./routes/product.route.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5500;
const __dirname = path.resolve(); // get current directory

app.use(express.json()); // allow us to accept json data in the req.body
app.use("/api/products", productRoutes);
//add static folder for frontend
if (process.env.NODE_ENV === "production") {
	app.use(express.static(path.join(__dirname, "frontend/dist")));
}
app.get("*", (req, res) => {
	res.sendFile(path.join(__dirname, "frontend/dist/index.html"));
});

console.log(process.env.MONGO_URI);
app.listen(PORT, () => {
	connectDB();
	console.log("Server started at http://localhost:" + PORT);
});

// mongodb@2024December-> need to encode
