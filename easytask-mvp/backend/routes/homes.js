const router = require('express').Router();

router.get('/', async(req, res) => {
    res.send('<h3>Welcome to Easy Task...</h3>');
});

module.exports = router;