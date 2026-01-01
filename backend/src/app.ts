import express from "express";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import "express-async-errors";
import { json } from "zod";
import { timeStamp } from "node:console";

const app = express();
const port = 5000;

//Global Middleware
app.use(express.json()); //Parse JSON Bodies
app.use(cors()); //Allow Corss Origin Request
app.use(helmet()); // Security Headers
app.use(morgan("dev")); // Logging

//Routes

app.get("/health", (req, res) => {
  res.status(200).json({ status: "OK", timeStamp: new Date() });
});

export default app;
