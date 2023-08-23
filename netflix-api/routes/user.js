import express from "express";
import {
  addToLikedMovies,
  getLikedMovies,
  removeFromLikedMovies,
} from "../controllers/user.js";

export const userRouter = express.Router();

userRouter.post("/add", addToLikedMovies);
userRouter.get("/liked/:email", getLikedMovies);
userRouter.put("/delete", removeFromLikedMovies);
