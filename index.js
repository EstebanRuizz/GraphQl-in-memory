const express = require("express");
const { ApolloServer } = require("apollo-server-express");
const morgan = require("morgan");
const bookTypeDefs = require("./src/typeDefs/bookTypeDefs");
const authorTypeDefs = require("./src/typeDefs/authorTypeDefs");
const bookResolvers = require("./src/resolvers/book");
const authorResolvers = require("./src/resolvers/author");

const { mergeTypeDefs, mergeResolvers } = require("@graphql-tools/merge");

const app = express();
app.use(morgan("dev"));

const server = new ApolloServer({
  typeDefs: mergeTypeDefs([bookTypeDefs, authorTypeDefs]),
  resolvers: mergeResolvers([bookResolvers, authorResolvers]),
});

// Iniciamos el servidor Apollo
async function startApolloServer() {
  await server.start();
  server.applyMiddleware({ app });
  const PORT = 4000;
  app.listen({ port: PORT }, () => {
    console.log(`http://localhost:${PORT}${server.graphqlPath}`);
  });
}
startApolloServer();
