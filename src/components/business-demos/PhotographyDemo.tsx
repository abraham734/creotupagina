import { Button } from "@/components/ui/button";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import { FaWhatsapp, FaInstagram, FaFacebookF } from "react-icons/fa";
import "swiper/css";
import "swiper/css/navigation";

function PhotographyDemo() {
  return (
    <div className="relative">
      {/* Section Label */}
      <div className="text-center mb-8">
        <span className="inline-block px-4 py-2 bg-rose-600 text-white rounded-full text-sm font-semibold mb-4">
          📸 Fotografía de Bodas
        </span>
      </div>

      {/* Plano General */}
      <div className="bg-gradient-to-br from-rose-50 to-pink-50 rounded-2xl p-8 shadow-2xl border border-rose-100 max-w-6xl mx-auto">
        {/* Mock Browser Bar */}
        <div className="flex items-center space-x-2 mb-6 pb-4 border-b border-rose-200">
          <div className="flex space-x-2">
            <div className="w-3 h-3 bg-red-500 rounded-full"></div>
            <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
          </div>
          <div className="flex-1 bg-white rounded-md px-4 py-1 text-sm text-gray-600">
            momentoseterno.com
          </div>
        </div>

        {/* Plano Entero */}
        <div
          className="rounded-xl p-8 shadow-lg relative"
          style={{
            backgroundImage: "url('/marmol.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          {/* Hero Carousel */}
          <div className="relative rounded-xl overflow-hidden border-2 border-rose-300 shadow-lg mb-8">
            <Swiper
              spaceBetween={20}
              slidesPerView={1}
              loop
              autoplay={{ delay: 7000 }}
              navigation
              modules={[Autoplay, Navigation]}
              className="w-full h-full"
            >
              {["foto1.jpg", "foto2.jpg", "foto3.jpg", "foto4.jpg", "foto5.jpg", "foto6.jpg"].map(
                (src, idx) => (
                  <SwiperSlide key={idx}>
                    <img
                      src={`/${src}`}
                      alt={`Galería ${idx + 1}`}
                      loading="lazy"
                      decoding="async"
                      className="w-full h-[400px] object-cover"
                    />
                  </SwiperSlide>
                )
              )}
            </Swiper>
          </div>

          {/* Presentación de Servicios */}
          <div className="relative rounded-xl overflow-hidden shadow-lg backdrop-blur-md bg-white/30 px-8 py-3 w-full max-w-3xl mx-auto mb-4">
            <h1 className="text-4xl md:text-5xl font-pacifico text-[#3a3a3a] text-center leading-tight underline decoration-[#B38B59] decoration-4 underline-offset-4">
              Momentos Inolvidables
            </h1>
          </div>

          <p className="text-center text-gray-700 text-base md:text-lg mb-4 max-w-3xl mx-auto">
            Somos expertos en capturar la esencia de tu gran día. Cada fotografía refleja emociones auténticas y detalles únicos que recordarás por siempre.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button className="bg-rose-600 hover:bg-rose-700 text-white px-6 py-2 font-semibold text-sm md:text-base">
              Ver Portfolio
            </Button>
            <Button
              variant="outline"
              className="border border-rose-600 text-rose-700 font-semibold hover:bg-rose-600 hover:text-white px-6 py-2 text-sm md:text-base"
            >
              Reservar Cita
            </Button>
          </div>

          {/* Servicios Destacados */}
          <div className="grid md:grid-cols-3 gap-6 mb-8 mt-8">
            {[
              {
                title: "Cobertura Completa",
                desc: "Desde los preparativos hasta el último baile",
                price: "Desde $890.000",
                icon: <FaWhatsapp className="text-green-500" />,
                contact: "+52 55 1234 5678",
              },
              {
                title: "Sesión Pre-Boda",
                desc: "Fotos románticas antes del gran día",
                price: "$290.000",
                icon: <FaInstagram className="text-pink-500" />,
                contact: "@momentoseternos",
              },
              {
                title: "Álbum Premium",
                desc: "Diseño personalizado con materiales de lujo",
                price: "$450.000",
                icon: <FaFacebookF className="text-blue-600" />,
                contact: "@momentoseternos",
              },
            ].map((service, idx) => (
              <div
                key={idx}
                className="relative text-center p-6 bg-cover bg-center rounded-xl border-2 border-rose-300 shadow-xl hover:shadow-2xl transition"
                style={{ backgroundImage: "url('/sobre-vintage.jpg')" }}
              >
                <h3 className="font-bold text-rose-700 mb-2">{service.title}</h3>
                <p className="text-gray-800 text-sm mb-2">{service.desc}</p>
                <p className="font-bold text-rose-600 mb-4">{service.price}</p>
                {/* Icono y contacto */}
                <div className="absolute bottom-3 left-3 flex items-center gap-2 bg-white/70 px-2 py-1 rounded-md">
                  {service.icon}
                  <span className="text-xs text-gray-800">{service.contact}</span>
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center">
            <Button className="bg-gradient-to-r from-rose-600 to-pink-600 hover:from-rose-700 hover:to-pink-700 text-white px-12 py-4 text-lg font-semibold transform hover:scale-105 transition-all duration-300">
              Solicitar Cotización
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PhotographyDemo;









