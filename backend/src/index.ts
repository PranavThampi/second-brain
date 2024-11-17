import * as dotenv from 'dotenv'; 
dotenv.config();
import express from "express";
import { apiRouter } from "./routes/api-router";
import mongoose from "mongoose";

const app = express();
app.use(express.json());

app.use("/api/v1", apiRouter);

async function main() {
  if (!process.env.MONGODB_CONN_STR) {
    throw new Error("MONGODB_CONN_STR environment variable is not defined");
  }
  await mongoose
    .connect(process.env.MONGODB_CONN_STR)
    .then(() => {
      console.log("Connected");
    })
    .catch((err: Error) => {
      console.log(err);
    });

  app.listen(3000, () => {
    console.log("listening at 3000");
  });
}
main();
