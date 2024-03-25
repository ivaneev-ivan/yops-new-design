import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { userApi } from './UserApi';

interface IAuthData {
  email: string;
  password: string;
}

const BASE_URL = process.env.NEXT_PUBLIC_API_ROOT as string;
export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({
    baseUrl: `${BASE_URL}/auth/`,
  }),
  endpoints: (builder) => ({
    loginUser: builder.mutation<{ auth_token: string; status: string }, IAuthData>({
      query(data) {
        return {
          url: 'token/login/',
          method: 'POST',
          body: data,
          // credentials: 'include',
        };
      },
      async onQueryStarted(args, { dispatch, queryFulfilled }) {
        try {
          const a = await queryFulfilled;
          const token = a.data.auth_token;
          await dispatch(userApi.endpoints.getMe.initiate(token));
        } catch (error) {
          /* empty */
        }
      },
    }),
    registerUser: builder.mutation<void, IAuthData>({
      query(data) {
        return {
          url: 'users/',
          method: 'POST',
          body: data,
        };
      },
      async onQueryStarted(args, { dispatch, queryFulfilled }) {
        try {
          await queryFulfilled;
          await dispatch(authApi.endpoints?.loginUser.initiate(args));
        } catch (error) {
          /* empty */
        }
      },
    }),
  }),
});

export const { useLoginUserMutation, useRegisterUserMutation } = authApi;
