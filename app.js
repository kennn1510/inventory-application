require("dotenv/config");
const express = require("express");
const app = express();
const { Pool } = require("pg");
const path = require("node:path");

const pool = new Pool({
  connectionString: process.env.CONNECTION_STRING,
});

app.use(express.static(path.join(__dirname, "public")));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("index", { message: "Hello World!" });
});

app.listen(process.env.PORT, (req, res) => {
  console.log(`Server listening on PORT ${process.env.PORT}`);
});
