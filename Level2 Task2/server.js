import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import authRoutes from "./routes/authRoutes.js";

//configure env
dotenv.config();

//config database
connectDB();

//rest object
const app = express();

//middlewares
app.use(express.json());

//routes
app.use("/api/v1", authRoutes);

app.get("/", (req, res) => {
  res.send("<h1>Hello....</h1>");
});

app.listen(process.env.PORT, () => {
  console.log("server runnning...");
});
