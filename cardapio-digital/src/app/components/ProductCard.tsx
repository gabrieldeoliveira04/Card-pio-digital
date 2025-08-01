"use client";

import { Product } from "../data/menu";
import { useCart } from "../context/CartContext";

export default function ProductCard({ product }: { product: Product }) {
  const { addToCart } = useCart();

  return (
    <section id="cardapio">
      <div className="p-4 bg-white rounded shadow hover:scale-105 transition-all">
        <h3 className="text-lg font-semibold">{product.nome}</h3>
        <p className="text-sm text-gray-500">{product.descricao}</p>
        <p className="text-green-600 font-bold mt-2">R$ {product.preco}</p>
        <button
          onClick={() => addToCart(product)}
          className="mt-2 bg-blue-500 text-white px-4 py-1 rounded hover:bg-blue-600"
        >
          Adicionar
        </button>
      </div>
    </section>
  );
}
