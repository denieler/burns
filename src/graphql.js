var { graphql, buildSchema } = require('graphql')
var { getDataFromRepo } = require('./dataRepository')

// Construct a schema, using GraphQL schema language
var schema = buildSchema(`
  type ChartData {
    date: String
    open: Float
    high: Float
    low: Float
    close: Float
    volume: Float
  }

  type Query {
    getData(fromDate: String, toDate: String, currency: String): [ChartData]
  }
`)

class ChartData {
  constructor(date, open, high, low, close, volume) {
    this.date = date
    this.open = open
    this.high = high
    this.low = low
    this.close = close
    this.volume = volume
  }
}

// The root provides a resolver function for each API endpoint
var root = {
  getData: ({fromDate, toDate, currency}) => {
    return getDataFromRepo(fromDate, toDate, currency)
    .then(data => {
      return data.map(x => new ChartData(null, null, x.ask, x.bid, null, null))
    })
  },
}

module.exports = {
    root: root,
    schema: schema
}
