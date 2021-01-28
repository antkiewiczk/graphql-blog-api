const { prisma } = require("./generated/prisma-client");
const { GraphQLServer } = require("graphql-yoga");

// resolvers
const Query = require("./resolvers/Query");
const User = require("./resolvers/User");
const Mutation = require("./resolvers/Mutation");
const Link = require("./resolvers/Link");
const Subscription = require('./resolvers/Subscription');
const Vote = require('./resolvers/Vote');

const resolvers = {
  Query,
  Mutation,
  User,
  Link,
  Subscription,
  Vote
};

const server = new GraphQLServer({
  typeDefs: "./src/schema.graphql",
  resolvers,
  context: request => {
    return { ...request, prisma };
  }
});

server.start(() => console.log(`Server is running on http://localhost:4000`));
