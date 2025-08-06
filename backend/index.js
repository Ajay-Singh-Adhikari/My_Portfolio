import express from "express";
import cors from "cors";
import { connectDb } from "./config/db.js";
import "dotenv/config";
import itemRouter from "./Routes/itemRoute.js";

//app config
const app = express();
const PORT = process.env.PORT || 4000;

//middleware
app.use(express.json());
app.use(cors());

//db connection
connectDb();

//api endpoints
app.use("/api/item", itemRouter);
app.use("/images", express.static("uploads"));

app.get("/", (req, res) => {
  res.send("API Working");
});

app.listen(PORT, () => {
  console.log(`Server started at http://localhost:${PORT}`);
});
