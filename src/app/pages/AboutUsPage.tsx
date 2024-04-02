import { useEffect, useState } from "react";
import { ImageSlider } from "../components/ImageSlider";
import { useTranslation } from "react-i18next";
import LocateImageService from "../services/LocateImageService";
import Image from '../interfaces/Image';
import CatalogItem from "../components/CatalogItem";
import RecognitionItem from "../components/RecognitionItem";

export const AboutUsPage = () => {
    const [images_about_us, setImages_about_us] = useState<Image[]>([]);
    const[chronologyImages, setchronologyImages] = useState<Image[]>([]);
    const[recognitionImages, setRecognitionImages] = useState<Image[]>([]);
    const[storiesImages, setStoriesImages] = useState<Image[]>([]);
    const { t } = useTranslation('ns1');
    const stories = t("about_us_page.stories", { returnObjects: true });

    useEffect(() => {
        LocateImageService.getInstance().getImages("about_us_page", "carousel")
            .then(images => {
                setImages_about_us(images);
            })
            .catch(error => {
                console.error('Error al obtener las imágenes:', error);
        });

        LocateImageService.getInstance().getImages("about_us_page", "stories")
            .then(images => {
                setStoriesImages(images);
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
            <ImageSlider images={images_about_us} text={t('about_us_page.carousel')}/>
            <h2 className={`py-10 text-primary bg-white text-center text-7xl font-bold`}>{t('about_us_page.title')}</h2>
            <div className="flex justify-center ...">
                <img src="/assets/images/sin_foto.jpg" className="w-11/12 h-96 rounded-[29px]"/>
            </div>
            <div className="p-10">
                <p className="text-primary bg-white text-3xl">{t('about_us_page.resume')}</p>
            </div>
            {stories.map((item, index) => (
                storiesImages.length > 0 && (
                    <CatalogItem key={index} img_position='right' img_path={storiesImages[index].path} title={item.title} description={item.description}/>
                )
            ))}
            <h2 className={`pt-10 text-primary bg-white text-center text-5xl`}>{t('about_us_page.recognitions_title')}</h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 bg-white p-4">
                {recognitionImages.map((item, index) => (
                    <RecognitionItem key={index} sections={1} image={item.path} title={t(`about_us_page.recognitions.0.title` )} text={t('about_us_page.recognitions.0.description')}/>
                ))}
            </div>
        </div>
    );
};