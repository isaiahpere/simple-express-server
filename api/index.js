if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

const express = require("express");
const app = express();
const cors = require("cors");
const morgan = require("morgan");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const session = require("express-session");
const cookie = require("./routes/cookie");
const AppError = require("./ErrorClass/AppError");
const dogRoutes = require("./routes/dogs");
const catRoutes = require("./routes/cats");
const adminRoutes = require("./routes/admin");
const counterRoutes = require("./routes/counter");
const uploadRoutes = require("./routes/upload");
const { asyncWrapper } = require("./utils/helpers");

// CORS CONFIG
app.use(
  cors({
    credentials: true,
    origin: process.env.ORIGIN_URL,
  })
);

// PARSERS
app.use(cookieParser(process.env.COOKIE_SECRET));
app.use(bodyParser.json());

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
    throw new AppError("password is required", 401);
  }
};

// ROUTES
app.use("/admin", adminRoutes);
app.use("/counter", counterRoutes);
app.use("/dogs", dogRoutes);
app.use("/cats/:id", catRoutes);
app.use("/cookie", cookie);
app.use("/upload", uploadRoutes);

app.get("/say", authUser, (req, res) => {
  res.send("you got it!");
});

app.get("/error", (req, res, next) => {
  // we can throw errors in routes as well to an error handler
  next(new AppError("throwing a quicky", 500));
});

// dummy async fn wrapperd by async error catcher function
app.get(
  "/faulty",
  asyncWrapper(async (req, res, next) => {
    console.log("about to throw reference error");
    apple.find(); // will throw error
  })
);

// 404 - not found
app.use((req, res) => {
  res.status(404).send("NOT FOUND");
});

// ERROR HANDLERS - pass error to express default handler
app.use((err, req, res, next) => {
  console.log("**************************************");
  console.log("OOOPSIE ERROR");
  console.log("**************************************");
  console.log(err);
  next(err); // call express deafult error handler
});

app.listen(4000, () => {
  console.log("Server running on port 4000");
});
