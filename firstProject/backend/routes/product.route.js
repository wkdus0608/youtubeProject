import express from "express";
// express 프레임워크 사용하기 위해 불러옴

import { getProducts, updateProduct, createProduct, deleteProduct } from "../controllers/product.controller.js";

const router = express.Router();
// 라우터의 효능 : 경로 관리, 코드 분리, 유지보수
// 경로별 코드를 분리하기 위해 존재한다.

router.get("/", getProducts);
router.post("/", createProduct);
router.put("/:id", updateProduct);
router.delete("/:id", deleteProduct);


export default router;