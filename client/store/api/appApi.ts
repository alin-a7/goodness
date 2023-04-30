import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { HYDRATE } from "next-redux-wrapper";

import {
  LoginUserDto,
  RegistrationFormState,
  UpdateUserDto,
  User,
  CreateDeedDto,
  Deed,
  UpdateDeedDto,
  changeFollowDto,
  RatingDto,
  CreateCommentDto,
} from "../types";

export const appApi = createApi({
  reducerPath: 'appApi',
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:5000",
  }),
  extractRehydrationInfo(action, { reducerPath }) {
    if (action.type === HYDRATE) {
      return action.payload[reducerPath];
    }
  },
  tagTypes: ["AllUsers", "User"],
  endpoints: (builder) => ({
    getAllUser: builder.query<User[], void>({
      query: () => `/user`,
      providesTags: (result) => ["AllUsers"],
    }),
    getUser: builder.query<User, string>({
      query: (id) => `/user/${id}`,
      providesTags: result => ['User'],
    }),

    createUser: builder.mutation<User, RegistrationFormState>({
      query: (user) => ({
        url: `/auth/registration`,
        method: "POST",
        body: user,
      }),
      invalidatesTags: ["AllUsers"],
    }),
    loginUser: builder.mutation<User, LoginUserDto>({
      query: (user) => ({
        url: `/auth/login`,
        method: "POST",
        body: user,
      }),
      invalidatesTags: ["AllUsers"],
    }),
    changeFollow: builder.mutation<User, changeFollowDto>({
      query: (body) => ({
        url: `/user/friend`,
        method: "POST",
        body: body,
      }),
      invalidatesTags: ["AllUsers", "User"],
    }),
    updateUser: builder.mutation<User, UpdateUserDto>({
      query: (user) => ({
        url: `/user`,
        method: "PATCH",
        body: user,
      }),
      invalidatesTags: ["AllUsers", "User"],
    }),
    deleteUser: builder.mutation<{ id: string }, string>({
      query: (id) => ({
        url: `/user/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["AllUsers"],
    }),
    createTodo: builder.mutation<Deed, CreateDeedDto>({
      query: (todo) => ({
        url: `/deed`,
        method: "POST",
        body: todo,
      }),
      invalidatesTags: ["User"],
    }),
    updateTodo: builder.mutation<Deed, UpdateDeedDto>({
      query: (todo) => ({
        url: `/deed`,
        method: "PATCH",
        body: todo,
      }),
      invalidatesTags: ["User"],
    }),
    upgradeRating: builder.mutation<User, RatingDto>({
      query: (dto) => ({
        url: `/user/rating`,
        method: "PATCH",
        body: dto,
      }),
      invalidatesTags: ["User"],
    }),
    deleteTodo: builder.mutation<{ id: string }, string>({
      query: (id) => ({
        url: `/deed/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["User"],
    }),
    createComment: builder.mutation<Deed, CreateCommentDto>({
      query: (comment) => ({
        url: `/deed/comment`,
        method: "POST",
        body: comment,
      }),
      invalidatesTags: ["User"],
    }),

  }),
});

export const {
  useCreateCommentMutation,
  useGetUserQuery,
  useGetAllUserQuery,
  useUpgradeRatingMutation,
  useCreateTodoMutation,
  useUpdateTodoMutation,
  useDeleteTodoMutation,
  useChangeFollowMutation,
  useCreateUserMutation,
  useDeleteUserMutation,
  useLoginUserMutation,
  useUpdateUserMutation,
  util: { getRunningQueriesThunk },
} = appApi;

export const { getAllUser, getUser } = appApi.endpoints;
