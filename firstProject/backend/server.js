import express from "express";
// dotenv = 민감한 정보 관리하는 Node.js 패키지
import dotenv from 'dotenv';
import connectDB from "./config/db.js";
import productRoutes from "./routes/product.route.js"


dotenv.config();
connectDB();

const app = express();
const PORT = process.env.PORT || 5001;


app.use(express.json());
app.use("/api/products", productRoutes);

// 5000은 점유중인 상태 -> 5001로 변경.
app.listen(PORT, () => {
	console.log("Server started at http://localhost:" + PORT);
});