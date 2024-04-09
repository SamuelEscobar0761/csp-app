import { useTranslation } from "react-i18next";
import { ImageSlider } from "../components/ImageSlider";
import { useEffect, useState } from "react";
import Image from '../interfaces/Image';
import LocateImageService from "../services/LocateImageService";

export const RestaurantPage = () => {
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
            <ImageSlider images={imagesCarousel} text={t('restaurant_page.restaurant_title')}/>
            <br id="weekly"/>
            <br/>
            <br/>
            <h2 className="py-10 text-primary bg-white text-center text-7xl font-bold`">{t('restaurant_page.weekly_menu_title')}</h2>
            <div className="flex justify-center ...">
                <iframe src='\assets\pdfs\comunicado.pdf' className='w-11/12 md:h-screen'/>
            </div>
            <br id="main"/>
            <br/>
            <br/>
            <h2 className="py-10 text-primary bg-white text-center text-7xl font-bold`">{t('restaurant_page.main_menu_title')}</h2>
            <div className="flex justify-center ...">
                <iframe src='\assets\pdfs\comunicado.pdf' className='w-11/12 md:h-screen'/>
            </div>
            <br id="snack"/>
            <br/>
            <br/>
            <h2 className="py-10 text-primary bg-white text-center text-7xl font-bold`">{t('restaurant_page.snack_menu_title')}</h2>
            <div className="flex justify-center ...">
                <iframe src='\assets\pdfs\comunicado.pdf' className='w-11/12 md:h-screen'/>
            </div>
        </div>
    );   
};