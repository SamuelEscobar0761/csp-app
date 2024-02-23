import { useEffect, useState } from "react";
import LocateImageService from "../services/LocateImageService";
import Image from '../interfaces/Image';
import { ImageSlider } from "../components/ImageSlider";

export default function AboutUsPage(){
    const [images_about_us, setImages_about_us] = useState<Image[]>([]);
    
    useEffect(() => {
        LocateImageService.getInstance().getImages("about_us_page", "carousel")
            .then(images => {
                setImages_about_us(images);
            })
            .catch(error => {
                console.error('Error al obtener las imágenes:', error);
        });
    }, []);

    return(
        <div>
            <ImageSlider images={images_about_us} text="Nuestra Historia"/>
        </div>
    );
};