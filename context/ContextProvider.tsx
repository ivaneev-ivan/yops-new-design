'use client'

import React, { FC, ReactNode } from 'react'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { persistor, store } from '@/context/store'

const ContextProvider: FC<{ children: ReactNode }> = ({ children }) => (
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>{children}</PersistGate>
  </Provider>
)

export default ContextProvider
