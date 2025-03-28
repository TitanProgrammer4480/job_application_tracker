import express from "express";

import cors from "cors";
import cookieParser from "cookie-parser";

import authRouter from "./routes/auth.routes.js";
import jobRouter from "./routes/job.routes.js";

import { PORT } from "./lib/env.js";
import { connectDB } from "./lib/db.js";

const app = express();

app.use(express.json());
app.use(cookieParser());
app.use(cors({
    origin: "http://localhost:5173",
    credentials: true
}));

app.use("/api/auth", authRouter);
app.use("/api/job", jobRouter);

app.listen(PORT, () => {
    console.log(`server is running on ${PORT}`);
    connectDB();
});