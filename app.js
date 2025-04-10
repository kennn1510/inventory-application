require("dotenv/config");
const express = require("express");
const app = express();
const path = require("node:path");
const homeRouter = require("./routes/homeRouter");
const gamesRouter = require("./routes/gamesRouter");
const genresRouter = require("./routes/genresRouter");

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(express.static(path.join(__dirname, "public")));
app.use(express.json());

app.use("/", homeRouter);
app.use("/games", gamesRouter);
app.use("/genres", genresRouter);

app.use((err, req, res, next) => {
  console.error(err);
  res.status(err.statusCode).render("errorView", { error: err });
});

app.listen(process.env.PORT, (req, res) => {
  console.log(`Server listening on PORT ${process.env.PORT}`);
});
