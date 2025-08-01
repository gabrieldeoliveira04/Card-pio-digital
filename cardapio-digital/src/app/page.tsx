"use client"

import { menu } from "./data/menu";
import ProductCard from "./components/ProductCard";
import SendButton from "./components/SendButton";
import WelcomeScreen from "./components/WelcomeScreen";

export default function Home() {
  return (
    <>
      <WelcomeScreen />
      <div className="min-h-screen bg-gray-100 p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {menu.map((item) => (
          <ProductCard key={item.id} product={item} />
        ))}
      </div>
      <SendButton />
    </>
  );
}
