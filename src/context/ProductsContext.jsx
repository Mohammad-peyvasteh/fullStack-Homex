"use client";

import { createContext, useState, useEffect, useContext } from "react";

const ProductContext = createContext([]);

export const ProductProvider = ({ children }) => {
  const API_ITEMS = "https://liara-homex-back.liara.run/api/products";
  const API_CART = "https://liara-homex-back.liara.run/api/cart";

  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [cartItems, setCartItems] = useState([]);
  const [showSidebar, setShowSidebar] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  const fetchWithNoCache = async (url, options = {}) => {
    return fetch(url, {
      ...options,
      headers: {
        ...(options.headers || {}),
        "Cache-Control": "no-cache",
        Pragma: "no-cache",
      },
    });
  };

  const fetchCart = async () => {
    try {
      const response = await fetchWithNoCache(API_CART);
      if (!response.ok) throw new Error("Failed to fetch cart items");
      const cartData = await response.json();
      setCartItems(cartData);
    } catch (err) {
      console.error(err.message);
    }
  };

  const fetchItems = async () => {
    try {
      const response = await fetchWithNoCache(API_ITEMS);
      if (!response.ok) throw new Error("Failed to fetch items");
      const listItems = await response.json();
      setItems(listItems);
    } catch (err) {
      console.log(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchItems();
    fetchCart();
  }, []);

  const refreshCart = () => {
    fetchCart(); // بعد از هر عملیات، دوباره cart رو از سرور بخون
  };

  const addToCart = async (item) => {
    const existing = cartItems.find((cartItem) => cartItem.id === item.id);

    if (existing) {
      await incrementQty(item.id);
    } else {
      const newCartItem = {
        id: item.id,
        title: item.title,
        price: item.price,
        quantity: 1,
      };
      try {
        const response = await fetchWithNoCache(API_CART, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(newCartItem),
        });
        if (!response.ok) throw new Error("Failed to add item to cart");
        await response.json();
        refreshCart();
      } catch (err) {
        console.error(err.message);
      }
    }
  };

  const incrementQty = async (id) => {
    const item = cartItems.find((i) => i.id === id);
    if (!item) return;

    const updatedItem = { ...item, quantity: item.quantity + 1 };

    try {
      const response = await fetchWithNoCache(`${API_CART}/${id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ quantity: updatedItem.quantity }),
      });
      if (!response.ok) throw new Error("Failed to increase quantity");
      await response.json();
      refreshCart();
    } catch (err) {
      console.error(err.message);
    }
  };

  const decrementQty = async (id) => {
    const item = cartItems.find((i) => i.id === id);
    if (!item) return;

    if (item.quantity <= 1) {
      try {
        const response = await fetchWithNoCache(`${API_CART}/${id}`, {
          method: "DELETE",
        });
        if (!response.ok) throw new Error("Failed to remove item from cart");
        refreshCart();
      } catch (err) {
        console.error(err.message);
      }
    } else {
      const updatedItem = { ...item, quantity: item.quantity - 1 };
      try {
        const response = await fetchWithNoCache(`${API_CART}/${id}`, {
          method: "PATCH",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ quantity: updatedItem.quantity }),
        });
        if (!response.ok) throw new Error("Failed to decrease quantity");
        await response.json();
        refreshCart();
      } catch (err) {
        console.error(err.message);
      }
    }
  };

  const getTotalPrice = () => {
    return cartItems.reduce((total, item) => {
      const price = parseInt(item.price, 10);
      return total + price * item.quantity;
    }, 0);
  };

  return (
    <ProductContext.Provider
      value={{
        showMenu,
        setShowMenu,
        getTotalPrice,
        items,
        loading,
        cartItems,
        addToCart,
        decrementQty,
        incrementQty,
        showSidebar,
        setShowSidebar,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export const useProductContext = () => useContext(ProductContext);
