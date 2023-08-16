import mongoose, { Schema } from "mongoose";

const productSchema = new Schema({
  title: String,
  description: String,

  price: Number,
  category: String,
});

const Product =
  mongoose.models.Product || mongoose.model("Product", productSchema);

export default Product;
