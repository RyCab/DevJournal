import { model } from "mongoose";
import express from "express";
import passport from "passport";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config({ path: "./config.env" });


var router = express.Router();

const secret = process.env.USER_AUTH_SECRET;


// Load user model
import "../models/Roles";
var User = model("roles");

router.post("/register", async function (req, res) {
  const newUser = new User({
    username: req.body.username,
    email: req.body.email,
    password: hashedPassword,
    picture: "https://twr-coffee-me.s3.amazonaws.com/images/default-avatar.jpg", //Default picture
  });
  newUser.save(function (err) {
    if (err) {
      console.log(err);
      return res.json({ success: false, message: "Sign Up failed" });
    }
    res.json({ success: true, message: "Sign Up successful" });
  });
});

router.post("/users/:id", 
  // multerUpload.single("userImage"),
  async function (req, res) {

  console.log('test function');
  const id = req.params.id;
  const hashedPassword = await bcrypt.hash(req.body.password, 10);

  const user = await User.findById(id);

  if (!user) {
    return res.status(404).json({
      success: false,
      message: "User not found",
    });
  }

  // Check if username already exists
  const existingUser = await User.findOne({ username: req.body.username });

  if (existingUser && existingUser._id.toString() !== user._id.toString()) {
    return res.status(400).json({
      success: false,
      message: "Username already in use",
    });
  }

  if (req.body.username) {
    user.username = req.body.username;
  } 

  if (req.body.password) {
    user.password = hashedPassword;
  }

  console.log('Test: ' ,req.file)
  }

)

export default router;
