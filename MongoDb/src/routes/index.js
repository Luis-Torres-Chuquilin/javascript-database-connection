/** @format */

import { createItem } from "./item/createItem";
import { getItem } from "./item/getITem";
import { testRoute } from "./testRoure";
import { getUser } from "./user/getUser";
import { createUser } from "./user/createUser";

export const routes = [
  testRoute,
  // item routes
  getItem,
  createItem,
  // user routes
  getUser,
  createUser,
];
