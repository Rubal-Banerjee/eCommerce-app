import { configureStore } from '@reduxjs/toolkit'
import cartReducer from "@/redux/features/cartSlice"
import productReducer from "@/redux/features/productSlice"
import loadingReducer from "@/redux/features/loadingSlice"

export const makeStore = () => {
  return configureStore({
    reducer: {
      cartReducer,
      productReducer,
      loadingReducer,
    },
  },
  // devTools: process.env.NODE_ENV !== "production",
)}

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']