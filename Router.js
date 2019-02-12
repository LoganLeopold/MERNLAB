const express = require("express");
const router = express.Router();
const methodOverride = require('method-override');

router.use('/', require('./noteRoutes'))

module.exports = router