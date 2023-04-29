import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { HYDRATE } from "next-redux-wrapper";

import {
  LoginUserDto,
  RegistrationFormState,
  UpdateUserDto,
  User,
} from "../types/user";

export const userApi = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:5000",
  }),
  extractRehydrationInfo(action, { reducerPath }) {
    if (action.type === HYDRATE) {
      return action.payload[reducerPath];
    }
  },
  tagTypes: ["User"],
  endpoints: (builder) => ({
    getAllUser: builder.query<User[], void>({
      query: () => `/user`,
      providesTags: (result) => ["User"],
    }),
    getUser: builder.query<User, string>({
      query: (id) => `/user/${id}`,
    }),
    createUser: builder.mutation<User, RegistrationFormState>({
      query: (user) => ({
        url: `/auth/registration`,
        method: "POST",
        body: user,
      }),
      invalidatesTags: ["User"],
    }),
    loginUser: builder.mutation<User, LoginUserDto>({
      query: (user) => ({
        url: `/auth/login`,
        method: "POST",
        body: user,
      }),
      invalidatesTags: ["User"],
    }),
    updateUser: builder.mutation<UpdateUserDto, User>({
      query: (user) => ({
        url: `/user`,
        method: "PATCH",
        body: user,
      }),
      invalidatesTags: ["User"],
    }),
    deleteUser: builder.mutation<{ id: string }, { id: string }>({
      query: (id) => ({
        url: `/user/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["User"],
    }),
  }),
});

export const {
  useGetUserQuery,
  useGetAllUserQuery,
  useCreateUserMutation,
  useDeleteUserMutation,
  useLoginUserMutation,
  useUpdateUserMutation,
  util: { getRunningQueriesThunk },
} = userApi;

export const { getAllUser, getUser } = userApi.endpoints;
