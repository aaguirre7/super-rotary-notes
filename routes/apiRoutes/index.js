const router = require('express').Router();
const addNotes = require('../apiRoutes/notesAdd');
const removeNotes = require('../apiRoutes/notesRemove');

router.use(addNotes);
router.use(removeNotes);

module.exports = router;