const express = require("express");
const app = express();
const router = express.Router();

const {
  createSingleDog,
  fetchAllDogs,
  fetchSingleDog,
  updateSingleDog,
} = require("../controller/dogs");
const dogMiddleware = require("../middleware/index");

// ROUTES
router.get("/", fetchAllDogs);

router
  .route("/:id")
  .post(createSingleDog)
  .get(dogMiddleware, fetchSingleDog)
  .put(updateSingleDog);

// EXPORT
module.exports = router;
