const db = require("../db/queries");

async function getAllGenres(req, res) {
  res.render("genresView", { genres: await db.getAllGenres() });
}

module.exports = { getAllGenres };
