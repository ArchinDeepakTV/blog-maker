const cors = require("cors");
const express = require("express");
const bodyParser = require("body-parser");
var session = require("express-session");
// var cookieParser = require("cookie-parser");
const helmet = require("helmet");
const rateLimit = require("express-rate-limit");
// const mysql = require("mysql2/promise");

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // Limit each IP to 100 requests per windowMs
});
const app = express();
const PORT = process.env.PORT || 5050;
app.use(cors());
// app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(helmet());
app.use(limiter);

app.get("/", (req, res) => {
  res.status(200).json("Archin Deepak");
});

app.listen(PORT, () => {
  console.log(`server running at ${PORT}`);
});
