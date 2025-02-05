dotenv.config();
import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { ConnectDb } from "./Lib/db.js";
import authRoutes from "./Routes/auth.Routes.js";
import cookieParser from "cookie-parser";

const app = express();
const PORT = process.env.PORT;

//MiddleWares :
app.use(cors());
app.use(express.json());
app.use(cookieParser());

//Routes:
app.use("/api/auth", authRoutes);

//Server listen :
app.listen(PORT || process.env.PORT, () => {
  console.log(`Server is running on : ${PORT}`);
  ConnectDb();
});
