import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import { userRouter } from "./routes/user.js";
const app = express();

app.use(cors());
app.use(express.json());
app.use("/api/user", userRouter);
mongoose
  .connect("mongodb://127.0.0.1:27017/netflix")
  .then(() => {
    console.log("connected to Database");
  })
  .then(() => {
    app.listen(5000, () => {
      console.log("Server Start listen");
    });
  });
