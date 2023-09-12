const express = require("express");

const mainRoutes = require(`../controllers/mainControllers`)

const router = express.Router();

router.get('/', mainRoutes.getHome)

module.exports = router;