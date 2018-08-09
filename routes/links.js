const redisClient = require('../modules/redis');
const bodyParser = require('body-parser');
const shortid = require('shortid');
const router = require('express').Router();

router.use(bodyParser.urlencoded({extended: false}));

router.get('/', async (req, res) => {
    res.send('OK👌');
    console.log('OK👌');
});


router.post('/', async (req, res) => {
    if (!req.body || !req.body.originalLink) return res.sendStatus(400);
    console.log(req.body);
    const urlId = req.body.name ? req.body.name : shortid.generate();
    redisClient.setAsync(urlId, req.body.originalLink, 'EX', req.body.exp ? req.body.exp : 2628003);
    res.send('200👌 ' + urlId);
});



exports.router = router;