import express from "express";
import { getProducts } from "../controllers/productController.js";

const router = express();

router.get("/", getProducts);

router.get("/women", (req, res) => {
  return res.send("Hello World From Women in Router!!");
});

export default router;
