const express = require("express");

const { getAll, getOneById, getByFictionType } = require("./controller");

const router = express.Router();

router.get("/", getAll);

router.get("/:id", getOneById)

router.get("/:type", getByFictionType)
    
module.exports = router;