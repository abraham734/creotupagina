import { Button } from "@/components/ui/button";
import FlowingMenu from "@/components/FlowingMenu";
import "@/components/FlowingMenu.css";

const PizzeriaDemo = () => {
  return (
    <div className="relative">
      {/* Section Label */}
      <div className="text-center mb-8">
        <span className="inline-block px-4 py-2 bg-red-600 text-white rounded-full text-sm font-semibold mb-4">
          🍕 Pizzería Tradicional
        </span>
      </div>

      {/* Plano General */}
      <div className="bg-gradient-to-br from-red-50 to-yellow-50 rounded-2xl p-8 shadow-2xl border border-red-100 max-w-6xl mx-auto">
        {/* Plano Entero */}
        <div className="rounded-xl overflow-hidden shadow-lg bg-[url('/ladrillos.jpg')] bg-cover bg-center p-8">
          {/* Header */}
          <div className="flex justify-between items-center mb-8 px-4 py-3 rounded-xl bg-black/30 backdrop-blur-sm shadow-md">
            <div className="text-3xl font-bold text-white drop-shadow-[0_0_8px_#8B0000] font-pacifico">
              🍕 Nonna Lucia
            </div>
            <nav className="hidden md:flex space-x-6 text-white font-medium">
              {["Menú", "Nosotros", "Entrega", "Contacto"].map((label) => (
                <a
                  key={label}
                  href="#"
                  className="relative hover:text-orange-300 after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-orange-400 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 after:origin-left"
                >
                  {label}
                </a>
              ))}
            </nav>
          </div>

          {/* Hero Section */}
          <div className="flex justify-center items-center text-center py-8 px-4">
            <div>
              <h1 className="text-5xl md:text-6xl font-extrabold tracking-wide neon-text-orange mb-4 leading-tight">
                Auténtica Pizza
                <br />
                Italiana
              </h1>
              <p className="mt-4 text-xl md:text-2xl italic text-orange-100 max-w-2xl mx-auto drop-shadow animate-fadeInUp">
                Desde 1952, preparamos nuestras pizzas con ingredientes frescos.
              </p>
            </div>
          </div>

          {/* FlowingMenu optimizado */}
          <div className="mt-10 h-[300px] relative">
            <FlowingMenu
              items={[
                {
                  link: "#",
                  text: "Pizza Margherita",
                  image: "/pizza-margherita.jpg",
                  speedClass: "marquee-slow",
                  imageProps: { loading: "lazy", decoding: "async" },
                },
                {
                  link: "#",
                  text: "Pasta Carbonara",
                  image: "/pasta-carbonara.jpg",
                  speedClass: "marquee-fast reverse",
                  imageProps: { loading: "lazy", decoding: "async" },
                },
                {
                  link: "#",
                  text: "Ensalada Caprese",
                  image: "/ensalada-caprese.jpg",
                  speedClass: "marquee-medium",
                  imageProps: { loading: "lazy", decoding: "async" },
                },
              ]}
            />
          </div>

          {/* CTA Final */}
          <div className="text-center mt-8">
            <Button className="bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-700 hover:to-orange-700 text-white px-12 py-4 text-lg font-semibold transform hover:scale-105 transition-all duration-300">
              Quiero Una Web Así Para Mi Pizzería
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PizzeriaDemo;













