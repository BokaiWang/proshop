import express from "express";
import {
  authUser,
  deleteUser,
  getUserProfile,
  getUsers,
  registerUser,
  updateUserProfile,
} from "../controllers/userController.js";
import { protect, isAdmin } from "../middleware/authMiddleware.js";

const userRouter = express.Router();

userRouter.route("/").post(registerUser).get(protect, isAdmin, getUsers);
userRouter.post("/login", authUser);
userRouter
  .route("/profile")
  .get(protect, getUserProfile)
  .put(protect, updateUserProfile);
userRouter.route("/:id").delete(protect, isAdmin, deleteUser);

export default userRouter;
