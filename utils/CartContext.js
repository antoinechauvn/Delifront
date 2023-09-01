import React, { createContext, useContext, useState } from 'react';

const CartContext = createContext();

export const useCartContext = () => useContext(CartContext);

export function CartProvider({ children }) {
    const [cart, setCart] = useState([]);

    const addToCart = (product) => {
        setCart([...cart, product]);
    };

    const removeFromCart = (productId) => {
        const productIndex = cart.findIndex(product => product.id === productId);

        if (productIndex !== -1) {
            const updatedCart = [...cart];
            updatedCart.splice(productIndex, 1);

            setCart(updatedCart);
    };
}

    return (
        <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
            {children}
        </CartContext.Provider>
    );
}