import {
  GraphQLObjectType,
  GraphQLString,
  GraphQLList,
  GraphQLNonNull,
  GraphQLInt,
} from 'graphql';
import getUsers from '../Data/function';

const users = new GraphQLObjectType({
  name: 'users',
  fields: () => ({
    id: { type: new GraphQLNonNull(GraphQLInt) },
    name: { type: new GraphQLNonNull(GraphQLString) },
    friends: {
      type: new GraphQLNonNull(GraphQLList(users)),
      resolve: user => user.friends.map(getUsers),
    },
  }),
});

export default users;
