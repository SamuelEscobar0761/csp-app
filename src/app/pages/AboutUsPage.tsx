import { useEffect, useState } from "react";
import LocateImageService from "../services/LocateImageService";
import Image from '../interfaces/Image';
import { ImageSlider } from "../components/ImageSlider";
import CatalogItem from "../components/CatalogItem";
import { useTranslation } from "react-i18next";

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
            <ImageSlider images={images_about_us} text="Nuestra Historia"/>
            {founderImages.map((item, index) => (
                <CatalogItem key={index} img_position='left' hiperTitle={t('about_us_page.founder_title')} img_path={item.path} description={t('about_us_page.founder_description')}/>
            ))}
            {chronologyImages.map((item, index) => (
                <CatalogItem key={index} img_position='right' title={t('about_us_page.chronology_title')} img_path={item.path} description={t('about_us_page.chronology_description')}/>
            ))}
        </div>
    );
};