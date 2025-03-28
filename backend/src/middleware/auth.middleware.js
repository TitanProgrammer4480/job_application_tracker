import jwt from "jsonwebtoken";

import User from "../models/user.model.js";

import { JWT_SECRET } from "../lib/env.js";

export const protectRoute = async (req, res, next) => {
    try {
        const token = req.cookies.jwt;
        if(!token) return res.status(401).json({ message: "Unauthorized - No Token Provided" });

        const decoded = jwt.verify(token, JWT_SECRET);

        if(!decoded) return res.status(401).json({ message: "Unauthorized - Invalid Token" });

        const user = await User.findById(decoded.userId).select("-password");

        if(!user) return res.status(404).json({ message: "user not found" });

        req.user = user;

        next();
    }catch (err) {
        console.log("error in protectRoute middleware: " + err);
        return res.status(500).json({ message: "Internal Server Error" });
    }
};