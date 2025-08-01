'use client';

import { useState } from "react";
import { menu, Product } from "../data/menu";

export default function MenuPage() {
  const [cart, setCart] = useState<Product[]>([]);

  const addToCart = (item: Product) => {
    setCart([...cart, item]);
  };

  return (
    <div className="min-h-screen bg-[#4B0C0C] text-white px-4 py-6">
      <h1 className="text-4xl font-bold mb-8 text-center text-yellow-400">Nosso Cardápio</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {menu.map((item) => (
          <div
            key={item.id}
            className="bg-[#5E1A1A] p-4 rounded-lg shadow-lg flex flex-col justify-between gap-2"
          >
            <h3 className="text-xl font-semibold">{item.nome}</h3>
            <p className="text-sm text-gray-200">{item.descricao}</p>
            <p className="text-lg font-bold text-yellow-400">R$ {item.preco.toFixed(2)}</p>
            <button
              className="mt-2 bg-yellow-500 text-[#4B0C0C] font-bold py-1 px-3 rounded hover:bg-yellow-400 transition"
              onClick={() => addToCart(item)}
            >
              Adicionar ao carrinho
            </button>
          </div>
        ))}
      </div>

      {/* Carrinho flutuante */}
      <div className="fixed bottom-4 right-4 group z-50">
        <div className="bg-yellow-500 text-[#4B0C0C] rounded-full w-14 h-14 flex items-center justify-center shadow-xl transition-transform duration-300 group-hover:scale-110">
          🛒
        </div>

        <div className="absolute bottom-20 right-0 bg-[#5E1A1A] text-white p-4 rounded-lg shadow-lg w-64 hidden group-hover:block transition-all">
          <h3 className="text-lg font-semibold text-yellow-300 mb-2">Carrinho</h3>
          {cart.length === 0 ? (
            <p className="text-sm text-gray-300">Nenhum item no carrinho.</p>
          ) : (
            <ul className="space-y-1 max-h-40 overflow-y-auto">
              {cart.map((item, idx) => (
                <li key={idx} className="flex justify-between text-sm">
                  <span>{item.nome}</span>
                  <span className="text-yellow-300">R$ {item.preco.toFixed(2)}</span>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}