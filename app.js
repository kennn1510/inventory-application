require("dotenv/config");
const express = require("express");
const app = express();
const path = require("node:path");
const gameRouter = require("./routes/gameRouter");

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(express.static(path.join(__dirname, "public")));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/", gameRouter);

app.use((err, req, res, next) => {
  console.error(err);
  res.status(err.statusCode || 500).send(err.message);
});

app.listen(process.env.PORT, (req, res) => {
  console.log(`Server listening on PORT ${process.env.PORT}`);
});
