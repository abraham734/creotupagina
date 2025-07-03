import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MessageCircle, Mail, Phone } from "lucide-react";

const Contact = () => {
  return (
    <div className="py-20 bg-gradient-to-br from-gray-900 to-blue-900 relative overflow-hidden">
      {/* Floating Bubbles */}
      <div className="absolute top-1/4 left-10 w-20 h-20 bg-blue-500 rounded-full opacity-20 floating"></div>
      <div className="absolute bottom-1/4 right-10 w-16 h-16 bg-purple-500 rounded-full opacity-20 floating-delayed"></div>
      <div className="absolute top-1/3 right-20 w-24 h-24 bg-pink-500 rounded-full opacity-10 floating"></div>
      <div className="absolute bottom-10 left-1/4 w-14 h-14 bg-blue-400 rounded-full opacity-15 floating-delayed"></div>
      <div className="absolute top-10 right-1/3 w-12 h-12 bg-purple-400 rounded-full opacity-15 floating"></div>
      <div className="absolute bottom-1/3 left-1/3 w-20 h-20 bg-blue-600 rounded-full opacity-10 floating-delayed"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            ¿Listo para Crear Tu Página Web?
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Conversemos sobre tu proyecto. Te ayudo a crear la página web perfecta para hacer crecer tu negocio.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white rounded-2xl p-8 shadow-xl">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Envíame un Mensaje</h3>
              <form className="space-y-6">
                <div>
                  <Input 
                    placeholder="Tu nombre completo" 
                    className="w-full p-4 border-2 border-gray-200 rounded-lg focus:border-blue-500 transition-colors"
                  />
                </div>
                <div>
                  <Input 
                    type="email" 
                    placeholder="Tu email" 
                    className="w-full p-4 border-2 border-gray-200 rounded-lg focus:border-blue-500 transition-colors"
                  />
                </div>
                <div>
                  <Input 
                    placeholder="Tipo de negocio (ej: restaurante, tienda, etc.)" 
                    className="w-full p-4 border-2 border-gray-200 rounded-lg focus:border-blue-500 transition-colors"
                  />
                </div>
                <div>
                  <Textarea 
                    placeholder="Cuéntame sobre tu proyecto y tus necesidades..."
                    rows={4}
                    className="w-full p-4 border-2 border-gray-200 rounded-lg focus:border-blue-500 transition-colors resize-none"
                  />
                </div>
                <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white py-4 text-lg font-semibold">
                  Enviar Mensaje
                </Button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="space-y-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-6">Contacto Directo</h3>
                <div className="space-y-6">
                  <a 
                    href="https://wa.me/528128854898" 
                    className="flex items-center space-x-4 p-4 bg-green-600 rounded-lg hover:bg-green-700 transition-colors group"
                  >
                    <MessageCircle size={24} className="group-hover:scale-110 transition-transform" />
                    <div>
                      <p className="font-semibold">WhatsApp</p>
                      <p className="text-green-100">+52 81 2885 4898</p>
                    </div>
                  </a>
                  
                  <div className="flex items-center space-x-4 p-4 bg-blue-600 rounded-lg">
                    <Mail size={24} />
                    <div>
                      <p className="font-semibold">Email</p>
                      <p className="text-blue-100">creotupagina@gmail.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4 p-4 bg-purple-600 rounded-lg">
                    <Phone size={24} />
                    <div>
                      <p className="font-semibold">Teléfono</p>
                      <p className="text-purple-100">+52 81 2885 4898</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-white">
                <h3 className="text-xl font-bold mb-4">¿Por qué elegirme?</h3>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start space-x-2">
                    <span className="text-green-400 mt-1">✓</span>
                    <span>Diseños únicos y profesionales</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-green-400 mt-1">✓</span>
                    <span>Optimizado para móviles</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-green-400 mt-1">✓</span>
                    <span>Soporte técnico incluido</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-green-400 mt-1">✓</span>
                    <span>Entrega en tiempo récord</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

