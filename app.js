import "dotenv/config";
import express from "express";
import pkg from "pg";

const app = express();
const { Pool } = pkg;

const pool = new Pool({
  connectionString: process.env.CONNECTION_STRING,
});

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.listen(process.env.PORT, (req, res) => {
  console.log(`Server listening on PORT ${process.env.PORT}`);
});
