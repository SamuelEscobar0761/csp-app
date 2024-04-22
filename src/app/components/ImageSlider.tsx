import { useEffect, useState } from 'react';
import { Carousel } from "@material-tailwind/react";
import Image from "../interfaces/Image"; // Asegúrate de importar la interfaz actualizada
import { obtenerFile } from '../services/FirebaseService';

export function ImageSlider({ images, text = "" }: { images: Image[]; text?: string }) {
  const [readyImages, setReadyImages] = useState<Image[]>([]);

  useEffect(() => {
    const fetchImages = async () => {
      const imagesWithUrls = await Promise.all(images.map(async (image) => ({
        ...image,
        url: await obtenerFile(image.path) // obtenerFile podría devolver string o null
      })));
      setReadyImages(imagesWithUrls);
    };

    if (images.length > 0) {
      fetchImages();
    }
  }, [images]);

  if (!Array.isArray(readyImages) || readyImages.length === 0) {
    return <div>No se han proporcionado imágenes válidas.</div>;
  }

  return (
    <div className="relative w-full h-screen">
      <Carousel
        transition={{ type: "tween", duration: 2 }}
        autoplay={true}
        autoplayDelay={5000}
        loop={true}
        placeholder={undefined}      >
        {readyImages.map((item, index) => (
          item.url ? (
            <img
              key={index}
              src={item.url}
              alt={`image ${index + 1}`}
              className="h-full w-full object-cover"
            />
          ) : null
        ))}
      </Carousel>
      {text && (
        <div className="absolute inset-0 flex items-center justify-center text-center text-white lg:text-9xl md:text-7xl text-5xl font-bold">
          {text}
        </div>
      )}
    </div>
  );
}
