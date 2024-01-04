/* eslint-disable no-unused-vars */
import { useContext, createContext } from "react";

export const CartContext = createContext({
    items:[],
    addItem:(item) =>{},
    removeItem:(id) =>{}
})

export const CartContextProvider = CartContext.Provider

export const useCartContext = () => {
    return useContext(CartContext)
}