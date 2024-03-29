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

    // console.log(typeof result); // object

    // Tow way of response with json() or with send()
    res.status(200).json(result);
    // res.status(200).send(JSON.stringify(result));
  },
};
