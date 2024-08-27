import { Carousel } from "@material-tailwind/react";
import Image from "../interfaces/Image";

export function ImageSlider({ images, text = "", homepage }: { images: Image[]; text?: string, homepage?: boolean }) {
  // Verificar si images es un array
  if (!Array.isArray(images)) {
    // Si no es un array, retornar un mensaje de error o un elemento alternativo
    return <div>No se han proporcionado imágenes válidas.</div>;
  }

  return (
    <div className="relative w-full h-[400px] lg:h-[800px]">
      <Carousel
        transition={{ type: "tween", duration: 2 }}
        placeholder={undefined}
        autoplay={true}
        autoplayDelay={5000}
        loop={true}
      >
        {/* Mapear solo si images es un array */}
        {images.map((item, index) => (
          <img
            key={index}
            src={item.path}
            alt={`image ${index + 1}`}
            className="h-full w-full object-cover"
          />
        ))}
      </Carousel>
      {/* Agregar el texto centrado si hay texto */}
      {text && (
        <div className="absolute inset-0 flex items-center justify-center text-center">
          <div className="w-2/3">
          <p className="text-white lg:text-7xl md:text-5xl text-3xl font-bold"
             style={{ textShadow: '2px 2px 0 rgba(0, 0, 0, 0.75)' }}>
            {text}
          </p>
          {homepage &&(<p className="text-white lg:text-5xl md:text-3xl text-xl font-bold"
             style={{ textShadow: '2px 2px 0 rgba(0, 0, 0, 0.75)' }}>
            Sea parte de nuestra familia. Cambie su vida.
          </p>
          )}
          </div>
        </div>
      )}
    </div>
  );
}
