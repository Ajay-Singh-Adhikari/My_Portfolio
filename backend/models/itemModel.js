import mongoose from "mongoose";

const itemsSchema = new mongoose.Schema({
  itemName: { type: String, required: true },
  category: { type: String, required: true },
  image: { type: String, required: true },
});
const itemModel = mongoose.models.item || mongoose.model("item", itemsSchema);
export default itemModel;
