
import PizzeriaDemo from "./business-demos/PizzeriaDemo";
import ClothingStoreDemo from "./business-demos/ClothingStoreDemo";
import PhotographyDemo from "./business-demos/PhotographyDemo";
import BeautyDemo from "./business-demos/BeautyDemo";

const BusinessShowcase = () => {
  return (
    <div className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Páginas Web para Tu Negocio
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Cada diseño está pensado para el éxito de tu negocio local. 
            Mira cómo podría verse tu página web profesional.
          </p>
        </div>

        <div className="space-y-32">
          <PizzeriaDemo />
          <ClothingStoreDemo />
          <PhotographyDemo />
          <BeautyDemo />
        </div>
      </div>
    </div>
  );
};

export default BusinessShowcase;
