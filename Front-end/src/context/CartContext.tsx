import {
  createContext,
  useState,
  useEffect,
  ReactNode,
  useContext,
} from "react";
import { ProductInterface } from "../types/ProductInterface";

interface CartItem {
  id: number;
  product: ProductInterface;
  quantity: number;
}

interface CartContextValue {
  cartItems: CartItem[];
  addToCart: (item: CartItem) => void;
  removeFromCart: (item: CartItem) => void;
  clearCart: () => void;
  getCartTotal: () => number;
  getTotalItems: () => number;
}

export const CartContext = createContext<CartContextValue | undefined>(
  undefined
);

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cartItems, setCartItems] = useState<CartItem[]>(() => {
    const savedCartItems = localStorage.getItem("cartItems");
    return savedCartItems ? JSON.parse(savedCartItems) : [];
  });

  const addToCart = (item: CartItem) => {
    if (item.product && item.product.productPrice !== undefined) {
      setCartItems((prevCartItems) => {
        const isItemInCart = prevCartItems.find(
          (cartItem) => cartItem.id === item.id
        );

        if (isItemInCart) {
          return prevCartItems.map((cartItem) =>
            cartItem.id === item.id
              ? { ...cartItem, quantity: cartItem.quantity + 1 }
              : cartItem
          );
        } else {
          return [...prevCartItems, { ...item, quantity: 1 }];
        }
      });
    } else {
      console.error("Attempted to add an item without a productPrice:", item);
    }
  };

  const removeFromCart = (item: CartItem) => {
    setCartItems((prevCartItems) => {
      const isItemInCart = prevCartItems.find(
        (cartItem) => cartItem.id === item.id
      );

      if (isItemInCart?.quantity === 1) {
        return prevCartItems.filter((cartItem) => cartItem.id !== item.id);
      } else {
        return prevCartItems.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity - 1 }
            : cartItem
        );
      }
    });
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const getCartTotal = () => {
    return cartItems.reduce((total, item) => {
      if (item.product && item.product.productPrice !== undefined) {
        return total + item.product.productPrice * item.quantity;
      } else {
        console.error("Product without a price:", item.product);
        return total;
      }
    }, 0);
  };

  const getTotalItems = () => {
    return cartItems.reduce((total, item) => total + item.quantity, 0);
  };

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        clearCart,
        getCartTotal,
        getTotalItems,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

// Custom hook to use the cart context
export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};
