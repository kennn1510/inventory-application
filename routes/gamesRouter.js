const { Router } = require("express");
const gameRouter = Router();
const gameController = require("../controllers/gamesController");

gameRouter.get("/", gameController.getAllGames);

module.exports = gameRouter;
