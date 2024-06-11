const express = require('express');
const { body } = require('express-validator');

const fideleController = require('../controllers/fidele');

const router = express.Router();

router.get('/addFidele', fideleController.pageAjoutRDV);
router.post('/fidele/delete/:id', fideleController.deleteFidele);
router.post('/fidele', fideleController.addFidele);
router.get('/pageBravo',fideleController.pageBravo);
router.get('/pageTableau',fideleController.pageTableau);
router.get('/pageConsult/:id',fideleController.pageConsult);
router.get('/pageEdit/:id',fideleController.pageEdit);
router.post('/fidele/update/:id', fideleController.updateFidele);

module.exports = router;