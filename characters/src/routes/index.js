const { Router } = require("express");
const controller = require("../controllers/index.js")
const midlewares = require("../midlewares/index.js")


const router = Router();

router.get("/characters", controller.listCharacters);
router.get("/characters/:id",midlewares.paramsValidation, controller.getCharacter);
router.post("/characters", midlewares.characterValidation, controller.createCharacter);

module.exports = router;
