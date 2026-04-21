import { createContext, useContext, useState, ReactNode } from "react";
import { type Car } from "../data/cars";

interface CartItem {
  car: Car;
  quantity: number;
}

interface AppContextType {
  cart: CartItem[];
  favorites: number[];
  addToCart: (car: Car) => void;
  removeFromCart: (carId: number) => void;
  updateQuantity: (carId: number, quantity: number) => void;
  toggleFavorite: (carId: number) => void;
  isFavorite: (carId: number) => boolean;
  getCartTotal: () => number;
  getCartCount: () => number;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export function AppProvider({ children }: { children: ReactNode }) {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [favorites, setFavorites] = useState<number[]>([]);

  const addToCart = (car: Car) => {
    setCart((prev) => {
      const existingItem = prev.find((item) => item.car.id === car.id);
      if (existingItem) {
        return prev.map((item) =>
          item.car.id === car.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prev, { car, quantity: 1 }];
    });
  };

  const removeFromCart = (carId: number) => {
    setCart((prev) => prev.filter((item) => item.car.id !== carId));
  };

  const updateQuantity = (carId: number, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(carId);
      return;
    }
    setCart((prev) =>
      prev.map((item) =>
        item.car.id === carId ? { ...item, quantity } : item
      )
    );
  };

  const toggleFavorite = (carId: number) => {
    setFavorites((prev) =>
      prev.includes(carId)
        ? prev.filter((id) => id !== carId)
        : [...prev, carId]
    );
  };

  const isFavorite = (carId: number) => {
    return favorites.includes(carId);
  };

  const getCartTotal = () => {
    return cart.reduce((total, item) => total + item.car.price * item.quantity, 0);
  };

  const getCartCount = () => {
    return cart.reduce((total, item) => total + item.quantity, 0);
  };

  return (
    <AppContext.Provider
      value={{
        cart,
        favorites,
        addToCart,
        removeFromCart,
        updateQuantity,
        toggleFavorite,
        isFavorite,
        getCartTotal,
        getCartCount,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export function useApp() {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useApp must be used within AppProvider");
  }
  return context;
}
