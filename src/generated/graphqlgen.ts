// Code generated by github.com/prisma/graphqlgen, DO NOT EDIT.

import { GraphQLResolveInfo } from 'graphql';
import { Todo, User } from './models';
import { Context } from '../models/context';

export type SortDirection = 'asc' | 'desc';

export namespace QueryResolvers {
  export const defaultResolvers = {};

  export interface TodoFilterInput {
    id?: IDFilterInput | null;
    title?: StringFilterInput | null;
    description?: StringFilterInput | null;
    completed?: BooleanFilterInput | null;
  }
  export interface TodoSortInput {
    title?: SortDirection | null;
    description?: SortDirection | null;
    completed?: SortDirection | null;
    author?: SortDirection | null;
  }
  export interface UserFilterInput {
    id?: IDFilterInput | null;
    name?: StringFilterInput | null;
  }
  export interface UserSortInput {
    name?: SortDirection | null;
    todos?: SortDirection | null;
  }
  export interface IDFilterInput {
    equals: string;
    not: string;
  }
  export interface StringFilterInput {
    equals: string;
    not: string;
    le: string;
    lt: string;
    lte: string;
    ge: string;
    gt: string;
    gte: string;
    in?: string[] | null;
    notIn?: string[] | null;
    contains?: string | null;
    notContains?: string | null;
    startsWith?: string | null;
    endsWith?: string | null;
  }
  export interface BooleanFilterInput {
    equals: boolean;
    not: boolean;
  }

  export interface ArgsTodo {
    id: string;
  }

  export interface ArgsTodos {
    limit?: number | null;
    offset?: number | null;
    filter?: TodoFilterInput | null;
    sort?: Array<TodoSortInput | null> | null;
  }

  export interface ArgsUser {
    id: string;
  }

  export interface ArgsUsers {
    limit?: number | null;
    offset?: number | null;
    filter?: UserFilterInput | null;
    sort?: Array<UserSortInput | null> | null;
  }

  export type TodoResolver =
    | ((
        parent: undefined,
        args: ArgsTodo,
        ctx: Context,
        info: GraphQLResolveInfo,
      ) => Todo | Promise<Todo>)
    | {
        fragment: string;
        resolve: (
          parent: undefined,
          args: ArgsTodo,
          ctx: Context,
          info: GraphQLResolveInfo,
        ) => Todo | Promise<Todo>;
      };

  export type TodosResolver =
    | ((
        parent: undefined,
        args: ArgsTodos,
        ctx: Context,
        info: GraphQLResolveInfo,
      ) => Todo[] | Promise<Todo[]>)
    | {
        fragment: string;
        resolve: (
          parent: undefined,
          args: ArgsTodos,
          ctx: Context,
          info: GraphQLResolveInfo,
        ) => Todo[] | Promise<Todo[]>;
      };

  export type UserResolver =
    | ((
        parent: undefined,
        args: ArgsUser,
        ctx: Context,
        info: GraphQLResolveInfo,
      ) => User | Promise<User>)
    | {
        fragment: string;
        resolve: (
          parent: undefined,
          args: ArgsUser,
          ctx: Context,
          info: GraphQLResolveInfo,
        ) => User | Promise<User>;
      };

  export type UsersResolver =
    | ((
        parent: undefined,
        args: ArgsUsers,
        ctx: Context,
        info: GraphQLResolveInfo,
      ) => User[] | Promise<User[]>)
    | {
        fragment: string;
        resolve: (
          parent: undefined,
          args: ArgsUsers,
          ctx: Context,
          info: GraphQLResolveInfo,
        ) => User[] | Promise<User[]>;
      };

  export interface Type {
    todo:
      | ((
          parent: undefined,
          args: ArgsTodo,
          ctx: Context,
          info: GraphQLResolveInfo,
        ) => Todo | Promise<Todo>)
      | {
          fragment: string;
          resolve: (
            parent: undefined,
            args: ArgsTodo,
            ctx: Context,
            info: GraphQLResolveInfo,
          ) => Todo | Promise<Todo>;
        };

    todos:
      | ((
          parent: undefined,
          args: ArgsTodos,
          ctx: Context,
          info: GraphQLResolveInfo,
        ) => Todo[] | Promise<Todo[]>)
      | {
          fragment: string;
          resolve: (
            parent: undefined,
            args: ArgsTodos,
            ctx: Context,
            info: GraphQLResolveInfo,
          ) => Todo[] | Promise<Todo[]>;
        };

