const { Router } = require("express");
const controller = require("../controllers/index.js")
const midlewares = require("../midlewares/index.js")


const router = Router();

router.get("/planets", controller.listPlanets);
router.get("/planets/:id", midlewares.paramsValidation, controller.getPlanet);
router.post("/planets", midlewares.planetValidation, controller.createPlanet);

module.exports = router;
