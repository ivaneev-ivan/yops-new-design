import {combineReducers, configureStore} from '@reduxjs/toolkit'
import {TypedUseSelectorHook, useDispatch, useSelector} from 'react-redux'
import storage from 'redux-persist/lib/storage'
import {persistReducer, persistStore} from 'redux-persist'
import {authApi} from '@/context/api/AuthApi'
import {configApi} from '@/context/api/ConfigApi'
import {serviceApi} from '@/context/api/ServiceApi'
import {userApi} from '@/context/api/UserApi'
import userReducer from '@/context/features/UserSlice'
import {orderApi} from './api/OrderApi'

const persistConfig = {
  key: 'root',
  storage,
}

const reducer = combineReducers({
  // @ts-ignore
  [authApi.reducerPath]: authApi.reducer,
  [userApi.reducerPath]: userApi.reducer,
  [serviceApi.reducerPath]: serviceApi.reducer,
  [orderApi.reducerPath]: orderApi.reducer,
  [configApi.reducerPath]: configApi.reducer,
  userState: userReducer,
})

const persistedReducer = persistReducer(persistConfig, reducer)

export const store = configureStore({
  reducer: persistedReducer,
  devTools: process.env.NODE_ENV === 'development',
  //@ts-ignore
  middleware: getDefaultMiddleware => {
    return getDefaultMiddleware({}).concat([
      authApi.middleware,
      userApi.middleware,
      serviceApi.middleware,
      orderApi.middleware,
      configApi.middleware,
    ]);
  },
})

export const persistor = persistStore(store)
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export const useAppDispatch = () => useDispatch<AppDispatch>()
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
