/** @format */

import { OrderService } from "../../controllers/database/OrderSerivces";
import { config } from "../../config";

if (config.mysql.client) {
  // const order = new OrderService(config.mysql.client);
}

export const getOrder = {
  path: "/api/items/order/",
  method: "get",
  handler: async (req, res) => {
    const order = new OrderService(config.mysql.client);
    const result = await order.getAll();
    // console.log("result", result);

    res.status(200).send(JSON.stringify(result));
  },
};
