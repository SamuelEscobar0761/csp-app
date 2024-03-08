import { useEffect, useState } from "react";
import Image from '../interfaces/Image';
import { ImageSlider } from "../components/ImageSlider";
import LocateImageService from "../services/LocateImageService";
import RecognitionItem from "../components/RecognitionItem";
import CatalogItem from "../components/CatalogItem";

export default function SportsPage(){
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
            <ImageSlider images={images_about_us} text="Disciplinas Deportivas"/>
            <h2 className="py-5 bg-[#80AE8A] text-white text-5xl text-center">Deportes</h2>
            <div className="flex">
                <RecognitionItem sections={3} image="public/assets/images/homepage/areas/patio_principal.jpeg" title="Nombre" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sagittis risus sapien, quis congue diam sagittis non. Fusce eleifend gravida metus, nec tempus tortor efficitur sit amet."/>
                <RecognitionItem sections={3} image="public/assets/images/homepage/areas/patio_principal.jpeg" title="Nombre" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sagittis risus sapien, quis congue diam sagittis non. Fusce eleifend gravida metus, nec tempus tortor efficitur sit amet."/>    
                <RecognitionItem sections={3} image="public/assets/images/homepage/areas/patio_principal.jpeg" title="Nombre" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sagittis risus sapien, quis congue diam sagittis non. Fusce eleifend gravida metus, nec tempus tortor efficitur sit amet."/>
            </div>
            <div className="flex">
                <RecognitionItem sections={3} image="public/assets/images/homepage/areas/patio_principal.jpeg" title="Nombre" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sagittis risus sapien, quis congue diam sagittis non. Fusce eleifend gravida metus, nec tempus tortor efficitur sit amet."/>
                <RecognitionItem sections={3} image="public/assets/images/homepage/areas/patio_principal.jpeg" title="Nombre" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sagittis risus sapien, quis congue diam sagittis non. Fusce eleifend gravida metus, nec tempus tortor efficitur sit amet."/>    
                <RecognitionItem sections={3} image="public/assets/images/homepage/areas/patio_principal.jpeg" title="Nombre" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sagittis risus sapien, quis congue diam sagittis non. Fusce eleifend gravida metus, nec tempus tortor efficitur sit amet."/>
            </div>
            <div>
                <CatalogItem img_path="public/assets/images/homepage/areas/patio_principal.jpeg" img_position="left" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sagittis risus sapien, quis congue diam sagittis non. Fusce eleifend gravida metus, nec tempus tortor efficitur sit amet. Vivamus sodales condimentum erat, eu pretium orci sagittis a. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nulla interdum odio lorem, vel consequat eros pretium efficitur. Pellentesque vel accumsan magna, nec blandit lorem. Nam pretium eu nisi et faucibus. Curabitur ut ligula fringilla, cursus tortor quis, fringilla nisl. Fusce sodales turpis eget vehicula accumsan. Donec feugiat tincidunt ornare. Quisque ligula eros, aliquam vel porttitor tincidunt, lobortis et arcu. Sed fermentum porttitor est, eu suscipit diam. Suspendisse tristique varius velit, eget sollicitudin diam mattis nec." hiperTitle="Premios y Categorias" title="Nombre"/>
                <CatalogItem img_path="public/assets/images/homepage/areas/patio_principal.jpeg" img_position="right" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sagittis risus sapien, quis congue diam sagittis non. Fusce eleifend gravida metus, nec tempus tortor efficitur sit amet. Vivamus sodales condimentum erat, eu pretium orci sagittis a. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nulla interdum odio lorem, vel consequat eros pretium efficitur. Pellentesque vel accumsan magna, nec blandit lorem. Nam pretium eu nisi et faucibus. Curabitur ut ligula fringilla, cursus tortor quis, fringilla nisl. Fusce sodales turpis eget vehicula accumsan. Donec feugiat tincidunt ornare. Quisque ligula eros, aliquam vel porttitor tincidunt, lobortis et arcu. Sed fermentum porttitor est, eu suscipit diam. Suspendisse tristique varius velit, eget sollicitudin diam mattis nec." title="Nombre"/>
            </div>
        </div>
    );
};