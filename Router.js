const express = require("express");
const router = express.Router();

router.use('/', require('./noteRoutes'))

module.exports = router