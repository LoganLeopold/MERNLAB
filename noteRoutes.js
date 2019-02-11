const express = require('express');
const router = express.Router();
const noteControls = require('./noteControls');

router.get('/notes', noteControls.list)

module.exports = router
