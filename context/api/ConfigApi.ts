import { IConfig } from '@/context/api/types'
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const BASE_URL = process.env.NEXT_PUBLIC_API_ROOT as string

interface IConfigGet {
  accessToken: string
  orderId: number
}

export const configApi = createApi({
  reducerPath: 'configApi',
  baseQuery: fetchBaseQuery({
    baseUrl: `${BASE_URL}/api/user-configs`,
  }),
  tagTypes: ['Config'],
  endpoints: builder => ({
    getConfig: builder.query<IConfig[], IConfigGet>({
      query({ accessToken, orderId }) {
        return {
          url: `/${orderId}/`,
          headers: { Authorization: `Token ${accessToken}` },
        }
      },
    }),
  }),
})

export const { useGetConfigQuery } = configApi
