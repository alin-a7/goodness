import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { HYDRATE } from "next-redux-wrapper";

import { User } from "../types/user";

export const userApi = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:5000",
  }),
  extractRehydrationInfo(action, { reducerPath }) {
    if (action.type === HYDRATE) {
      return action.payload[reducerPath];
    }
  },
  tagTypes: ['User'],
  endpoints: (builder) => ({
    getAllUser: builder.query<User[], void>({
      query: () => `user`,
    }),
  }),
});

export const {
  useGetAllUserQuery,
  util: { getRunningQueriesThunk },
} = userApi;

export const { getAllUser } = userApi.endpoints;