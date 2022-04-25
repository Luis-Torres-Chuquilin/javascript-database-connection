/** @format */
import { ItemService } from "../../controllers/database/ItemServices";

export const createItem = {
  path: "/api/items/create",
  method: "post",
  handler: async (req, res) => {
    console.log(req.body);
    const sku = req.body.sku;
    const name = req.body.name;
    const price = req.body.price;

    if (!sku || !name || !price) {
      res.send("Error in data, not sky , name , price");
    }

    try {
      // If there was no existing item we now want to create a new item object
      if (!req.body.itemId) {
        await ItemService.create({ sku, name, price });
      } else {
        const itemData = {
          sku,
          name,
          price,
        };
        await ItemService.update(req.body.itemId, itemData);
      }
      res.send("It works");
    } catch (err) {
      console.error(err);
      res.send("Error in data");
    }
  },
};
