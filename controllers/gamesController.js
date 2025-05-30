const db = require("../db/queries");
const CustomNotFoundError = require("../errors/CustomNotFoundError");

async function getAllGames(req, res) {
  res.render("gamesView", { games: await db.getAllGames() });
}

module.exports = {
  getAllGames,
};
