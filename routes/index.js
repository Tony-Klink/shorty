const url = require('url');
const router = require('express').Router();
const redisClient = require('../modules/redis');
const linksRouter = require('./links');

router.use('/links', linksRouter.router);

router.get('/', async (req, res) => {
    res.send('Welcome to SHORTY!');
});

router.get('/:link', async (req, res) => {
    const dataString = await redisClient.getAsync(req.params.link);
    if (dataString && hasProtocol(dataString)) {
        res.redirect(dataString);
    } else {
        res.send('Data: ' + dataString);
    }
});

function hasProtocol(urlString) {
    const result = url.parse(urlString);
    if (result.protocol) {
        return true;
    } else {
        return false;
    }
}

exports.router = router;