    user:
      | ((
          parent: undefined,
          args: ArgsUser,
          ctx: Context,
          info: GraphQLResolveInfo,
        ) => User | Promise<User>)
      | {
          fragment: string;
          resolve: (
            parent: undefined,
            args: ArgsUser,
            ctx: Context,
            info: GraphQLResolveInfo,
          ) => User | Promise<User>;
        };

    users:
      | ((
          parent: undefined,
          args: ArgsUsers,
          ctx: Context,
          info: GraphQLResolveInfo,
        ) => User[] | Promise<User[]>)
      | {
          fragment: string;
          resolve: (
            parent: undefined,
            args: ArgsUsers,
            ctx: Context,
            info: GraphQLResolveInfo,
          ) => User[] | Promise<User[]>;
        };
  }
}

export namespace TodoResolvers {
  export const defaultResolvers = {
    id: (parent: Todo) => parent.id,
    title: (parent: Todo) => parent.title,
    description: (parent: Todo) => parent.description,
    completed: (parent: Todo) => parent.completed,
  };

  export type IdResolver =
    | ((
        parent: Todo,
        args: {},
        ctx: Context,
        info: GraphQLResolveInfo,
      ) => string | Promise<string>)
    | {
        fragment: string;
        resolve: (
          parent: Todo,
          args: {},
          ctx: Context,
          info: GraphQLResolveInfo,
        ) => string | Promise<string>;
      };

  export type TitleResolver =
    | ((
        parent: Todo,
        args: {},
        ctx: Context,
        info: GraphQLResolveInfo,
      ) => string | Promise<string>)
    | {
        fragment: string;
        resolve: (
          parent: Todo,
          args: {},
          ctx: Context,
          info: GraphQLResolveInfo,
        ) => string | Promise<string>;
      };

  export type DescriptionResolver =
    | ((
        parent: Todo,
        args: {},
        ctx: Context,
        info: GraphQLResolveInfo,
      ) => string | Promise<string>)
    | {
        fragment: string;
        resolve: (
          parent: Todo,
          args: {},
          ctx: Context,
          info: GraphQLResolveInfo,
        ) => string | Promise<string>;
      };

  export type CompletedResolver =
    | ((
        parent: Todo,
        args: {},
        ctx: Context,
        info: GraphQLResolveInfo,
      ) => boolean | Promise<boolean>)
    | {
        fragment: string;
        resolve: (
          parent: Todo,
          args: {},
          ctx: Context,
          info: GraphQLResolveInfo,
        ) => boolean | Promise<boolean>;
      };

  export type AuthorResolver =
    | ((
        parent: Todo,
        args: {},
        ctx: Context,
        info: GraphQLResolveInfo,
      ) => User | Promise<User>)
    | {
        fragment: string;
        resolve: (
          parent: Todo,
          args: {},
          ctx: Context,
          info: GraphQLResolveInfo,
        ) => User | Promise<User>;
      };

  export interface Type {
    id:
      | ((
          parent: Todo,
          args: {},
          ctx: Context,
          info: GraphQLResolveInfo,
        ) => string | Promise<string>)
      | {
          fragment: string;
          resolve: (
            parent: Todo,
            args: {},
            ctx: Context,
            info: GraphQLResolveInfo,
          ) => string | Promise<string>;
        };

    title:
      | ((
          parent: Todo,
          args: {},
          ctx: Context,
          info: GraphQLResolveInfo,
        ) => string | Promise<string>)
      | {
          fragment: string;
          resolve: (
            parent: Todo,
            args: {},
            ctx: Context,
            info: GraphQLResolveInfo,
          ) => string | Promise<string>;
        };

    description:
      | ((
          parent: Todo,
          args: {},
          ctx: Context,
          info: GraphQLResolveInfo,
        ) => string | Promise<string>)
      | {
          fragment: string;
          resolve: (
            parent: Todo,
            args: {},
            ctx: Context,
            info: GraphQLResolveInfo,
          ) => string | Promise<string>;
        };

    completed:
      | ((
          parent: Todo,
          args: {},
          ctx: Context,
          info: GraphQLResolveInfo,
        ) => boolean | Promise<boolean>)
      | {
          fragment: string;
          resolve: (
            parent: Todo,
            args: {},
            ctx: Context,
            info: GraphQLResolveInfo,
          ) => boolean | Promise<boolean>;
        };

