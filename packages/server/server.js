
//Import Express and Apollo Server
const express = require('express');
const { ApolloServer } = require('apollo-server-express');

// Import postgres

const typeDefs = require('./modules/post/graphqlSchema');
const resolvers = require('./modules/post/resolvers');

const server = new ApolloServer({ typeDefs, resolvers });

const app = express();

// #7 Use the Express application as middleware in Apollo server
server.applyMiddleware({ app });

// #8 Set the port that the Express application will listen to
app.listen({ port: 3000 }, () => {
  console.log(`Server running on http://localhost:${port}${server.graphqlPath}`);
});