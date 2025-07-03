import { Button } from "@/components/ui/button";
import { FaWhatsapp, FaInstagram, FaFacebookF } from "react-icons/fa";

const Hero = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 flex items-center justify-center relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_500px_at_50%_200px,#3b82f6,transparent)]" />
      </div>

      <div className="container mx-auto px-4 z-10">
        <div className="text-center max-w-6xl mx-auto">
          {/* Logo Name */}
          <h1 className="text-3x1 md:text-8x2 font-bold text-white mb-6 tracking-wide flex justify-center items-center space-x-2">
            <span className="text-5xl md:text-8xl font-bold bg-gradient-to-b from-blue-400 to-purple-500 bg-clip-text text-transparent">{'{'}</span>
            <span className="text-2x1 md:text-5xl font-bold text-white">
              CREOTUPAGINA<span className="text-lg align-super">.com</span>
            </span>
            <span className="text-5xl md:text-8xl font-bold bg-gradient-to-b from-orange-400 to-yellow-500 bg-clip-text text-transparent">{'}'}</span>
          </h1>

          {/* Loading Dots */}
          <div className="flex justify-center mt-3 space-x-2">
            {["#3b82f6", "#8b5cf6", "#f97316", "#10b981", "#f43f5e"].map((color, idx) => (
              <span
                key={idx}
                className="w-3 h-3 rounded-full animate-bounce"
                style={{
                  backgroundColor: color,
                  animationDelay: `${idx * 0.2}s`
                }}
              />
            ))}
          </div>

          {/* Slogan */}
          <h2 className="text-x1 md:text-3xl text-gray-300 mt-6 mb-4">
            Tu negocio. Tu esencia. Tu página.
          </h2>

          {/* Descriptive Paragraph */}
          <p className="text-md md:text-lg text-gray-200 mb-10 leading-relaxed max-w-2x2 mx-auto">
            En creotupagina.com, diseño sitios web que hablan por tu negocio. Te ayudo a destacar online con páginas claras, funcionales y atractivas. Cada proyecto es un compromiso real: escuchar tu idea, entender tu marca y crear algo que inspire confianza y genere resultados. Así de simple.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button
              size="lg"
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 text-lg transition-all duration-300 transform hover:scale-105"
            >
              Ver Mis Trabajos
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-2 border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-gray-900 px-8 py-4 text-lg transition-all duration-300"
            >
              Cotizar Proyecto
            </Button>
          </div>

          {/* Social Icons */}
          <div className="flex justify-center space-x-6">
            <a
              href="https://wa.me/528128854898"
              className="p-4 rounded-full bg-green-600 hover:bg-green-700 text-white transition-all duration-300 transform hover:scale-110"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaWhatsapp size={24} />
            </a>
            <a
              href="https://www.instagram.com/creo_tupagina/"
              className="p-4 rounded-full bg-gradient-to-br from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white transition-all duration-300 transform hover:scale-110"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram size={24} />
            </a>
            <a
              href="https://www.facebook.com/share/1AtwHoUTP2/?mibextid=wwXIfr"
              className="p-4 rounded-full bg-blue-600 hover:bg-blue-700 text-white transition-all duration-300 transform hover:scale-110"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebookF size={24} />
            </a>
          </div>
        </div>
      </div>

      {/* Floating elements */}
      <div className="absolute top-1/4 left-10 w-20 h-20 bg-blue-500 rounded-full opacity-20 floating"></div>
      <div className="absolute bottom-1/4 right-10 w-16 h-16 bg-purple-500 rounded-full opacity-20 floating-delayed"></div>
      <div className="absolute top-1/3 right-20 w-24 h-24 bg-pink-500 rounded-full opacity-10 floating"></div>
      <div className="absolute bottom-10 left-1/4 w-14 h-14 bg-blue-400 rounded-full opacity-15 floating-delayed"></div>
      <div className="absolute top-10 right-1/3 w-12 h-12 bg-purple-400 rounded-full opacity-15 floating"></div>
      <div className="absolute bottom-1/3 left-1/3 w-20 h-20 bg-blue-600 rounded-full opacity-10 floating-delayed"></div>
    </div>
  );
};

export default Hero;



