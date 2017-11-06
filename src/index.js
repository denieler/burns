const redis = require('redis')
const Promise = require('bluebird')
Promise.promisifyAll(redis.RedisClient.prototype)
Promise.promisifyAll(redis.Multi.prototype)

const express = require('express')
const graphqlHTTP = require('express-graphql')
const app = express()

const graphql = require('./graphql')

app.use('/graphql', graphqlHTTP({
  schema: graphql.schema,
  rootValue: graphql.root,
  graphiql: true,
}))

app.listen(process.env.PORT || 4000)
console.log(`Running a GraphQL API server at localhost:${process.env.PORT || 4000}/graphql`)
