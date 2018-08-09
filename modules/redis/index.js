const redis = require('redis');
const {promisify} = require('util');

const client = redis.createClient();

client.on('error', (err) => {
    console.log('Error: ', err);
});


exports.getAsync = promisify(client.get).bind(client);
exports.setAsync = promisify(client.set).bind(client);