import mongoose from "mongoose";
import fs from "fs";
import itemModel from "../models/itemModel.js";

// Get all items
export const getItem = async (req, res) => {
  try {
    const data = await itemModel.find({});
    res.json({ success: true, data });
  } catch (error) {
    console.error("Get Items Error:", error);
    res
      .status(500)
      .json({ success: false, message: "An unknown error occurred." });
  }
};

// Create a new item
export const postItem = async (req, res) => {
  try {
    if (!req.file) {
      return res
        .status(400)
        .json({ success: false, message: "No image uploaded." });
    }

    const { itemName, category } = req.body;
    const image_filename = req.file.filename;

    const item = new itemModel({
      itemName,
      category,
      image: image_filename,
    });

    await item.save();
    res
      .status(201)
      .json({ success: true, message: "Item added successfully." });
  } catch (error) {
    console.error("Post Item Error:", error);
    res
      .status(500)
      .json({ success: false, message: "An unknown error occurred." });
  }
};

// Delete an item
export const removeItem = async (req, res) => {
  try {
    const { _id } = req.body;

    const item = await itemModel.findById(_id);
    if (!item) {
      return res
        .status(404)
        .json({ success: false, message: "Item not found." });
    }

    if (item.image) {
      fs.unlink(`uploads/${item.image}`, (err) => {
        if (err) console.error("File deletion error:", err);
      });
    }

    await itemModel.findByIdAndDelete(_id);
    res.json({ success: true, message: "Item deleted successfully." });
  } catch (error) {
    console.error("Remove Item Error:", error);
    res
      .status(500)
      .json({ success: false, message: "An unknown error occurred." });
  }
};

// Update an item
export const updateItem = async (req, res) => {
  try {
    const { _id, itemName, category } = req.body;

    if (!_id) {
      return res
        .status(400)
        .json({ success: false, message: "No ID provided." });
    }

    const existingItem = await itemModel.findById(_id);
    if (!existingItem) {
      return res
        .status(404)
        .json({ success: false, message: "Item not found." });
    }

    // Delete old image if new one is uploaded
    if (req.file && existingItem.image) {
      fs.unlink(`uploads/${existingItem.image}`, (err) => {
        if (err) console.error("File deletion error:", err);
      });
    }

    const updatedItem = {
      itemName,
      category,
      ...(req.file && { image: req.file.filename }),
    };

    const result = await itemModel.findByIdAndUpdate(_id, updatedItem, {
      new: true,
    });

    res.json({ success: true, data: result });
  } catch (error) {
    console.error("Update Item Error:", error);
    res
      .status(500)
      .json({ success: false, message: "An unknown error occurred." });
  }
};
