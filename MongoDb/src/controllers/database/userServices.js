/** @format */

import { userModel } from "../../models/userSchema";

export class UserService {
  static async getAll() {
    return userModel.find({}).sort({ createdAt: -1 });
  }

  static async getOne(userId) {
    return userModel.findById(userId).exec();
  }

  static async create(data) {
    const user = new userModel(data);
    return user.save();
  }

  static async update(userId, data) {
    // Fetch the user first
    const user = await userModel.findById(userId);
    user.email = data.email;

    // Only set the password if it was modified
    if (data.password) {
      user.password = data.password;
    }

    return user.save();
  }

  static async remove(userId) {
    return userModel.deleteOne({ _id: userId }).exec();
  }
}
