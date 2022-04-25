/** @format */

import { itemModel } from "../../models/itemSchema";

export class ItemService {
  static async getAll() {
    return await itemModel.find({}).sort({ createdAt: -1 }).exec(); // exec() is to return a probie
  }

  static async getOne(itemId) {
    return await itemModel.findById(itemId).exec();
  }

  static async create(data) {
    const item = new itemModel(data);
    return item.save();
  }

  static async update(itemId, data) {
    return itemModel.findByIdAndUpdate(itemId, data).exec();
  }

  static async remove(itemId) {
    return itemModel.deleteOne({ _id: itemId }).exec();
  }
}
