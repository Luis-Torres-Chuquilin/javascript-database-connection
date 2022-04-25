/** @format */
import { ItemService } from "../../controllers/database/ItemServices";

export const getItem = {
  path: "/api/items/:itemId?",
  method: "get",
  handler: async (req, res) => {
    try {
      const items = await ItemService.getAll();
      console.log(typeof items);
      let item = null;

      if (req.params.itemId) {
        item = await ItemService.getOne(req.params.itemId);
      }
      // res.status(200).send("It works");
      res.status(200).send(JSON.stringify({ items: items, item: item }));

      // res.render({ items, item });
    } catch (e) {
      console.log(e);
    }
  },
};
