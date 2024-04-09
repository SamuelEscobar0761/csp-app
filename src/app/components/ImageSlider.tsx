import { Carousel } from "@material-tailwind/react";
import Image from "../interfaces/Image";

export function ImageSlider({ images, text = "" }: { images: Image[]; text?: string }) {
  // Verificar si images es un array
  if (!Array.isArray(images)) {
    // Si no es un array, retornar un mensaje de error o un elemento alternativo
    return <div>No se han proporcionado imágenes válidas.</div>;
  }

  return (
    <div className="relative w-full h-screen">
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
        <div className="absolute inset-0 flex items-center justify-center text-center text-white lg:text-9xl md:text-7xl text-5xl font-bold">
          {text}
        </div>
      )}
    </div>
  );
}
