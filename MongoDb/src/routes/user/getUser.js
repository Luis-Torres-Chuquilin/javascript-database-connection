/** @format */
import { UserService } from "../../controllers/database/userServices";

export const getUser = {
  path: "/api/users/:userId?",
  method: "get",
  handler: async (req, res) => {
    try {
      const users = await UserService.getAll();

      let user = null;

      // The optional userId param was passed
      if (req.params.userId) {
        user = await UserService.getOne(req.params.userId);
      }

      res.status(200).send(JSON.stringify({ users: users, user: user }));
      console.log(" get users susccess");
    } catch (err) {
      console.log(err);
    }
  },
};
