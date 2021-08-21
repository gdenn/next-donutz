import { createContext, useContext, useState } from "react";


const AppContext = createContext()

export const AppContextProvider = ({children}) => {

    const [orders, setOrders] = useState([])
    const [totalPrice, setTotalPrice] = useState(0)

    const value = {
        orders, setOrders,
        totalPrice, setTotalPrice
    }

    return (
        <AppContext.Provider value={value}>
            {children}
        </AppContext.Provider>
    )
}

export const useAppContext = () => useContext(AppContext)