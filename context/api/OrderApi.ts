import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { IOrder } from '@/context/api/types';

const BASE_URL = process.env.NEXT_PUBLIC_API_ROOT as string;

export const orderApi = createApi({
  reducerPath: 'userApi',
  baseQuery: fetchBaseQuery({
    baseUrl: `${BASE_URL}/api/orders`,
  }),
  tagTypes: ['Order'],
  endpoints: (builder) => ({
    getOrders: builder.query<IOrder[], string>({
      query(token: string) {
        return {
          url: '',
          headers: { Authorization: `Token ${token}` },
        };
      },
    }),
    createOrder: builder.mutation<IOrder, Omit<Omit<Omit<IOrder, 'id'>, 'user'>, 'solar'>>({
      query(data) {
        return {
          url: '',
          method: 'POST',
          body: data,
        };
      },
    }),
  }),
});

export const { useGetOrdersQuery, useCreateOrderMutation } = orderApi;
