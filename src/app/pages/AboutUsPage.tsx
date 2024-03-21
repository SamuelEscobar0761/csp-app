import { useEffect, useState } from "react";
import LocateImageService from "../services/LocateImageService";
import Image from '../interfaces/Image';
import { ImageSlider } from "../components/ImageSlider";
import CatalogItem from "../components/CatalogItem";
import { useTranslation } from "react-i18next";
import RecognitionItem from "../components/RecognitionItem";

export default function AboutUsPage(){
    const [images_about_us, setImages_about_us] = useState<Image[]>([]);    const[founderImages, setFounderImages] = useState<Image[]>([]);
    const[chronologyImages, setchronologyImages] = useState<Image[]>([]);
    const[recognitionImages, setRecognitionImages] = useState<Image[]>([]);
    const { t } = useTranslation('ns1');
    console.log(recognitionImages);

    useEffect(() => {
        LocateImageService.getInstance().getImages("about_us_page", "carousel")
            .then(images => {
                setImages_about_us(images);
            })
            .catch(error => {
                console.error('Error al obtener las imágenes:', error);
        });

        LocateImageService.getInstance().getImages("about_us_page", "founder")
            .then(images => {
                setFounderImages(images);
            })
            .catch(error => {
                console.error('Error al obtener las imágenes:', error);
        });

        LocateImageService.getInstance().getImages("about_us_page", "chronology")
            .then(images => {
                setchronologyImages(images);
            })
            .catch(error => {
                console.error('Error al obtener las imágenes:', error);
        });

        LocateImageService.getInstance().getImages("about_us_page", "recognition")
            .then(images => {
                setRecognitionImages(images);
            })
            .catch(error => {
                console.error('Error al obtener las imágenes:', error);
        });
    }, []);

    return(
        <div>
            <ImageSlider images={images_about_us} text={t('about_us_page.title')}/>
            <h2 className={`pt-10 text-white bg-[#80AE8A] text-center text-5xl`}>{t('about_us_page.founder_title')}</h2>
            {founderImages.map((item, index) => (
                <CatalogItem key={index} img_position='left' img_path={item.path} description={t('about_us_page.founder_description')}/>
            ))}
            {chronologyImages.map((item, index) => (
                <CatalogItem key={index} img_position='right' title={t('about_us_page.chronology_title')} img_path={item.path} description={t('about_us_page.chronology_description')}/>
            ))}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 bg-[#80AE8A] p-4">
                <RecognitionItem sections={1} image="/assets/images/homepage/areas/patio_principal.jpeg" title={t('about_us_page.recognition1_title')} text={t('about_us_page.recognition1_description')}/>
                <RecognitionItem sections={1} image="/assets/images/homepage/areas/patio_principal.jpeg" title={t('about_us_page.recognition2_title')} text={t('about_us_page.recognition2_description')}/>
                <RecognitionItem sections={1} image="/assets/images/homepage/areas/patio_principal.jpeg" title={t('about_us_page.recognition3_title')} text={t('about_us_page.recognition3_description')}/>
            </div>
        </div>
    );
};