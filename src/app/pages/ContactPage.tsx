import { useEffect, useState } from "react";
import Image from '../interfaces/Image';
import { ImageSlider } from "../components/ImageSlider";
import LocateImageService from "../services/LocateImageService";
import ContactItem from "../components/ContactItem";
import RecognitionItem from "../components/RecognitionItem";
import { useTranslation } from "react-i18next";

export const ContactPage = () => {
    const [images_about_us, setImages_about_us] = useState<Image[]>([]);
    const { t } = useTranslation('ns1');
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
            <ImageSlider images={images_about_us} text={t('contact_us_page.title')}/>
            <h2 className={`pt-10 text-white bg-[#80AE8A] text-center text-5xl`}>Personal</h2>
            <div className={`md:flex`}>
                <ContactItem sections={2} image={"/assets/images/sin_foto.jpg"} title={t('contact_us_page.staff.0.name')} text={t('contact_us_page.staff.0.description')} />
                <ContactItem sections={2} image={"/assets/images/sin_foto.jpg"} title={t('contact_us_page.staff.1.name')} text={t('contact_us_page.staff.1.description')} />
            </div>
            <h2 className={`py-10 text-white bg-[#80AE8A] text-center text-5xl`}>Redes Sociales</h2>
            <div className={`md:flex`}>
                <RecognitionItem image="/assets/images/sin_foto.jpg" sections={3} title={t('contact_us_page.social_networks.0.name')} text={t('contact_us_page.social_networks.0.description')}/>
                <RecognitionItem image="/assets/images/sin_foto.jpg" sections={3} title={t('contact_us_page.social_networks.1.name')} text={t('contact_us_page.social_networks.1.description')}/>
                <RecognitionItem image="/assets/images/sin_foto.jpg" sections={3} title={t('contact_us_page.social_networks.2.name')} text={t('contact_us_page.social_networks.2.description')}/>
            </div>
        </div>
    );
};