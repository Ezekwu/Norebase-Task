import { configureStore } from '@reduxjs/toolkit';
import { coinsSlice } from './features/Coins'

export const store = configureStore({
  reducer:{
    [coinsSlice.reducerPath]: coinsSlice.reducer,
  }, 
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(coinsSlice.middleware)
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;