import express, { json } from "express";
const app = express();
import cors from "cors";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import passport from "passport";
import passportInit from "./auth/passport.js";
import "./models/User.js";
import { model } from "mongoose";

import users from "./routes/users.js";

dotenv.config({ path: "./config.env" });
const port = process.env.PORT || 3000;
app.use(cors());
app.use(json());

app.use(bodyParser.urlencoded({ extended: false }));

passportInit(passport);

app.use(users);

app.use(
  "/user",
  passport.authenticate("jwt", { session: false }),
);

// get driver connection
import { connectToServer } from "./db/conn.js";

app.listen(port, () => {
  // perform a database connection when server starts
  connectToServer(function (err) {
    if (err) console.error(err);
  });
  console.log(`Server is running on port: ${port}`);
});


var User = model("users");

app.get('/getUsers', (req, res) =>{
  User.find()
  .then(users => res.json(users))
  .catch(err => res.json(err))
});
