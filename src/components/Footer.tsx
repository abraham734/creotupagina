import { FaWhatsapp, FaInstagram, FaFacebook } from "react-icons/fa";
import { Mail, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-950 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              creotupagina.com
            </h3>
            <p className="text-gray-400 mb-6 max-w-md">
              En creotupagina.com diseño sitios web que hablan por tu negocio.
              Te ayudo a destacar online con páginas claras, funcionales y atractivas.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://wa.me/528128854898"
                className="p-3 bg-green-600 hover:bg-green-700 rounded-full transition-colors"
                aria-label="WhatsApp"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaWhatsapp size={20} />
              </a>
              <a 
                href="https://www.instagram.com/creo_tupagina/"
                className="p-3 bg-gradient-to-br from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 rounded-full transition-colors"
                aria-label="Instagram"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram size={20} />
              </a>
              <a 
                href="https://www.facebook.com/share/1AtwHoUTP2/?mibextid=wwXIfr"
                className="p-3 bg-blue-600 hover:bg-blue-700 rounded-full transition-colors"
                aria-label="Facebook"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebook size={20} />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Servicios</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">Diseño Web</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Tiendas Online</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Landing Pages</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Mantenimiento</a></li>
              <li><a href="#" className="hover:text-white transition-colors">SEO Básico</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contacto</h4>
            <div className="space-y-3 text-gray-400">
              <div className="flex items-center space-x-2">
                <FaWhatsapp size={16} />
                <span>+52 81 2885 4898</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail size={16} />
                <span>creotupagina83@gmail.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone size={16} />
                <span>+52 81 2885 4898</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2024 creotupagina.com. Todos los derechos reservados.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
              Términos de Servicio
            </a>
            <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
              Política de Privacidad
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;


