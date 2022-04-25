/** @format */

import { DataTypes } from "sequelize";

export const sequelizeModel = (sequelize) => {
  const Order = sequelize.define("Caviar_dante", {
    userId: DataTypes.STRING(24),
    email: DataTypes.STRING,
    status: DataTypes.STRING,
  });

  const OrderItem = sequelize.define("OrderItem_caviar", {
    sku: DataTypes.INTEGER,
    qty: DataTypes.INTEGER,
    name: DataTypes.STRING,
    price: DataTypes.DECIMAL(10, 2),
  });

  //
  sequelize.sync();
  //
};
