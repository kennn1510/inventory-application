const { Router } = require("express");
const router = Router();
const devsController = require("../controllers/devsController");

router.get("/", devsController.getAllDevs);

module.exports = router;
