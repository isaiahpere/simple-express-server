const express = require("express");
const router = express.Router();

router.get("/page", (req, res) => {
  if (req.session.count) {
    req.session.count += 1;
  } else {
    req.session.count = 1;
  }

  // req.session.count = session;
  res.json(`You have chekced this page ${req.session.count} times`);
});

module.exports = router;
