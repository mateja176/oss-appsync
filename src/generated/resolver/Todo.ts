// This resolver file was scaffolded by github.com/prisma/graphqlgen, DO NOT EDIT.
// Please do not import this file directly but copy & paste to your application code.

import { TodoResolvers } from '../graphqlgen';

export const Todo: TodoResolvers.Type = {
  ...TodoResolvers.defaultResolvers,

  author: (parent, args, ctx) => {
    throw new Error('Resolver not implemented');
  },
};
