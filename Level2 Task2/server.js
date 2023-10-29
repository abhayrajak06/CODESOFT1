import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import authRoutes from "./routes/authRoutes.js";
import cors from "cors";

//configure env
dotenv.config();

//config database
connectDB();

//rest object
const app = express();

//middlewares
app.use(express.json());
app.use(cors());

//routes
app.use("/api/v1/auth", authRoutes);

app.get("/", (req, res) => {
  res.send("<h1>Hello....</h1>");
});

app.listen(process.env.PORT, () => {
  console.log("server runnning...");
});
