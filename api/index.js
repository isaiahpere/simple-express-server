const express = require("express");
const app = express();
const cors = require("cors");
const cookieParser = require("cookie-parser");
const session = require("express-session");
const dogRoutes = require("./routes/dogs");
const catRoutes = require("./routes/cats");
const adminRoutes = require("./routes/admin");
const cookie = require("./routes/cookie");
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
app.use(session());

// ROUTES
app.use("/admin", adminRoutes);
app.use("/dogs", dogRoutes);
app.use("/cats", catRoutes);
app.use("/cookie", cookie);

app.listen(4000, () => {
  console.log("Server running on port 4000");
});
