const pool = require("./pool");

async function getAllGames() {
  const { rows } = await pool.query("SELECT * FROM games");
  return rows;
}

async function getAllGenres() {
  const { rows } = await pool.query("SELECT * FROM genres");
  return rows;
}

async function getAllDevs() {
  const { rows } = await pool.query("SELECT * FROM developers");
  return rows;
}

module.exports = {
  getAllGames,
  getAllGenres,
  getAllDevs,
};
