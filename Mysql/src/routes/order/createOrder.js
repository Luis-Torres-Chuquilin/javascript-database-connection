/** @format */

import { OrderService } from "../../controllers/database/OrderSerivces";
import { config } from "../../config";

if (config.mysql.client) {
  // const order = new OrderService(config.mysql.client);
}

export const createOrder = {
  path: "/api/items/order/create",
  method: "post",
  handler: async (req, res) => {
    const order = new OrderService(config.mysql.client);
    const result = await order.create(req.body.user);
    console.log("result", result);

    res.status(200).send(JSON.stringify(result));
  },
};
