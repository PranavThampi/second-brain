import express, { Request, Response } from "express";
import { z } from "zod";
import bcrypt from "bcrypt";
import { ContentModel, UserModel } from "../db";
import * as dotenv from "dotenv";
dotenv.config();
import jwt from "jsonwebtoken";
import { userMiddleware } from "../auth";

export const apiRouter = express.Router();

apiRouter.post(
  "/signup",
  async (req: Request, res: Response): Promise<void> => {
    try {
      const { email, password, firstName, lastName } = req.body;

      const userSchema = z.object({
        email: z.string().email(),
        password: z
          .string()
          .regex(
            new RegExp(
              /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/
            ),
            { message: "Invalid password format" }
          ),
        firstName: z.string().min(3).max(100),
        lastName: z.string().min(3).max(100),
      });

      const parsedData = userSchema.safeParse(req.body);
      if (!parsedData.success) {
        res.status(400).json({
          message: "Invalid format",
          error: parsedData.error,
        });
        return;
      }

      const hashedPassword = await bcrypt.hash(password, 5);

      const userExists = await UserModel.find({
        email: email,
      });

      if (userExists.length > 0) {
        res.status(400).json({
          message: "User already exists",
        });
        return;
      }

      await UserModel.create({
        email: email,
        password: hashedPassword,
        firstName: firstName,
        lastName: lastName,
      });

      res.json({ message: "User created!" });
      return;
    } catch (error: any) {
      res.status(400).json({
        error: error.message,
      });
      return;
    }
  }
);

apiRouter.post(
  "/signin",
  async (req: Request, res: Response): Promise<void> => {
    try {
      const { email, password } = req.body;
      const userSchema = z.object({
        email: z.string().email(),
        password: z
          .string()
          .regex(
            new RegExp(
              /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/
            ),
            { message: "Invalid password format" }
          ),
      });

      const parsedData = userSchema.safeParse(req.body);
      if (!parsedData.success) {
        res.status(400).json({
          message: "Invalid format",
          error: parsedData.error,
        });
        return;
      }

      const user = await UserModel.findOne({
        email: email,
      });
      if (!user) {
        res.status(400).json({ message: "User doesnt exist" });
        return;
      }

      const passwordMatch = bcrypt.compare(password, user.password);
      if (!passwordMatch) {
        res.status(400).json({
          message: "Incorrect password",
        });
        return;
      }

      if (!process.env.JWT_SECRET_USER) {
        console.log("JWT_SECRET_USER missing");
        res.status(500);
        return;
      }
      res.json({
        token: jwt.sign(
          { userId: user._id.toString() },
          process.env.JWT_SECRET_USER
        ),
      });
      return;
    } catch (error: any) {
      res.status(400).json({
        message: error.message,
      });
    }
  }
);

apiRouter.use(userMiddleware)

apiRouter.post('/content', async (req: Request, res: Response): Promise<void> => {
  try {
    const link = req.body.link;
    const type = req.body.type;
    await ContentModel.create({
        link,
        type,
        //@ts-ignore
        userId: req.userId,
        tags: []
    })

    res.json({
        message: "Content added"
    })
    return
  }
  catch (error: any) {
    res.status(400).json(
      {
        message: error.message
      }
    )
  }
})

apiRouter.get('/content', async (req: Request, res: Response): Promise<void> => {
    try {
      const allContents = await ContentModel.find({
        // @ts-ignore
        userId: req.userId
      })
      res.json(allContents)
      return
    }
    catch (error: any) {
      res.status(400).json(
        {
          message: error.message
        }
      )
    }
})

apiRouter.delete('/content/:contentId?', async (req: Request, res: Response): Promise<void> => {
    try {
      if (req.query.contentId) {
        await ContentModel.deleteMany({
          // @ts-ignore
          userId: req.userId,
          _id: req.query.contentId
        })
        res.json({
          message: `Content with id: ${req.query.contentId} deleted`
        })
      }
      else {
        await ContentModel.deleteMany({
          // @ts-ignore
          userId: req.userId
        })
        res.json({
          message: "All contents deleted"
        })
      }
      return
    }
    catch (error: any) {
      res.status(400).json(
        {
          message: error.message
        }
      )
    }
})

apiRouter.post("/brain/share", async (req: Request, res: Response) => {
  try {
    
  }
  catch (error: any) {
    res.status(400).json(
      {
        message: error.message
      }
    )
  }
})

apiRouter.get("/brain/:shareLink", async (req: Request, res: Response) => {
  try {

  }
  catch (error: any) {
    res.status(400).json(
      {
        message: error.message
      }
    )
  }
})