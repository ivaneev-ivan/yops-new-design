import {ICreateOrderData, IOrder} from '@/context/api/types'
import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'

const BASE_URL = process.env.NEXT_PUBLIC_API_ROOT as string

export const orderApi = createApi({
    reducerPath: 'orderApi',
    baseQuery: fetchBaseQuery({
        baseUrl: `${BASE_URL}/api/orders`,
    }),
    tagTypes: ['Order'],
    endpoints: builder => ({
        getOrders: builder.query<IOrder[], string>({
            query(token: string) {
                return {
                    url: '/',
                    headers: {Authorization: `Token ${token}`},
                }
            },
        }),
        getOrderDetail: builder.query<IOrder, { id: number; token: string }>({
            query({id, token}) {
                return {
                    url: `/${id}/`,
                    headers: {Authorization: `Token ${token}`},
                }
            },
        }),
        createOrder: builder.mutation<IOrder, ICreateOrderData>({
            query({accessToken, count_configs, is_own_server, location, services}) {
                return {
                    url: '/',
                    method: 'POST',
                    body: {count_configs, is_own_server, location, services: `[${services.toString()}]`},
                    headers: {Authorization: `Token ${accessToken}`},
                }
            },
        }),
        getServerIp: builder.query<{ ip: string }, { id: number, token: string }>({
            query({id, token}) {
                return {
                    url: `/ip/${id}/`,
                    method: 'GET',
                    headers: {Authorization: `Token ${token}`},
                }
            }
        })
    }),

})

export const {
    useGetOrdersQuery,
    useCreateOrderMutation,
    useGetOrderDetailQuery,
    useGetServerIpQuery
} = orderApi
