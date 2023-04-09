const express = require("express");
const router = express.Router();

// dummy route to show sessions at work.
// this function increases the count id in req.session everytime
// a user visits the site.
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
