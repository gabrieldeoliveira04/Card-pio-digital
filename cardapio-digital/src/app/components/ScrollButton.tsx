import React from "react";

const ScrollButton = () => {
  const scrollToSection = () => {
    const section = document.getElementById("cardapio");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <button
      onClick={scrollToSection}
      className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-all"
    >
      Ver cardápio
    </button>
  );
};

export default ScrollButton;
