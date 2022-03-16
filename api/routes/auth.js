const router = require("express").Router();
const { Router } = require("express");
const User = require("../models/User");
const CryptoJS = require("crypto-js");
const jwt = require("jsonwebtoken");


// REGISTER
router.post("/register", async (req, res) => {
  const newUser = new User({
    username: req.body.username,
    email: req.body.email,
    password: CryptoJS.AES.encrypt(req.body.password, process.env.PASSWORD).toString(),
  });
  try {
    const savedUser = await newUser.save();
    res.status(201).json(savedUser);
    return;
  } catch (error) {
    res.status(500).json(error);
    return;
  }
});


// LOGIN
router.post("/login", async (req, res) => {
  try {
    const user = await User.findOne({ username: req.body.username });
    if (!user) {
      res.status(401).json("Wrong credentials");
      return;
    }




    const hashedPassword = CryptoJS.AES.decrypt(user.password, process.env.PASSWORD);
    const originslPassword = hashedPassword.toString(CryptoJS.enc.Utf8);

    // if password is not equal to password then send 401 error
    if (originslPassword !== req.body.password) {
      res.status(401).json("Wrong credentials");
      return;
    }



    const accessToken = jwt.sign(
      {
        id: user._id,
        isAdmin: user.isAdmin,
      },
      process.env.JWT_SECRET,
      {
        expiresIn: "365d",
      },
    );

    //destructure user for extract password and don't send to client.
    const { password, ...others } = user._doc;

    // if is the same password, then send status 200 with user object. (user withouth password)
    res.status(200).json({ ...others, accessToken });



  } catch (error) {
    res.status(500).json({ error });
    return;
  }

});


module.exports = router