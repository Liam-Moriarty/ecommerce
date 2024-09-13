// IMPORTS
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { db } from "./db/db.js";
import productRoute from "./routes/productRoute.js";

//  CONFIGURATION
dotenv.config();
const app = express();

// MIDDLEWARES
app.use(cors());
app.use(express.json());

// ROUTES

app.use("/nex", productRoute);

// DATABASE CONNECTION

const PORT = process.env.PORT || 3000;

const server = () => {
  db();
  app.listen(PORT, () => console.log(`Connected at port ${PORT}`));
};

server();
