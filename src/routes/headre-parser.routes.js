const {
    homePage,
    headerParser,
} = require('../controllers/header-parser.controller');
const router = require('express').Router();

// http://expressjs.com/en/starter/basic-routing.html
router.get('/', homePage);
router.get('/api/whoami', headerParser);

module.exports = router;
