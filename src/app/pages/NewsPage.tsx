import { useEffect, useState } from "react";
import Image from '../interfaces/Image';
import { ImageSlider } from "../components/ImageSlider";
import LocateImageService from "../services/LocateImageService";
import CatalogItem from "../components/CatalogItem";
import RecognitionItem from "../components/RecognitionItem";
import { useTranslation } from "react-i18next";

export const NewsPage = () => {
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
    return(
        <div>
            <ImageSlider images={images_about_us} text={t('news_page.title')}/>
            <div>
                <h2 className="text-center mx-auto bg-[#80AE8A] text-white pt-10 md:pt-20 md:text-5xl text-3xl">{t('news_page.nearby_events_title')}</h2>
                <CatalogItem img_path="/assets/images/sin_foto.jpg" img_position="left" description={t('news_page.events.0.description')} title={`${t('news_page.events.0.name')} - ${t('news_page.events.0.date')}`}/>
                <CatalogItem img_path="/assets/images/sin_foto.jpg" img_position="left" description={t('news_page.events.1.description')} title={`${t('news_page.events.1.name')} - ${t('news_page.events.1.date')}`}/>
                <CatalogItem img_path="/assets/images/sin_foto.jpg" img_position="left" description={t('news_page.events.2.description')} title={`${t('news_page.events.2.name')} - ${t('news_page.events.2.date')}`}/>
            </div>
            <h2 className="text-center mx-auto bg-[#80AE8A] text-white pt-10 md:pt-20 md:text-5xl text-3xl">{t('news_page.calendar.title')}</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 bg-[#80AE8A] p-4">
                <RecognitionItem sections={1} image="/assets/images/sin_foto.jpg" title={`${t('news_page.calendar.0.name')} - ${t('news_page.calendar.0.date')}`}/>
                <RecognitionItem sections={1} image="/assets/images/sin_foto.jpg" title={`${t('news_page.calendar.1.name')} - ${t('news_page.calendar.1.date')}`}/>
                <RecognitionItem sections={1} image="/assets/images/sin_foto.jpg" title={`${t('news_page.calendar.2.name')} - ${t('news_page.calendar.2.date')}`}/>
                <RecognitionItem sections={1} image="/assets/images/sin_foto.jpg" title={`${t('news_page.calendar.3.name')} - ${t('news_page.calendar.3.date')}`}/>
                <RecognitionItem sections={1} image="/assets/images/sin_foto.jpg" title={`${t('news_page.calendar.4.name')} - ${t('news_page.calendar.4.date')}`}/>
                <RecognitionItem sections={1} image="/assets/images/sin_foto.jpg" title={`${t('news_page.calendar.5.name')} - ${t('news_page.calendar.5.date')}`}/>
            </div>

        </div>
    );
};