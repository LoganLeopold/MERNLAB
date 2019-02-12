const express = require('express');
const router = express.Router();
const noteControls = require('./noteControls');
const methodOverride = require('method-override');

router.get('/', noteControls.list)
router.delete('/notes/:id/delete', noteControls.delete)

module.exports = router
