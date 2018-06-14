import {
  GraphQLObjectType,
  GraphQLString,
  GraphQLList,
  GraphQLNonNull,
  GraphQLInt,
} from 'graphql';

const users = new GraphQLObjectType({
  name: 'users',
  fields: () => ({
    id: { type: new GraphQLNonNull(GraphQLInt) },
    name: { type: new GraphQLNonNull(GraphQLString) },
    friends: {
      type: new GraphQLNonNull(GraphQLList(users)),
      resolve: (user, args, { loaders }) => loaders.person.loadMany(user.friends),
    },
  }),
});

export default users;
