"use client"

import { useCart } from "../context/CartContext"

export default function SendButton() {
  const { cart } = useCart()

  if (cart.length === 0) return null

  const total = cart.reduce((sum, item) => sum + item.preco, 0)

  const handleSend = () => {
    const message = cart
      .map((item) => `• ${item.nome} - R$ ${item.preco.toFixed(2)}`)
      .join("%0A")
    const totalLine = `%0A%0ATotal: R$ ${total.toFixed(2)}`
    const numero = "5515920003478"
    const url = `https://wa.me/${numero}?text=Olá!%20Gostaria%20de%20fazer%20um%20pedido:%0A${message}${totalLine}`

    window.open(url, "_blank")
  }

  return (
    <button
      onClick={handleSend}
      className="fixed bottom-4 right-4 bg-green-500 text-white px-6 py-3 rounded-full shadow-lg hover:bg-green-600 transition-all"
    >
      Enviar Pedido via WhatsApp
    </button>
  )
}