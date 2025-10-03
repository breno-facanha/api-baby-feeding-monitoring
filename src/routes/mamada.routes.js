const { Router } = require("express");
const router = Router();
const { createMamada, getMamadas } = require('../controllers/mamada.controller'); 

router.get('/register', getMamadas)
router.post('/includes', createMamada);

module.exports = router;