import {
  getItem,
  postItem,
  removeItem,
  updateItem,
} from "../controller/itemController.js";
import express from "express";
import multer from "multer";
import path from "path";

const itemRouter = express.Router();

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.join(process.cwd(), "uploads"));
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});

const upload = multer({ storage: storage });

itemRouter.get("/list", getItem);
itemRouter.post("/add", upload.single("image"), postItem);
itemRouter.post("/remove", removeItem);
itemRouter.post("/update", upload.single("image"), updateItem);

export default itemRouter;
