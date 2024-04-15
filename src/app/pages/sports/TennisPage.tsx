import { useEffect, useState } from "react";
import { ImageSlider } from "../../components/ImageSlider";
import { useTranslation } from "react-i18next";
import Image from '../../interfaces/Image';
import LocateImageService from "../../services/LocateImageService";

export const TennisPage = () => {
    const [imagesCarousel, setImagesCarousel] = useState<Image[]>([]);
    const { t } = useTranslation('ns1');

    useEffect(() => {
        LocateImageService.getInstance().getImages("restaurant_page", "carousel")
            .then(images => {
                setImagesCarousel(images);
            })
            .catch(error => {
                console.error('Error al obtener las imágenes:', error);
        });
    }, []);
    return(
        <div>
            <ImageSlider images={imagesCarousel} text={t('tennis_page.tennis_page_title')}/>
            <h2 className={`py-10 text-primary bg-white text-center text-7xl font-bold`}>{t('tennis_page.information_title')}</h2>
            <div className="flex justify-center ...">
                <img src='\assets\images\comunicados\comunicado.jpg' className='w-2/3'/>
            </div>
        </div>
    );
    
}