const express = require("express");
const router = express.Router();

// middleware only for admin routes
router.use((req, res, next) => {
  if (req.query.isAdmin) {
    next();
  } else {
    res.json("NOT AN ADMIN");
  }
});

router.get("/", (req, res) => {
  res.json("you hit the admin router");
});

router.get("/:id", (req, res) => {
  res.json("you got all adming files");
});

module.exports = router;
