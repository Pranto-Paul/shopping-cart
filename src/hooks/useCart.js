import { useEffect, useMemo, useState } from 'react';

export function useCart() {
  const [cart, setCart] = useState(() => {
    try {
      return localStorage.getItem('cart')
        ? JSON.parse(localStorage.getItem('cart'))
        : [];
    } catch (error) {
      console.error('Error parsing cart from localStorage:', error);
      return [];
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem('cart', JSON.stringify(cart));
    } catch (error) {
      console.error('Failed to save cart in localstorage', error);
    }
  }, [cart]);

  //sync accross tabs
  useEffect(() => {
    const handleStorageChange = (event) => {
      if (event.key === 'cart') {
        try {
          setCart(event.newValue ? JSON.parse(event.newValue) : '[]');
        } catch (error) {
          console.error('Error parsing cart from storage event:', error);
        }
      }
    };

    window.addEventListener('storage', handleStorageChange);

    return () => {
      window.removeEventListener('storage', handleStorageChange);
    };
  }, []);

  const addToCart = (product) => {
    setCart((currentCart) => {
      const existingItem = currentCart.find((item) => item.id === product.id);
      if (existingItem) {
        return currentCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...currentCart, { ...product, quantity: 1 }];
      }
    });
  };
  const removeFromCart = (productId) => {
    setCart((currentCart) =>
      currentCart.filter((item) => item.id !== productId)
    );
  };
  const updateQuantity = (productId, quantity) => {
    if (quantity < 1) return;
    setCart((currentCart) =>
      currentCart.map((item) =>
        item.id === productId ? { ...item, quantity } : item
      )
    );
  };
  const total = useMemo(() => {
    return Number(
      cart
        .reduce((sum, item) => sum + item.price * item.quantity || 0, 0)
        .toFixed(2)
    );
  }, [cart]);

  return { cart, addToCart, removeFromCart, updateQuantity, total };
}
