import express from "express";
import {
  getProducts,
  getProductById,
  deleteProduct,
  updateProduct,
  createProduct,
  createProductReview,
  getTopProducts,
} from "../controllers/productController.js";
import { protect, isAdmin } from "../middleware/authMiddleware.js";

const productRouter = express.Router();

productRouter.route("/").get(getProducts).post(protect, isAdmin, createProduct);
productRouter.route("/:id/reviews").post(protect, createProductReview);
productRouter.get("/top", getTopProducts);
productRouter
  .route("/:id")
  .get(getProductById)
  .delete(protect, isAdmin, deleteProduct)
  .put(protect, isAdmin, updateProduct);

export default productRouter;
