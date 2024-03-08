import { useEffect, useState } from "react";
import Image from '../interfaces/Image';
import { ImageSlider } from "../components/ImageSlider";
import LocateImageService from "../services/LocateImageService";
import ContactItem from "../components/ContactItem";
import RecognitionItem from "../components/RecognitionItem";

export function ContactPage(){
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
    return (
        <div>
            <ImageSlider images={images_about_us} text="Contactos"/>
            <h2 className={`pt-10 text-white bg-[#80AE8A] text-center text-5xl`}>Personal</h2>
            <div className={`md:flex`}>
                <ContactItem sections={2} image={"/public/assets/images/homepage/about_us/comedor_mesa.jpeg"} title="Nombre" text={`Cargo: Lorem ipsum dolor sit amet, consectetur adipiscing elit.\nNumero:13241244`} />
                <ContactItem sections={2} image={"/public/assets/images/homepage/about_us/comedor_mesa.jpeg"} title="Nombre" text={`Cargo: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sagittis risus sapien, quis congue diam sagittis non. Fusce eleifend gravida metus, nec tempus tortor efficitur sit amet. Vivamus sodales condimentum erat, eu pretium orci sagittis a.\nNumero:13241244`} />
            </div>
            <h2 className={`py-10 text-white bg-[#80AE8A] text-center text-5xl`}>Redes Sociales</h2>
            <div className={`md:flex`}>
                <RecognitionItem image="/public/assets/images/homepage/about_us/comedor_mesa.jpeg" sections={3} title="Facebook" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sagittis risus sapien, quis congue diam sagittis non. Fusce eleifend gravida metus, nec tempus tortor efficitur sit amet. Vivamus sodales condimentum erat, eu pretium orci sagittis a."/>
                <RecognitionItem image="/public/assets/images/homepage/about_us/comedor_mesa.jpeg" sections={3} title="Instagram" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sagittis risus sapien, quis congue diam sagittis non. Fusce eleifend gravida metus, nec tempus tortor efficitur sit amet. Vivamus sodales condimentum erat, eu pretium orci sagittis a."/>
                <RecognitionItem image="/public/assets/images/homepage/about_us/comedor_mesa.jpeg" sections={3} title="Whatsapp" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sagittis risus sapien, quis congue diam sagittis non. Fusce eleifend gravida metus, nec tempus tortor efficitur sit amet. Vivamus sodales condimentum erat, eu pretium orci sagittis a."/>
            </div>
        </div>
    );
};