    author:
      | ((
          parent: Todo,
          args: {},
          ctx: Context,
          info: GraphQLResolveInfo,
        ) => User | Promise<User>)
      | {
          fragment: string;
          resolve: (
            parent: Todo,
            args: {},
            ctx: Context,
            info: GraphQLResolveInfo,
          ) => User | Promise<User>;
        };
  }
}

export namespace UserResolvers {
  export const defaultResolvers = {
    id: (parent: User) => parent.id,
    name: (parent: User) => parent.name,
  };

  export type IdResolver =
    | ((
        parent: User,
        args: {},
        ctx: Context,
        info: GraphQLResolveInfo,
      ) => string | Promise<string>)
    | {
        fragment: string;
        resolve: (
          parent: User,
          args: {},
          ctx: Context,
          info: GraphQLResolveInfo,
        ) => string | Promise<string>;
      };

  export type NameResolver =
    | ((
        parent: User,
        args: {},
        ctx: Context,
        info: GraphQLResolveInfo,
      ) => string | Promise<string>)
    | {
        fragment: string;
        resolve: (
          parent: User,
          args: {},
          ctx: Context,
          info: GraphQLResolveInfo,
        ) => string | Promise<string>;
      };

  export type TodosResolver =
    | ((
        parent: User,
        args: {},
        ctx: Context,
        info: GraphQLResolveInfo,
      ) => Todo[] | Promise<Todo[]>)
    | {
        fragment: string;
        resolve: (
          parent: User,
          args: {},
          ctx: Context,
          info: GraphQLResolveInfo,
        ) => Todo[] | Promise<Todo[]>;
      };

  export interface Type {
    id:
      | ((
          parent: User,
          args: {},
          ctx: Context,
          info: GraphQLResolveInfo,
        ) => string | Promise<string>)
      | {
          fragment: string;
          resolve: (
            parent: User,
            args: {},
            ctx: Context,
            info: GraphQLResolveInfo,
          ) => string | Promise<string>;
        };

    name:
      | ((
          parent: User,
          args: {},
          ctx: Context,
          info: GraphQLResolveInfo,
        ) => string | Promise<string>)
      | {
          fragment: string;
          resolve: (
            parent: User,
            args: {},
            ctx: Context,
            info: GraphQLResolveInfo,
          ) => string | Promise<string>;
        };

    todos:
      | ((
          parent: User,
          args: {},
          ctx: Context,
          info: GraphQLResolveInfo,
        ) => Todo[] | Promise<Todo[]>)
      | {
          fragment: string;
          resolve: (
            parent: User,
            args: {},
            ctx: Context,
            info: GraphQLResolveInfo,
          ) => Todo[] | Promise<Todo[]>;
        };
  }
}

export namespace MutationResolvers {
  export const defaultResolvers = {};

  export interface TodoCreateInput {
    title: string;
    description: string;
    completed: boolean;
    author: string;
  }
  export interface TodoUpdateInput {
    id: string;
    title?: string | null;
    description?: string | null;
    completed?: boolean | null;
    author?: string | null;
  }
  export interface UserCreateInput {
    name: string;
    todos: Todo[];
  }
  export interface UserUpdateInput {
    id: string;
    name?: string | null;
    todos?: Todo[] | null;
  }

  export interface ArgsCreateTodo {
    input: TodoCreateInput;
  }

  export interface ArgsUpdateTodo {
    input: TodoUpdateInput;
  }

  export interface ArgsDeleteTodo {
    id: string;
  }

  export interface ArgsCreateUser {
    input: UserCreateInput;
  }

  export interface ArgsUpdateUser {
    input: UserUpdateInput;
  }

  export interface ArgsDeleteUser {
    id: string;
  }

  export type CreateTodoResolver =
    | ((
        parent: undefined,
        args: ArgsCreateTodo,
        ctx: Context,
        info: GraphQLResolveInfo,
      ) => Todo | Promise<Todo>)
    | {
        fragment: string;
        resolve: (
          parent: undefined,
          args: ArgsCreateTodo,
          ctx: Context,
          info: GraphQLResolveInfo,
        ) => Todo | Promise<Todo>;
      };

  export type UpdateTodoResolver =
    | ((
        parent: undefined,
        args: ArgsUpdateTodo,
        ctx: Context,
        info: GraphQLResolveInfo,
      ) => Todo | Promise<Todo>)
    | {
        fragment: string;
        resolve: (
          parent: undefined,
          args: ArgsUpdateTodo,
          ctx: Context,
          info: GraphQLResolveInfo,
        ) => Todo | Promise<Todo>;
      };

