import { authApi } from '@/context/api/AuthApi'
import { configApi } from '@/context/api/ConfigApi'
import { serviceApi } from '@/context/api/ServiceApi'
import { userApi } from '@/context/api/UserApi'
import userReducer from '@/context/features/UserSlice'
import { configureStore } from '@reduxjs/toolkit'
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import { orderApi } from './api/OrderApi'

const KEY = 'redux-storage'

export function loadState() {
  try {
    const serializedState = localStorage.getItem(KEY)
    if (!serializedState) return {}
    return JSON.parse(serializedState)
  } catch (e) {
    return {}
  }
}

export async function saveState(state: any) {
  try {
    const serializedState = JSON.stringify(state)
    localStorage.setItem(KEY, serializedState)
  } catch (e) {
    // Ignore
  }
}

export const store = configureStore({
  reducer: {
    // @ts-ignore
    [authApi.reducerPath]: authApi.reducer,
    [userApi.reducerPath]: userApi.reducer,
    [serviceApi.reducerPath]: serviceApi.reducer,
    [orderApi.reducerPath]: orderApi.reducer,
    [configApi.reducerPath]: configApi.reducer,
    userState: userReducer,
  },
  preloadedState: loadState(),
  devTools: process.env.NODE_ENV === 'development',
  middleware: getDefaultMiddleware =>
    // eslint-disable-next-line max-len
    // @ts-ignore
    getDefaultMiddleware({}).concat([
      authApi.middleware,
      userApi.middleware,
      serviceApi.middleware,
      orderApi.middleware,
      configApi.middleware,
    ]),
})

store.subscribe(() => {
  saveState(store.getState())
})
//@ts-ignore
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export const useAppDispatch = () => useDispatch<AppDispatch>()
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
