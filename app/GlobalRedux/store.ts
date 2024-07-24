"use client"
import { configureStore } from "@reduxjs/toolkit"
import CartsSlice from "./Features/carts/CartsSlice"

export const store = configureStore({
    reducer: {
        carts: CartsSlice
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch