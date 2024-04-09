import { useEffect, useState } from "react";
import Image from '../interfaces/Image';
import { useTranslation } from "react-i18next";
import LocateImageService from "../services/LocateImageService";
import { ImageSlider } from "../components/ImageSlider";

export const JoinUsPage = () => {
    const [imagesCarousel, setImagesCarousel] = useState<Image[]>([]);
    const { t } = useTranslation('ns1');

    useEffect(() => {
        LocateImageService.getInstance().getImages("join_us_page", "carousel")
            .then(images => {
                setImagesCarousel(images);
            })
            .catch(error => {
                console.error('Error al obtener las imágenes:', error);
        });
    }, []);
    
    return(
        <div>
            <ImageSlider images={imagesCarousel} text={t('join_us_page.join_us_title')}/>
            <h2 className="py-10 text-primary bg-white text-center text-7xl font-bold`">{t('join_us_page.tariff_title')}</h2>
            <div className="flex justify-center ...">
                <img src='\assets\images\sin_foto.jpg' className='w-2/3'/>
            </div>
            <h2 className="py-10 text-primary bg-white text-center text-7xl font-bold`">{t('join_us_page.participation_title')}</h2>
            <div className="flex justify-center ...">
                <img src='\assets\images\sin_foto.jpg' className='w-2/3'/>
            </div>
        </div>
    );
};