import {
  GraphQLInt,
  GraphQLNonNull,
  GraphQLObjectType,
} from 'graphql';

import users from './types';
import getUsers from '../Data/function';

const findUser = {
  type: users,
  args: {
    id: { type: new GraphQLNonNull(GraphQLInt) },
  },
  resolve: (_, { id }) => {
    try {
      return getUsers(id);
    } catch (error) {
      throw new Error(error);
    }
  },
};

export default new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    findUser,
  },
});
