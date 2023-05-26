const { Router } = require("express");
const controller = require("../controllers/index.js")
const midlewares = require("../midlewares/index.js")


const router = Router();

router.get("/films", controller.listFilms);
router.get("/films/:id",midlewares.paramsValidation , controller.getFilm);
router.post("/films", midlewares.filmValidation, controller.createFilm);

module.exports = router;
