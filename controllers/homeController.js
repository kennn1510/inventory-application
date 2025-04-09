const db = require("../db/queries");
const CustomNotFoundError = require("../errors/CustomNotFoundError");

function getHomeView(req, res) {
  res.render("homeView");
}

module.exports = { getHomeView };
