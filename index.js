import express from "express"
import { db } from "./db.js"
import { ApolloServer } from "apollo-server-express"
import { typeDefs } from "./typeDefs.js"
import { resolvers } from "./resolvers.js"
import cors from "cors"
async function startServer() {
  const app = express()
  app.use(cors())
  const server = new ApolloServer({
    typeDefs,
    resolvers
  })
  await server.start()
  server.applyMiddleware({ app })
  app.listen(1234, () => {
    console.log("hello graphql ...")
    db()
    console.log(`server 1234${server.graphqlPath}`)
  })
}

startServer() 