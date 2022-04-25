/** @format */

import mongoose from "mongoose";

const ItemSchema = mongoose.Schema(
  {
    sku: { type: Number, required: true, index: { unique: true } },
    name: { type: String, required: true },
    price: { type: Number, required: true },
  },
  {
    timestamps: true,
  }
);

export const itemModel = mongoose.model("Item", ItemSchema);
