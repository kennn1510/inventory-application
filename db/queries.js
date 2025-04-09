const pool = require("./pool");

async function getAllGames() {
  const { rows } = await pool.query("SELECT * FROM game");
  return rows;
}

module.exports = {
  getAllGames,
};
