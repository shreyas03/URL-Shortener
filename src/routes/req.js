const express = require("express")
const metController = require("../controller/met")

const router = express.Router()

router
    .get("/",metController.getInd)
    .post("/shortUrls",metController.createU)
    .get("/:shortUrl", metController.getSh)
exports.router = router