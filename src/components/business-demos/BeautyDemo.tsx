import { Button } from "@/components/ui/button";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import "swiper/css";

function BeautyClinicDemo() {
  return (
    <div className="relative">
      {/* Section Label */}
      <div className="text-center mb-8">
        <span className="inline-block px-4 py-2 bg-[#334eac] text-white rounded-full text-sm font-semibold mb-4">
          ✨ Clínica Estética Premium
        </span>
      </div>

      {/* Plano General */}
      <div className="bg-gradient-to-br from-[#e7f1ff] to-[#f9fcff] rounded-2xl p-8 shadow-2xl border border-[#d0e7ff] max-w-6xl mx-auto">
        {/* Mock Browser Bar */}
        <div className="flex items-center space-x-2 mb-2 pb-3 border-b border-[#d0e7ff]">
          <div className="flex space-x-2">
            <div className="w-3 h-3 bg-red-500 rounded-full"></div>
            <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
          </div>
          <div className="flex-1 bg-white rounded-md px-4 py-1 text-sm text-gray-600">
            epiclinic.com
          </div>
        </div>

        {/* Header de navegación */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-6">
          <div className="text-2xl font-bold text-[#081f5c]">Epiclinic</div>
          <nav className="flex flex-wrap gap-4 mt-2 md:mt-0">
            <a href="#" className="text-[#334eac] hover:text-[#081f5c] text-sm font-medium transition">Inicio</a>
            <a href="#" className="text-[#334eac] hover:text-[#081f5c] text-sm font-medium transition">Servicios</a>
            <a href="#" className="text-[#334eac] hover:text-[#081f5c] text-sm font-medium transition">Testimonios</a>
            <a href="#" className="text-[#334eac] hover:text-[#081f5c] text-sm font-medium transition">Preguntas Frecuentes</a>
            <a href="#" className="text-[#334eac] hover:text-[#081f5c] text-sm font-medium transition">Contacto</a>
          </nav>
        </div>

        {/* Plano Entero */}
        <div className="rounded-xl p-8 shadow-lg relative bg-white space-y-2">
          {/* Hero Carrusel */}
          <div className="relative rounded-xl overflow-hidden bg-[#d0e7ff] shadow-lg border-2 border-[#334eac] ring-1 ring-[#334eac]/30">
            <Swiper
              spaceBetween={0}
              slidesPerView={1}
              loop
              autoplay={{ delay: 7000 }}
              modules={[Autoplay]}
              className="w-full h-full"
            >
              {[
                {
                  img: "/servicio1.png",
                  title: "Rinoplastia",
                  desc: "Transforma tu perfil con técnicas avanzadas.",
                  price: "Desde $1.200.000",
                },
                {
                  img: "/servicio2.png",
                  title: "Lifting Facial",
                  desc: "Rejuvenece tu rostro con resultados naturales.",
                  price: "Desde $2.500.000",
                },
                {
                  img: "/servicio3.png",
                  title: "Blefaroplastia",
                  desc: "Elimina el exceso de piel en párpados.",
                  price: "Desde $950.000",
                },
              ].map((slide, idx) => (
                <SwiperSlide key={idx}>
                  <div className="flex flex-col md:flex-row items-center justify-center gap-4 px-4">
                    {/* Texto */}
                    <div className="text-center md:text-left max-w-md">
                      <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#081f5c] mb-2">{slide.title}</h2>
                      <p className="text-[#334eac] mb-2">{slide.desc}</p>
                      <p className="text-[#7096d1] font-semibold">{slide.price}</p>
                      <Button className="mt-4 bg-[#334eac] hover:bg-[#081f5c] text-white">
                        Reservar Cita
                      </Button>
                    </div>
                    {/* Imagen */}
                    <div className="flex-shrink-0">
                      <img
                        src={slide.img}
                        alt={slide.title}
                        loading="lazy"
                        decoding="async"
                        className="h-[300px] w-auto block rounded-lg"
                      />
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

            {/* Flechas */}
            <div className="absolute inset-0 flex items-center justify-between px-4 pointer-events-none">
              <button
                onClick={() => document.querySelector(".swiper")?.swiper.slidePrev()}
                className="pointer-events-auto bg-white/80 border border-[#334eac] rounded-full p-2 shadow hover:bg-[#334eac] hover:text-white transition"
              >
                <FiChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={() => document.querySelector(".swiper")?.swiper.slideNext()}
                className="pointer-events-auto bg-white/80 border border-[#334eac] rounded-full p-2 shadow hover:bg-[#334eac] hover:text-white transition"
              >
                <FiChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Bloque de confianza */}
          <div className="rounded-lg shadow-md border border-[#f6f6f6] p-3 bg-[#f9fcff] space-y-4">
            <div
              className="text-center py-3 px-4 rounded-md"
              style={{
                backgroundImage: "url('/papel-tapiz.jpg')",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <h3 className="text-2xl font-bold text-[#f6f6f6]">Confianza y Seguridad</h3>
            </div>
            <p className="text-[#334eac] text-center max-w-2xl mx-auto">
              Nuestro equipo está conformado por médicos certificados y especialistas con años de experiencia. Garantizamos procedimientos seguros y resultados que superan expectativas.
            </p>
            <div className="grid md:grid-cols-3 gap-4 text-center">
              <div className="bg-white rounded-lg shadow p-4">
                <div className="text-4xl mb-2">🩺</div>
                <h4 className="text-lg font-semibold text-[#081f5c]">Profesionalismo</h4>
                <p className="text-gray-600 text-sm">Médicos certificados en cada área.</p>
              </div>
              <div className="bg-white rounded-lg shadow p-4">
                <div className="text-4xl mb-2">🛡️</div>
                <h4 className="text-lg font-semibold text-[#081f5c]">Seguridad</h4>
                <p className="text-gray-600 text-sm">Protocolos clínicos de máxima seguridad.</p>
              </div>
              <div className="bg-white rounded-lg shadow p-4">
                <div className="text-4xl mb-2">⭐</div>
                <h4 className="text-lg font-semibold text-[#081f5c]">Calidad</h4>
                <p className="text-gray-600 text-sm">Resultados naturales que inspiran confianza.</p>
              </div>
            </div>
            <div className="mt-6 space-y-1">
              <h4 className="text-xl font-semibold text-center text-[#334eac]">Lo que dicen nuestros pacientes</h4>
              <div className="grid md:grid-cols-3 gap-4 text-sm text-gray-700">
                <div className="bg-white rounded-lg shadow p-3 italic">
                  "Me sentí acompañada en todo momento. ¡Resultados increíbles!"
                </div>
                <div className="bg-white rounded-lg shadow p-3 italic">
                  "Excelente atención y profesionalismo de todo el equipo."
                </div>
                <div className="bg-white rounded-lg shadow p-3 italic">
                  "Volvería sin dudarlo. Superaron mis expectativas."
                </div>
              </div>
            </div>
          </div>

          {/* Bloque Call to Action */}
          <div className="rounded-lg shadow-md border border-[#f6f6f6] p-4 bg-[#f9fcff] space-y-1">
            <div
              className="text-center py-2 px-3 rounded-md"
              style={{
                backgroundImage: "url('/papel-tapiz.jpg')",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <h3 className="text-xl md:text-2xl font-bold text-[#f6f6f6]">Reserva tu cita con confianza</h3>
            </div>
            <div className="bg-white rounded-lg shadow border border-[#d0e7ff] p-2 grid md:grid-cols-2 gap-4">
              <div className="space-y-0">
                <h3 className="text-lg font-semibold text-[#081f5c]">Contáctanos</h3>
                <p className="text-gray-600 text-sm">Agenda tu consulta o solicita más información.</p>
                <div>
                  <p className="text-gray-700 text-sm">
                    <strong>Dirección:</strong><br />Av. Garza sada #1000, MTY NL
                  </p>
                  <p className="text-gray-700 text-sm mt-1">
                    <strong>Teléfono:</strong><br />+52 55 1234 5678
                  </p>
                </div>
                <div className="flex space-x-2 pt-1">
                  <img src="/visa.png" alt="Visa" loading="lazy" decoding="async" className="h-7" />
                  <img src="/mastercard.png" alt="MasterCard" loading="lazy" decoding="async" className="h-7" />
                  <img src="/amex.png" alt="Amex" loading="lazy" decoding="async" className="h-7" />
                </div>
              </div>
              <form className="space-y-0">
                <input
                  type="text"
                  placeholder="Nombre completo"
                  className="w-full border border-gray-300 rounded-md px-3 py-0 text-sm focus:outline-none focus:ring-2 focus:ring-[#334eac]"
                />
                <input
                  type="email"
                  placeholder="Correo electrónico"
                  className="w-full border border-gray-300 rounded-md px-3 py-0 text-sm focus:outline-none focus:ring-2 focus:ring-[#334eac]"
                />
                <input
                  type="tel"
                  placeholder="Número de celular"
                  className="w-full border border-gray-300 rounded-md px-3 py-0 text-sm focus:outline-none focus:ring-2 focus:ring-[#334eac]"
                />
                <textarea
                  placeholder="Mensaje"
                  className="w-full border border-gray-300 rounded-md px-3 py-0 text-sm focus:outline-none focus:ring-2 focus:ring-[#334eac]"
                  rows={2}
                />
                <Button className="w-full bg-[#5483b3] hover:bg-[#052659] text-white font-semibold">
                  Enviar
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BeautyClinicDemo;
















