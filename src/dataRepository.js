const { redisClient } = require('./redis')

function getData(fromDate, toDate, currency) {
    var getDataArgs = [ 'timeData', fromDate, toDate ]

    return new Promise(resolve => {
        redisClient.zrangebyscore(getDataArgs, (err, response) => {
            if (err) throw err;
            
            const data = []
            if (response.length === 0) {
                (resolve)(data)
            }

            for(let id of response) {
                redisClient.hgetall('data:' + currency + ':' + id, (err, dataItem) => {
                    data.push(dataItem)
                    if (data.length === response.length) {
                       (resolve)(data)
                    }
                })
            }
        })
    })
}

module.exports = {
    getDataFromRepo: getData
}
