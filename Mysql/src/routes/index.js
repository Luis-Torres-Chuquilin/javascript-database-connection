/** @format */

import { testRoute } from "./testRoure";
import { getOrder } from "./order/getOrder";
import { createOrder } from "./order/createOrder";

export const routes = [
  testRoute,
  // order routes
  getOrder,
  createOrder,
];
