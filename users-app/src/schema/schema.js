const graphQL = require('graphql');
const api = require('./../api');

const { GraphQLObjectType, GraphQLString, GraphQLSchema, GraphQLList, GraphQLNonNull } = graphQL;

const UserType = new GraphQLObjectType({
  name: 'User',
  fields: () => ({
    id: { type: GraphQLString },
    username: { type: GraphQLString },
    name: { type: GraphQLString },
    email: { type: GraphQLString },
    phone: { type: GraphQLString },
    website: { type: GraphQLString },
    company: {
      type: CompanyType,
      resolve: (parentValue, _args) => api.fetchCompany(parentValue.companyId)
    }
  })
});

const CompanyType = new GraphQLObjectType({
  name: 'Company',
  fields: () => ({
    id: { type: GraphQLString },
    name: { type: GraphQLString },
    catchPhrase: { type: GraphQLString },
    bs: { type: GraphQLString },
    users: {
      type: new GraphQLList(UserType),
      resolve: (parentValue, _args) => api.fetchCompanyUsers(parentValue.id)
    }
  })
});

const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    user: {
      type: UserType,
      args: {
        id: { type: GraphQLString }
      },
      resolve: (_parentValue, args) => api.fetchUser(args.id)
    },
    company: {
      type: CompanyType,
      args: {
        id: { type: GraphQLString }
      },
      resolve: (_parentValue, args) => api.fetchCompany(args.id)
    }
  }
});

const DatalessResponse = new GraphQLObjectType({
  name: 'DatalessResponse',
  fields: {
    status: { type: GraphQLString }
  }
});

const RootMutation = new GraphQLObjectType({
  name: 'RootMutationType',
  fields: {
    addUser: {
      type: UserType,
      args: {
        name: { type: new GraphQLNonNull(GraphQLString) },
        username: { type: GraphQLString },
        email: { type: GraphQLString },
        phone: { type: GraphQLString },
        website: { type: GraphQLString },
        companyId: { type: GraphQLString }
      },
      resolve: (_parentValue, args) => api.createUser(args)
    },
    deleteUser: {
      type: DatalessResponse,
      args: {
        id: { type: new GraphQLNonNull(GraphQLString) }
      },
      resolve: (_parentValue, { id }) => {
        return api.deleteUser(id).then(() => {
          return { status: `User with id '${id}' was successfully deleted` };
        });
      }
    }
  }
});

module.exports = new GraphQLSchema({
  query: RootQuery,
  mutation: RootMutation
});
