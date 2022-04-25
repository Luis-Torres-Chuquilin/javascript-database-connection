/** @format */
import { UserService } from "../../controllers/database/userServices";

export const createUser = {
  path: "/api/users/create",
  method: "post",
  handler: async (req, res) => {
    console.log(req.body);
    const email = req.body.email;
    const password = req.body.password;

    console.log(" create user susccess");

    if (!email || (!password && !req.body.userId)) {
      res.send("Error in data, not sky , name , price");
    }
    try {
      // If there was no existing user we now want to create a new user object
      if (!req.body.userId) {
        await UserService.create({ email, password });
      } else {
        const userData = {
          email,
        };
        // Add this if because password does not need to be changed on updated
        if (password) {
          userData.password = password;
        }
        await UserService.update(req.body.userId, userData);
      }

      res
        .status(200)
        .send(JSON.stringify({ email: email, password: password }));
      console.log(" create user susccess");
    } catch (err) {
      res.status(400).send("Error creeating the user");
      console.log(Object.keys(err));
      console.log("err index", err.index);
      console.log("err code", err.code);
      console.log("err keyPattern", err.keyPattern);
      console.log("err keyValue", err.keyValue);
      console.log("err :", err);
    }
  },
};
