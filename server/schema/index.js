const { ApolloServer } = require('apollo-server-express');
const typeDefs = require('./types.js');
const resolvers = require('./resolvers.js');
//setup the apollo server
const server = new ApolloServer({
  typeDefs: typeDefs,
  resolvers: resolvers,
  playground: { // access to the graphql playground (GraphiQL)
    endpoint: `http://localhost:3000/graphql`,
    settings: {
      'editor.theme': 'light'
    }
  }
});
module.exports = server;