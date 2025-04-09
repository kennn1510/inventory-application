const db = require("../db/queries");
const CustomNotFoundError = require("../errors/CustomNotFoundError");

async function getGames(req, res) {
  res.render("game", { games: await db.getAllGames() });
}

module.exports = {
  getGames,
};
