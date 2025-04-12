const db = require("../db/queries");

async function getAllDevs(req, res) {
  res.render("devsView", { devs: await db.getAllDevs() });
}

module.exports = { getAllDevs };
