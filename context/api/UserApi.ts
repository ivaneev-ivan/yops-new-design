import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { setUser } from '@/context/features/UserSlice';
import { IUser } from './types';

const BASE_URL = process.env.NEXT_PUBLIC_API_ROOT as string;

export const userApi = createApi({
  reducerPath: 'userApi',
  baseQuery: fetchBaseQuery({
    baseUrl: `${BASE_URL}/auth/users/`,
  }),
  tagTypes: ['User'],
  endpoints: (builder) => ({
    getMe: builder.query<IUser, string>({
      query(token: string) {
        return {
          url: 'me/',
          headers: { Authorization: `Token ${token}` },
        };
      },
      transformResponse: (result: { data: IUser }) => result.data,
      async onQueryStarted(args, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;
          dispatch(setUser({ ...data, accessToken: args }));
        } catch (error) {
          /* empty */
        }
      },
    }),
  }),
});
