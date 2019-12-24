const graphQL = require('graphql');
const api = require('./../api/users');

const { GraphQLObjectType, GraphQLString, GraphQLInt, GraphQLSchema } = graphQL;

const UserType = new GraphQLObjectType({
  name: 'User',
  fields: {
    id: { type: GraphQLInt },
    username: { type: GraphQLString },
    name: { type: GraphQLString },
    email: { type: GraphQLString },
    phone: { type: GraphQLString },
    website: { type: GraphQLString }
  }
});

const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    user: {
      type: UserType,
      args: {
        id: { type: GraphQLInt }
      },
      resolve: (_parentValue, args) => api.fetchUser(args.id)
    }
  }
});

module.exports = new GraphQLSchema({ query: RootQuery });
