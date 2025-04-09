const { Router } = require("express");
const genresRouter = Router();
const genresController = require("../controllers/genresController");

genresRouter.get("/", genresController.getAllGenres);

module.exports = genresRouter;
