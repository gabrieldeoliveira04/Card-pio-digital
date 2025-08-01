import "./globals.css"
import { ReactNode } from "react"
import { CartProvider } from "./context/CartContext"

export const metadata = {
  title: "cardapio digital",
  description: "Veja nosso cardapio e faça seu pedido",
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-BR">
      <body>
        <CartProvider>{children}</CartProvider>
      </body>
    </html>
  )
}