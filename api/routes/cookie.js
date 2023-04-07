const express = require("express");
const router = express.Router();

router.get("/greet", (req, res) => {
  const { name = "Gost" } = req.cookies;
  res.json(`Hi Mr.${name}`);
});

router.get("/set-cookie", (req, res) => {
  res.cookie("signedCookie", "Tony Tiger", { signed: true });
  res.cookie("unsignedCooke", "apple");
  res.json("sent you a cookie");
});

router.get("/signed-cookies", (req, res) => {
  res.json(req.signedCookies);
});

module.exports = router;
