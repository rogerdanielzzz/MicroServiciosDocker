const { Router } = require("express")

const router = Router()
const { modelValidation } = require("../middlewares/index.js")
const { getModel, listModel, postModel } = require("../contollers/index.js")

router.get("/:model", modelValidation, listModel)

router.get("/:model/:id", modelValidation, getModel)

router.post("/:model", modelValidation, postModel)
module.exports = router