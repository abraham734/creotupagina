import { Button } from "@/components/ui/button";
import {
  FaFacebookF,
  FaInstagram,
  FaTiktok,
  FaMapMarkerAlt,
  FaPhoneAlt,
} from "react-icons/fa";
import "@/components/globals.css";

function ClothingStoreDemo() {
  return (
    <div className="relative">
      {/* Section Label */}
      <div className="text-center mb-6 md:mb-8">
        <span className="inline-block px-4 py-2 bg-gray-800 text-white rounded-full text-sm font-semibold mb-4">
          👕 Tienda de Ropa Urbana
        </span>
      </div>

      {/* Plano General */}
      <div className="bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl p-4 md:p-8 shadow-2xl border border-gray-300 max-w-6xl mx-auto">
        {/* Mock Browser Bar */}
        <div className="hidden md:flex items-center space-x-2 mb-6 pb-4 border-b border-gray-300">
          <div className="flex space-x-2">
            <div className="w-3 h-3 bg-red-500 rounded-full"></div>
            <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
          </div>
          <div className="flex-1 bg-white rounded-md px-4 py-1 text-sm text-gray-600">
            urbanstyle.shop
          </div>
        </div>

        {/* Plano Entero */}
        <div
          className="bg-[#113E21] rounded-xl p-4 md:p-8 shadow-lg text-white relative"
          style={{
            backgroundImage: "url('/cruzado%20de%20cinta.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="backdrop-blur-sm bg-black/50 p-4 rounded-xl">
            {/* Header */}
            <div className="flex flex-col md:flex-row justify-between items-center mb-6 md:mb-8 px-2 md:px-4 py-3 border-b border-[#B38B59]">
              <div className="font-unbounded text-2xl md:text-3xl">ESTILO URBANO</div>
              <nav className="hidden md:flex space-x-6 text-white font-medium">
                {["Hogar", "Catálogo", "Género", "News", "About", "Contacto"].map((item) => (
                  <a
                    key={item}
                    href="#"
                    className="pb-1 border-b-2 border-[#B38B59] hover:text-[#B38B59] transition"
                  >
                    {item}
                  </a>
                ))}
              </nav>
            </div>

            {/* Contenido dividido */}
            <div className="flex flex-col md:flex-row gap-6 md:gap-8">
              {/* Información y redes */}
              <div className="md:w-1/2 space-y-3 text-left">
                <h1 className="text-3xl md:text-5xl font-extrabold leading-tight text-[#FEFEEE]">
                  NUEVA COLECCIÓN
                </h1>
                <p className="text-[#F1F1F1] text-base md:text-lg max-w-md">
                  Descubre lo último en moda urbana con nuestra colección de temporada. Prendas hechas para destacar.
                </p>
                <ul className="text-sm text-[#F1F1F1] space-y-1">
                  <li className="flex items-center gap-2">
                    <FaMapMarkerAlt className="text-[#B38B59]" /> CDMX, México
                  </li>
                  <li className="flex items-center gap-2">
                    <FaPhoneAlt className="text-[#B38B59]" /> +52 55 1234 5678
                  </li>
                  <li className="flex items-center gap-2">
                    <FaFacebookF className="text-blue-500" /> @estilourbano
                  </li>
                  <li className="flex items-center gap-2">
                    <FaInstagram className="text-pink-500" /> @estilourbano
                  </li>
                  <li className="flex items-center gap-2">
                    <FaTiktok className="text-black" /> @estilourbano
                  </li>
                </ul>
              </div>

              {/* Cuadro de imágenes */}
              <div className="md:w-1/2 grid grid-cols-2 gap-4 md:gap-6">
                {[1, 2, 3, 4].map((num) => (
                  <div
                    key={num}
                    className="rounded-xl md:rounded-2xl overflow-hidden border-2 border-[#B38B59] bg-[#fefefe] shadow-[0_8px_20px_rgba(0,0,0,0.3)]"
                  >
                    <img
                      src={`/ropa${num}.jpg`}
                      alt={`Ropa ${num}`}
                      loading="lazy"
                      decoding="async"
                      className="aspect-[4/3] md:aspect-video object-cover w-full"
                    />
                    <div className="bg-[#113E21] text-white px-2 md:px-3 py-1 md:py-2 text-xs md:text-sm font-medium text-center tracking-wide">
                      Suéter Urban Classic - $250 USD
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Banner tubular */}
            <div className="mt-6 md:mt-12 w-full flex justify-center">
              <div className="w-full md:w-[970px] h-[40px] md:h-[60px] bg-[#FEFEEE] rounded-full overflow-hidden flex items-center justify-center shadow-inner ring-1 ring-red-300">
                <div className="animate-marquee whitespace-nowrap text-red-600 font-bold text-base md:text-xl tracking-wider">
                  🔥 HOTSALE 🔥 &nbsp;&nbsp; 🔥 HOTSALE 🔥 &nbsp;&nbsp; 🔥 HOTSALE 🔥
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Final */}
        <div className="text-center mt-6 md:mt-8">
          <Button className="bg-gradient-to-r from-gray-800 to-gray-600 hover:from-gray-900 hover:to-gray-700 text-white px-8 md:px-12 py-3 md:py-4 text-base md:text-lg font-semibold transform hover:scale-105 transition-all duration-300">
            Crear Mi Tienda Online
          </Button>
        </div>
      </div>
    </div>
  );
}

export default ClothingStoreDemo;











