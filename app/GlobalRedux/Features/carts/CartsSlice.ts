"use client"
import { createSlice, PayloadAction } from "@reduxjs/toolkit"

interface Cart {
    _id: string
    color: string,
    description: string,
    image: string,
    price: number,
    rate: number,
    size: string,
    subtitle: string,
    title: string,
    count: number
}

export interface CartsSlice {
    carts: Cart[]
}

const initialState: CartsSlice = {
    carts: []
}

export const CartsSlice = createSlice({
    name: 'carts',
    initialState,
    reducers: {
        addCart: (state, action) => {
            const foundItem = state.carts.find(item => item._id === action.payload._id)
            if (foundItem) {
                foundItem.count += 1
            } else {
                state.carts.push(action.payload)
            }
        },
        deleteCart: (state, action: PayloadAction<string>) => {
            const index = state.carts.findIndex(item => item._id === action.payload)
            if (index !== -1) {
                state.carts.splice(index, 1)
            }
        },
        incrementCount: (state, action: PayloadAction<string>) => {
            const foundItem = state.carts.find(item => item._id === action.payload)
            if (foundItem) {
                foundItem.count += 1
            }
        },
        decrementCount: (state, action: PayloadAction<string>) => {
            const foundItem = state.carts.find(item => item._id === action.payload)
            if (foundItem && foundItem.count > 1) {
                foundItem.count -= 1
            }
        }
    }
})

export const { addCart, deleteCart, incrementCount, decrementCount } = CartsSlice.actions
export default CartsSlice.reducer
