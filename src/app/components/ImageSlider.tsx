import { Carousel } from "@material-tailwind/react";
import LocateImageService from "../services/LocateImageService";
import { useEffect, useState } from "react";

export function ImageSlider() {
    const [images, setImages] = useState<[][]>([]);

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
    <Carousel transition={{type: "tween", duration: 2 }} className="rounded-xl" placeholder={undefined} autoplay={true} autoplayDelay={5000} loop={true}>
      {images.map((item, index) => (
                <img
                    key={index}
                    src={item.path}  // Se asume que la propiedad 'path' contiene la URL de la imagen
                    alt={`image ${index + 1}`}  // Se asigna un texto alternativo único para cada imagen
                    className="h-full w-full object-cover"
                />
            ))}
      <img
        src="https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2560&q=80"
        alt="image 1"
        className="h-full w-full object-cover"
      />
      <img
        src="https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80"
        alt="image 2"
        className="h-full w-full object-cover"
      />
      <img
        src="https://images.unsplash.com/photo-1518623489648-a173ef7824f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2762&q=80"
        alt="image 3"
        className="h-full w-full object-cover"
      />
    </Carousel>
    </>
  );
}