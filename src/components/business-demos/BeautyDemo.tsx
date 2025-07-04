import { Button } from "@/components/ui/button";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import "swiper/css";

function BeautyClinicDemo() {
  return (
    <div className="relative">
      {/* Section Label */}
      <div className="text-center mb-6 md:mb-8">
        <span className="inline-block px-4 py-2 bg-[#334eac] text-white rounded-full text-sm font-semibold">
          ✨ Clínica Estética Premium
        </span>
      </div>

      {/* Plano General */}
      <div className="bg-gradient-to-br from-[#e7f1ff] to-[#f9fcff] rounded-2xl p-4 md:p-8 shadow-2xl border border-[#d0e7ff] max-w-4xl md:max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-4 md:mb-6">
          <div className="text-xl md:text-2xl font-bold text-[#081f5c]">Epiclinic</div>
          <nav className="flex flex-wrap gap-3 md:gap-4 mt-2 md:mt-0">
            {["Inicio", "Servicios", "Testimonios", "Preguntas Frecuentes", "Contacto"].map((item) => (
              <a
                key={item}
                href="#"
                className="text-[#334eac] hover:text-[#081f5c] text-sm font-medium transition"
              >
                {item}
              </a>
            ))}
          </nav>
        </div>

        {/* Plano Entero */}
        <div className="rounded-xl p-4 md:p-8 shadow-lg relative bg-white space-y-4 md:space-y-6">
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
                  <div className="flex flex-col md:flex-row items-center justify-center gap-4 px-2 md:px-4 py-4">
                    {/* Texto */}
                    <div className="text-center md:text-left max-w-md">
                      <h2 className="text-2xl md:text-4xl font-serif font-bold text-[#081f5c] mb-1 md:mb-2">
                        {slide.title}
                      </h2>
                      <p className="text-[#334eac] mb-1 md:mb-2">{slide.desc}</p>
                      <p className="text-[#7096d1] font-semibold">{slide.price}</p>
                      <Button className="mt-3 md:mt-4 bg-[#334eac] hover:bg-[#081f5c] text-white">
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
                        className="h-[220px] md:h-[300px] w-auto block rounded-lg"
                      />
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

            {/* Flechas */}
            <div className="hidden md:flex absolute inset-0 items-center justify-between px-4 pointer-events-none">
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
          <div className="rounded-lg shadow-md border border-[#f6f6f6] p-3 md:p-4 bg-[#f9fcff] space-y-3 md:space-y-4">
            <div
              className="text-center py-2 px-3 rounded-md"
              style={{
                backgroundImage: "url('/papel-tapiz.jpg')",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <h3 className="text-xl md:text-2xl font-bold text-[#f6f6f6]">Confianza y Seguridad</h3>
            </div>
            <p className="text-[#334eac] text-center max-w-2xl mx-auto">
              Nuestro equipo está conformado por médicos certificados y especialistas con años de experiencia.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-2 md:gap-4 text-center">
              {[
                ["🩺", "Profesionalismo", "Médicos certificados en cada área."],
                ["🛡️", "Seguridad", "Protocolos clínicos de máxima seguridad."],
                ["⭐", "Calidad", "Resultados naturales que inspiran confianza."],
              ].map(([icon, title, desc]) => (
                <div key={title} className="bg-white rounded-lg shadow p-3 md:p-4">
                  <div className="text-3xl md:text-4xl mb-1">{icon}</div>
                  <h4 className="text-base md:text-lg font-semibold text-[#081f5c]">{title}</h4>
                  <p className="text-gray-600 text-xs md:text-sm">{desc}</p>
                </div>
              ))}
            </div>
            <div className="mt-4 space-y-1">
              <h4 className="text-lg md:text-xl font-semibold text-center text-[#334eac]">
                Lo que dicen nuestros pacientes
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-2 md:gap-4 text-sm text-gray-700">
                {[
                  "Me sentí acompañada en todo momento. ¡Resultados increíbles!",
                  "Excelente atención y profesionalismo de todo el equipo.",
                  "Volvería sin dudarlo. Superaron mis expectativas.",
                ].map((text) => (
                  <div key={text} className="bg-white rounded-lg shadow p-2 md:p-3 italic">
                    "{text}"
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Bloque Call to Action */}
          <div className="rounded-lg shadow-md border border-[#f6f6f6] p-3 md:p-4 bg-[#f9fcff] space-y-3">
            <div
              className="text-center py-2 px-3 rounded-md"
              style={{
                backgroundImage: "url('/papel-tapiz.jpg')",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <h3 className="text-lg md:text-2xl font-bold text-[#f6f6f6]">Reserva tu cita con confianza</h3>
            </div>
            <div className="bg-white rounded-lg shadow border border-[#d0e7ff] p-2 grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
              <div className="space-y-1">
                <h3 className="text-base md:text-lg font-semibold text-[#081f5c]">Contáctanos</h3>
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
                  {["visa", "mastercard", "amex"].map((logo) => (
                    <img
                      key={logo}
                      src={`/${logo}.png`}
                      alt={logo}
                      loading="lazy"
                      decoding="async"
                      className="h-6 md:h-7"
                    />
                  ))}
                </div>
              </div>
              <form className="space-y-2">
                <input
                  type="text"
                  placeholder="Nombre completo"
                  className="w-full border border-gray-300 rounded-md px-3 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-[#334eac]"
                />
                <input
                  type="email"
                  placeholder="Correo electrónico"
                  className="w-full border border-gray-300 rounded-md px-3 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-[#334eac]"
                />
                <input
                  type="tel"
                  placeholder="Número de celular"
                  className="w-full border border-gray-300 rounded-md px-3 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-[#334eac]"
                />
                <textarea
                  placeholder="Mensaje"
                  rows={2}
                  className="w-full border border-gray-300 rounded-md px-3 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-[#334eac]"
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





















