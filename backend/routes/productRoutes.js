import express from "express";
import {
  getProducts,
  getProductById,
  deleteProduct,
} from "../controllers/productController.js";
import { protect, isAdmin } from "../middleware/authMiddleware.js";

const productRouter = express.Router();

productRouter.route("/").get(getProducts);
productRouter
  .route("/:id")
  .get(getProductById)
  .delete(protect, isAdmin, deleteProduct);

export default productRouter;
