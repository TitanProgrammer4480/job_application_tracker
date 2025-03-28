import express from "express";

import { check, login, logout, signup } from "../controllers/auth.controller.js";
import { protectRoute } from "../middleware/auth.middleware.js";

const authRouter = express.Router();

authRouter.post("/signup", signup);

authRouter.post("/login", login);

authRouter.post("/logout", protectRoute, logout);

authRouter.get("/check", protectRoute, check);

export default authRouter;