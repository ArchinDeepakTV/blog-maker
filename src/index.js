const cors = require("cors");
const express = require("express");
const bodyParser = require("body-parser");
var session = require("express-session");
// var cookieParser = require("cookie-parser");
const helmet = require("helmet");
const rateLimit = require("express-rate-limit");
// const mysql = require("mysql2/promise");
const fs = require("fs");
const path = require("path");

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

// ! GLOBAL VARIABLES
const base_folder = "./src-files";
const filePath = "./src-files/template-file.txt";

// ! FUNCTIONS
function readTXT(username, filename) {
  fs.readFile(filePath, "utf8", (err, data) => {
    if (err) {
      console.error("Error reading the file:", err);
    } else {
      let content = data; // Assign the file content to a variable
      console.log("File content:", content);
    }
  });
  content = content.replace("filename()", "${filename}()");
  content = content.replace(
    "const username='';",
    "const username=${filename};"
  );
  content = content.replace(
    "const filename='';",
    "const filename=${filename};"
  );
  return content;
}

// ! GET AND POST
// ? OPENING A PARTICULAR BLOG
app.get("/:username/:filename", (req, res) => {
  const username = req.params.username;
  const filepath = req.params.filename;
  res
    .status(200)
    .json({ username: username, filename: username + "/" + filepath });
});

// * ADD NEW BLOG FROM PARTICULAR USER
app.post("/new-page", async (req, res) => {
  let data = req.body.data;
  let username = req.body.username;
  let title = req.body.title;
  let new_file_data = readTXT(username, title);
  for (let i = 0; i < length(data); i++) {
    if (data[i].includes("https") || data[i].includes("http")) {
      new_file_data = new_file_data + '<img src="${data[i]}" />';
    } else {
      new_file_data = new_file_data + "<p>${data[i]}</p>";
    }
  }
  new_file_data = new_file_data + ");}";

  const filePath = path.join("${base_folder}/${username}", title);

  fs.writeFile(filePath, (content = new_file_data), (err) => {
    if (err) {
      console.error("Error creating the file:", err);
    } else {
      console.log("File created successfully:", filePath);
    }
  });

  res.status(200).json(`Inserted ${name} @ ${amount}`);
});

// ? DEFAULT RUNNING GET
app.get("/", (req, res) => {
  res.status(200).json("Archin Deepak");
});

app.listen(PORT, () => {
  console.log(`server running at ${PORT}`);
});
