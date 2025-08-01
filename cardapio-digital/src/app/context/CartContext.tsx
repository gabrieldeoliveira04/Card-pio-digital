"use client"

import { createContext, useContext, useState } from "react"
import { Product } from "../data/menu"

type CartContextType = {
  cart: Product[]
  addToCart: (product: Product) => void
}

const CartContext = createContext<CartContextType | undefined>(undefined)

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [cart, setCart] = useState<Product[]>([])

  const addToCart = (product: Product) => {
    setCart((prev) => [...prev, product])
  }

  return (
    <CartContext.Provider value={{ cart, addToCart }}>
      {children}
    </CartContext.Provider>
  )
}

export const useCart = () => {
  const context = useContext(CartContext)
  if (!context) throw new Error("useCart precisa estar dentro do CartProvider")
  return context
}