import { IService } from '@/context/api/types'
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const BASE_URL = process.env.NEXT_PUBLIC_API_ROOT as string

export const serviceApi = createApi({
  reducerPath: 'serviceApi',
  baseQuery: fetchBaseQuery({
    baseUrl: `${BASE_URL}/api/locations/`,
  }),
  tagTypes: ['Service'],
  endpoints: builder => ({
    getServices: builder.query<IService[], null>({
      query() {
        return {
          url: '',
        }
      },
    }),
  }),
})

export const { useGetServicesQuery } = serviceApi
