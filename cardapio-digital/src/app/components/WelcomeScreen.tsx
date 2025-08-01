import ScrollButton from "./ScrollButton";

export default function WelcomeScreen() {
    return (
        <section className="flex items-center justify-center min-h-screen bg-[#4b0c12] text-white">
            <h1 className="text-4xl md:text-6xl font-bold">
                Bem-vindo ao Cardápio De um mês de casamento meu amor!
            </h1>
            <p className="text-lg md:text-xl text-[#d4af37]">
                Escolha com sabedoria
            </p>
            <ScrollButton />
        </section>
    );
}
