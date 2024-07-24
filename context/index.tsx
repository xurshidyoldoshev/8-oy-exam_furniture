"use client"
import type { RootState } from '../app/GlobalRedux/store'
import { createContext, useState, useContext } from "react";
import { useSelector } from "react-redux";

const AppContext = createContext<any>({})

export function AppWrapper({ children }: {
    children: React.ReactNode;
}) {

    const [products, setProducts] = useState([])

    const [singleData, setSingleData] = useState([])

    const [rateNumber, setRateNumber] = useState(null)

    const cart = useSelector((state: RootState) => state.carts.carts)

    return (
        <AppContext.Provider value={{ products, setProducts, singleData, setSingleData, rateNumber, setRateNumber, cart }}>
            {children}
        </AppContext.Provider>
    )
}

export function useAppContext() {
    return useContext(AppContext)
}