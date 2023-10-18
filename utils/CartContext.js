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
    };

    const getQuantityById = (id) => {
        return cart.reduce((quantity, article) => {
            // Si l'ID de l'article correspond à productId, augmentez la quantité
            if (id === article.id) {
              return quantity + 1;
            }
            return quantity;
          }, 0); // Initialisez la quantité à 0
    };

    return (
        <CartContext.Provider value={{ cart, addToCart, removeFromCart, getQuantityById }}>
            {children}
        </CartContext.Provider>
    );
}