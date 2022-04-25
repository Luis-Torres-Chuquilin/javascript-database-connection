/** @format */

import express from "express";
import { routes } from "./routes";

import Sequelize from "sequelize";
import { config } from "./config";

import { OrderService } from "./controllers/database/OrderSerivces";

// Database Connection
const connectToMySQL = () => {
  const sequelize = new Sequelize(config.mysql.options);
  sequelize
    .authenticate()
    .then(() => {
      console.log("Succesfully connect to MYSQL");
    })
    .catch((err) => {
      console.log(err);
      process.exit(1);
    });

  return sequelize;
};

const mysql = connectToMySQL();
config.mysql.client = mysql;

// const order = new OrderService(config.mysql.client);

// Server
const app = express();

app.use(express.json()); // parse

routes.forEach((route) => {
  app[route.method](route.path, route.handler);
});

const PORT = process.env.PORT || 8080;

app.get("/", (req, res) => {
  res.send("Server runing on port 4000");
});

app.listen(4001, () => {
  console.log(`Server runing on ${PORT}`);
});