  export type DeleteTodoResolver =
    | ((
        parent: undefined,
        args: ArgsDeleteTodo,
        ctx: Context,
        info: GraphQLResolveInfo,
      ) => Todo | Promise<Todo>)
    | {
        fragment: string;
        resolve: (
          parent: undefined,
          args: ArgsDeleteTodo,
          ctx: Context,
          info: GraphQLResolveInfo,
        ) => Todo | Promise<Todo>;
      };

  export type CreateUserResolver =
    | ((
        parent: undefined,
        args: ArgsCreateUser,
        ctx: Context,
        info: GraphQLResolveInfo,
      ) => User | Promise<User>)
    | {
        fragment: string;
        resolve: (
          parent: undefined,
          args: ArgsCreateUser,
          ctx: Context,
          info: GraphQLResolveInfo,
        ) => User | Promise<User>;
      };

  export type UpdateUserResolver =
    | ((
        parent: undefined,
        args: ArgsUpdateUser,
        ctx: Context,
        info: GraphQLResolveInfo,
      ) => User | Promise<User>)
    | {
        fragment: string;
        resolve: (
          parent: undefined,
          args: ArgsUpdateUser,
          ctx: Context,
          info: GraphQLResolveInfo,
        ) => User | Promise<User>;
      };

  export type DeleteUserResolver =
    | ((
        parent: undefined,
        args: ArgsDeleteUser,
        ctx: Context,
        info: GraphQLResolveInfo,
      ) => User | Promise<User>)
    | {
        fragment: string;
        resolve: (
          parent: undefined,
          args: ArgsDeleteUser,
          ctx: Context,
          info: GraphQLResolveInfo,
        ) => User | Promise<User>;
      };

  export interface Type {
    createTodo:
      | ((
          parent: undefined,
          args: ArgsCreateTodo,
          ctx: Context,
          info: GraphQLResolveInfo,
        ) => Todo | Promise<Todo>)
      | {
          fragment: string;
          resolve: (
            parent: undefined,
            args: ArgsCreateTodo,
            ctx: Context,
            info: GraphQLResolveInfo,
          ) => Todo | Promise<Todo>;
        };

    updateTodo:
      | ((
          parent: undefined,
          args: ArgsUpdateTodo,
          ctx: Context,
          info: GraphQLResolveInfo,
        ) => Todo | Promise<Todo>)
      | {
          fragment: string;
          resolve: (
            parent: undefined,
            args: ArgsUpdateTodo,
            ctx: Context,
            info: GraphQLResolveInfo,
          ) => Todo | Promise<Todo>;
        };

    deleteTodo:
      | ((
          parent: undefined,
          args: ArgsDeleteTodo,
          ctx: Context,
          info: GraphQLResolveInfo,
        ) => Todo | Promise<Todo>)
      | {
          fragment: string;
          resolve: (
            parent: undefined,
            args: ArgsDeleteTodo,
            ctx: Context,
            info: GraphQLResolveInfo,
          ) => Todo | Promise<Todo>;
        };

    createUser:
      | ((
          parent: undefined,
          args: ArgsCreateUser,
          ctx: Context,
          info: GraphQLResolveInfo,
        ) => User | Promise<User>)
      | {
          fragment: string;
          resolve: (
            parent: undefined,
            args: ArgsCreateUser,
            ctx: Context,
            info: GraphQLResolveInfo,
          ) => User | Promise<User>;
        };

    updateUser:
      | ((
          parent: undefined,
          args: ArgsUpdateUser,
          ctx: Context,
          info: GraphQLResolveInfo,
        ) => User | Promise<User>)
      | {
          fragment: string;
          resolve: (
            parent: undefined,
            args: ArgsUpdateUser,
            ctx: Context,
            info: GraphQLResolveInfo,
          ) => User | Promise<User>;
        };

    deleteUser:
      | ((
          parent: undefined,
          args: ArgsDeleteUser,
          ctx: Context,
          info: GraphQLResolveInfo,
        ) => User | Promise<User>)
      | {
          fragment: string;
          resolve: (
            parent: undefined,
            args: ArgsDeleteUser,
            ctx: Context,
            info: GraphQLResolveInfo,
          ) => User | Promise<User>;
        };
  }
}

export interface Resolvers {
  Query: QueryResolvers.Type;
  Todo: TodoResolvers.Type;
  User: UserResolvers.Type;
  Mutation: MutationResolvers.Type;
}

// @ts-ignore
declare module 'graphql-tools' {
  interface IResolvers extends Resolvers {}
}
