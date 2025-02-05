import express from "express";
import { register, login, logout } from "../Controllers/auth.Controllers.js";

const router = express.Router();

//Register Route :
router.post("/register", register);

//Login Route :
router.post("/login", login);

//Login Route :
router.post("/logout", logout);

export default router;
