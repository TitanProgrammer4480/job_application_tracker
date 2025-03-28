import express from "express";
import { create, getByUserId, remove } from "../controllers/job.controller.js";
import { protectRoute } from "../middleware/auth.middleware.js";

const jobRouter = express.Router();

jobRouter.get("/get", protectRoute, getByUserId);

jobRouter.post("/add", protectRoute, create);

jobRouter.delete("/delete/:jobId", protectRoute, remove)

export default jobRouter;