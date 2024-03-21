import { useEffect, useState } from "react";
import Image from '../interfaces/Image';
import { ImageSlider } from "../components/ImageSlider";
import LocateImageService from "../services/LocateImageService";
import RecognitionItem from "../components/RecognitionItem";
import CatalogItem from "../components/CatalogItem";
import { useTranslation } from "react-i18next";

export default function SportsPage(){
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
            <ImageSlider images={images_about_us} text={t('sports_page.title')}/>
            <h2 className="py-5 bg-[#80AE8A] text-white text-5xl text-center">{t('sports_page.sports_title')}</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 bg-[#80AE8A] p-4">
                <RecognitionItem sections={1} image="/public/assets/images/sin_foto.jpg" title={t('sports_page.sports.0.name')} text={t('sports_page.sports.0.description')}/>
                <RecognitionItem sections={1} image="/public/assets/images/sin_foto.jpg" title={t('sports_page.sports.1.name')} text={t('sports_page.sports.1.description')}/>
                <RecognitionItem sections={1} image="/public/assets/images/sin_foto.jpg" title={t('sports_page.sports.2.name')} text={t('sports_page.sports.2.description')}/>
                <RecognitionItem sections={1} image="/public/assets/images/sin_foto.jpg" title={t('sports_page.sports.3.name')} text={t('sports_page.sports.3.description')}/>
                <RecognitionItem sections={1} image="/public/assets/images/sin_foto.jpg" title={t('sports_page.sports.4.name')} text={t('sports_page.sports.4.description')}/>
                <RecognitionItem sections={1} image="/public/assets/images/sin_foto.jpg" title={t('sports_page.sports.5.name')} text={t('sports_page.sports.5.description')}/>
            </div>
            <div>
                <h2 className={`pt-10 text-white bg-[#80AE8A] text-center text-5xl`}>{t('sports_page.awards_title')}</h2>
                <CatalogItem img_path="/public/assets/images/sin_foto.jpg" img_position="left" description={t('sports_page.awards.0.description')} title={t('sports_page.awards.0.name')}/>
                <CatalogItem img_path="/public/assets/images/sin_foto.jpg" img_position="left" description={t('sports_page.awards.1.description')} title={t('sports_page.awards.1.name')}/>
            </div>
        </div>
    );
};