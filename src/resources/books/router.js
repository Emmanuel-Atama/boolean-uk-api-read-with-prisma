const express = require("express");

const {  createOne, getAll, getOneById,
   // getByFictionType 
} = require("./controller");

const router = express.Router();

router.post ("/", createOne)

router.get("/", getAll);

router.get("/:id", getOneById)

// router.get("/:type", getByFictionType)
    
module.exports = router;