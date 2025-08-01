import { motion } from "framer-motion";
import { Button } from "./ui/button"

export default function WelcomeScreen() {
    return (
        <section className="flex items-center justify-center min-h-screen bg-[#4b0c12] text-white">

                <h1 className="text-4xl md:text-6xl font-bold">Bem-vindo ao Cardápio Digital</h1>
                <p className="text-lg md:text-xl text-[#d4af37]">Escolha com facilidade, peça com rapidez.</p>
                <Button className="bg-[#d4af37] hover:bg-[#e4c94e] text-[#4b0c12] px-8 py-4 text-lg rounded-2xl shadow-lg transition-all">
                    Ver Cardápio </Button>

        </section>);
}