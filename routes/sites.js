var express = require('express');
var router = express.Router();
const { create, getAll, edit, deleteSite } = require('../controllers/SiteController');

router.post('/create', create);
router.get('/', getAll);
router.put('/edit/:id', edit);
router.delete('/delete/:id', deleteSite);

module.exports = router;
