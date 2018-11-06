const redis = require('redis');
const {promisify} = require('util');

const client = redis.createClient();
const getAsync = promisify(client.get).bind(client);
const incrAsync = promisify(client.incr).bind(client);

client.on("error", (err) => {
    console.log(`Error: ${err}`);
});

function moreLimes() {
    return incrAsync('limes').then(count => `${count} limes`);
}

function countLimes() {
    return getAsync('limes').then(count => `${count} limes.`);
}

moreLimes().then(console.log);
countLimes().then(console.log);
client.quit();
