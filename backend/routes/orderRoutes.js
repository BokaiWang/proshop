import express from "express";
import {
  addOrderItems,
  getMyOrders,
  getOrderById,
  getOrders,
  updateOrderToPaid,
} from "../controllers/orderController.js";
import { isAdmin, protect } from "../middleware/authMiddleware.js";

const orderRouter = express.Router();

orderRouter
  .route("/")
  .post(protect, addOrderItems)
  .get(protect, isAdmin, getOrders);
orderRouter.route("/myorders").get(protect, getMyOrders);
orderRouter.route("/:id").get(protect, getOrderById);
orderRouter.route("/:id/pay").put(protect, updateOrderToPaid);

export default orderRouter;
