import { NextFunction, Request, Response } from "express";
import * as dotenv from "dotenv";
dotenv.config();
import jwt from "jsonwebtoken";

export const userMiddleware = (req: Request, res: Response, next: NextFunction) => {
    const token = req.headers.token as string;
    if (!token) {
        res.status(400).json({
            message: "Token not provided"
        })
    }

    if (!process.env.JWT_SECRET_USER) {
        throw new Error("JWT_SECRET_USER missing")
    }

    jwt.verify(token, process.env.JWT_SECRET_USER, (err, decoded) => {
        if (err) {
        return res.json({ error: err });
        }
        //@ts-ignore
        req.userId = decoded.userId;
        next();
    });
}