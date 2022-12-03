const express = require("express");
const router = express.Router();

const personController = require("../middleware/PersonController")


router.post("/createPerson",personController.createPerson);
router.get("/getAllPerson",personController.getAllPerson);
router.post("/updatePerson",personController.updatePerson) ;
router.post("/deletePerson", personController.deletePerson);


module.exports = router;