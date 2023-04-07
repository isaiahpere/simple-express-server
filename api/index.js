const express = require("express");
const app = express();
const cors = require("cors");
const morgan = require("morgan");
const cookieParser = require("cookie-parser");
const session = require("express-session");
const cookie = require("./routes/cookie");

const dogRoutes = require("./routes/dogs");
const catRoutes = require("./routes/cats");
const adminRoutes = require("./routes/admin");
const counterRoutes = require("./routes/counter");

require("dotenv").config();

// CORS CONFIG
app.use(
  cors({
    credentials: true,
    origin: process.env.ORIGIN_URL,
  })
);

// COOKIE PARSER
app.use(cookieParser(process.env.COOKIE_SECRET));

// SESSIONS
app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
  })
);

// MORGAN LOGGER
app.use(morgan("dev"));

// MIDDLEWARE
app.use((req, res, next) => {
  console.log(req.method.toUpperCase());
  next();
});

// custom middleware function
const authUser = (req, res, next) => {
  const { phrase } = req.query;
  if (phrase === "love") {
    next();
  } else {
    res.send("You dont have access");
  }
};

// middle ware for only dogs path
app.use("/dogs", (req, res, next) => {
  console.log("I LOVE DOGS");
  return next();
});

// ROUTES
app.use("/admin", adminRoutes);
app.use("/counter", counterRoutes);
app.use("/dogs", dogRoutes);
app.use("/cats", catRoutes);
app.use("/cookie", cookie);

app.get("/say", authUser, (req, res) => {
  res.send("you got it!");
});

// catch all
app.use((req, res) => {
  res.status(404).send("NOT FOUND");
});

app.listen(4000, () => {
  console.log("Server running on port 4000");
});
