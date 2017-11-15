const redis = require('redis')

const redisClient = redis.createClient({
    url: process.env.REDIS_URL
})

redisClient.on('error', function (err) {
    console.log('Error ' + err)
})

module.exports = {
    redisClient: redisClient
}
