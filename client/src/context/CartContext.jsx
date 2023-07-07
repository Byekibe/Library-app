import { createContext } from "react";

const CartContext = createContext();

const CartProvider = ({ children }) => {
    return (
        <CartContext.Provider value={{}}>

        </CartContext.Provider>
    )
}