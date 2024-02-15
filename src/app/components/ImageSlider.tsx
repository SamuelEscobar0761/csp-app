import { Carousel } from "@material-tailwind/react";
import LocateImageService from "../services/LocateImageService";
import { useEffect, useState } from "react";
import Image from "../interfaces/Image";

export function ImageSlider() {
    const [images, setImages] = useState<Image[]>([]);

    useEffect(() => {
        LocateImageService.getInstance().getImages("homepage", "carousel")
            .then(images => {
                setImages(images);
            })
            .catch(error => {
                console.error('Error al obtener las imágenes:', error);
            });
    }, []);

    
  return (
    <>
    <Carousel transition={{type: "tween", duration: 2 }} placeholder={undefined} autoplay={true} autoplayDelay={5000} loop={true}>
      {images.map((item, index) => (
                <img
                    key={index}
                    src={item.path}  // Se asume que la propiedad 'path' contiene la URL de la imagen
                    alt={`image ${index + 1}`}  // Se asigna un texto alternativo único para cada imagen
                    className="h-full w-full object-cover"
                />
            ))}
    </Carousel>
    </>
  );
}