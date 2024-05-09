import { setUser } from '@/context/features/UserSlice'
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

interface IAuthData {
  email: string
  password: string
}

const BASE_URL = process.env.NEXT_PUBLIC_API_ROOT as string
export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({
    baseUrl: `${BASE_URL}/auth/`,
  }),
  endpoints: builder => ({
    loginUser: builder.mutation<{ auth_token: string }, IAuthData>({
      query(data) {
        return {
          url: 'token/login/',
          method: 'POST',
          body: data,
          // credentials: 'include',
        }
      },
      async onQueryStarted(args, { dispatch, queryFulfilled }) {
        const a = await queryFulfilled
        const token = a.data.auth_token
        await dispatch(setUser({ accessToken: token }))
      },
    }),
    registerUser: builder.mutation<void, IAuthData>({
      query(data) {
        return {
          url: 'users/',
          method: 'POST',
          body: data,
        }
      },
      async onQueryStarted(args, { dispatch, queryFulfilled }) {
        try {
          await queryFulfilled
          await dispatch(authApi.endpoints?.loginUser.initiate(args))
        } catch (error) {
          /* empty */
        }
      },
    }),
  }),
})

export const { useLoginUserMutation, useRegisterUserMutation } = authApi
