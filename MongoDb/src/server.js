/** @format */

import express from "express";
import mongoose from "mongoose";
import { routes } from "./routes";

const mongoConnection = process.env.MONGODB_CONNECTION;

const connectToMongoose = async () => {
  const client = await mongoose.connect(mongoConnection, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    // useFindAndModify: false,
  });

  // return client;
};

const app = express();

app.use(express.json()); // parse

routes.forEach((route) => {
  app[route.method](route.path, route.handler);
});

const PORT = process.env.PORT || 8080;

app.get("/", (req, res) => {
  res.send("Server runing on port 4000");
});

app.listen(PORT, () => {
  console.log(`Server runing on ${PORT}`);
});

connectToMongoose()
  .then(() => {
    console.log("Successfully connected to Mongodb");
  })
  .catch((e) => {
    console.log(e);
  });
