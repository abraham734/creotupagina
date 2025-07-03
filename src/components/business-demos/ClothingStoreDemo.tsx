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
      <div className="text-center mb-8">
        <span className="inline-block px-4 py-2 bg-gray-800 text-white rounded-full text-sm font-semibold mb-4">
          👕 Tienda de Ropa Urbana
        </span>
      </div>

      {/* Plano General */}
      <div className="bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl p-4 md:p-8 shadow-2xl border border-gray-300 w-full">
        {/* Plano Entero */}
        <div
          className="bg-[#113E21] rounded-xl p-6 md:p-8 shadow-lg text-white relative"
          style={{
            backgroundImage: "url('/cruzado%20de%20cinta.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="backdrop-blur-sm bg-black/50 p-4 rounded-xl">
            {/* Header */}
            <div className="flex flex-col md:flex-row justify-between items-center mb-8 px-4 py-3 border-b border-[#B38B59]">
              <div className="font-unbounded text-3xl">ESTILO URBANO</div>
              <nav className="flex flex-wrap gap-4 mt-2 md:mt-0 text-white font-medium">
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
            <div className="flex flex-col md:flex-row gap-8">
              {/* Información y redes */}
              <div className="md:w-1/2 space-y-4 text-left">
                <h1 className="text-4xl md:text-5xl font-extrabold leading-tight text-[#FEFEEE]">
                  NUEVA COLECCIÓN
                </h1>
                <p className="text-[#F1F1F1] text-lg max-w-md">
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
              <div className="md:w-1/2 grid grid-cols-2 gap-6">
                {[1, 2, 3, 4].map((num) => (
                  <div
                    key={num}
                    className="rounded-2xl overflow-hidden border-2 border-[#B38B59] bg-[#fefefe] shadow-[0_8px_20px_rgba(0,0,0,0.3)]"
                  >
                    <img
                      src={`/ropa${num}.jpg`}
                      alt={`Ropa ${num}`}
                      loading="lazy"
                      decoding="async"
                      className="aspect-video object-cover w-full"
                    />
                    <div className="bg-[#113E21] text-white px-3 py-2 text-sm font-medium text-center tracking-wide">
                      Suéter Urban Classic - $250 USD<br />
                      ¡Disponible solo esta semana!
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Banner tubular */}
            <div className="mt-12 w-full flex justify-center">
              <div className="w-full md:w-[970px] h-[60px] bg-[#FEFEEE] rounded-full overflow-hidden flex items-center justify-center shadow-inner ring-1 ring-red-300">
                <div className="animate-marquee whitespace-nowrap text-red-600 font-bold text-xl tracking-wider">
                  🔥 HOTSALE 🔥 &nbsp;&nbsp;&nbsp; 🔥 HOTSALE 🔥 &nbsp;&nbsp;&nbsp; 🔥 HOTSALE 🔥 &nbsp;&nbsp;&nbsp; 🔥 HOTSALE 🔥
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Final */}
        <div className="text-center mt-8">
          <Button className="bg-gradient-to-r from-gray-800 to-gray-600 hover:from-gray-900 hover:to-gray-700 text-white px-12 py-4 text-lg font-semibold transform hover:scale-105 transition-all duration-300">
            Crear Mi Tienda Online
          </Button>
        </div>
      </div>
    </div>
  );
}

export default ClothingStoreDemo;











