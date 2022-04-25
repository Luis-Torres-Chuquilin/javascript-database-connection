/** @format */

import { sequelizeModel } from "../../models/orderSchema";

export class OrderService {
  constructor(sequelize) {
    sequelizeModel(sequelize);
    this.client = sequelize;
    this.models = sequelize.models;
  }

  async create(user) {
    const order = await this.models.Caviar_dante.create({
      userId: user.id,
      email: user.email,
      status: "Not Shipped",
    });
    // console.log("order", order);
    return order;
  }

  async getAll() {
    const orders = await this.models.Caviar_dante.findAll({});
    return orders;
  }

  async setStatus(orderId, status) {
    return this.models.Order.update({ status }, { where: { id: orderId } });
  }
}
