import { useEffect, useState } from 'react';
import { ImageSlider } from '../components/ImageSlider';
import Preview from '../components/Preview';
import LocateImageService from '../services/LocateImageService';
import { useTranslation } from 'react-i18next';
import Image from '../interfaces/Image';


export const HomePage = () => {
    const [images_about_us, setImages_about_us] = useState<Image[]>([]);
    const [images_areas, setImages_areas] = useState<Image[]>([]);
    const [images_sport_areas, setImages_sport_areas] = useState<Image[]>([]);
    const { t } = useTranslation('ns1');

    useEffect(() => {
        LocateImageService.getInstance().getImages("homepage", "about_us")
            .then(images => {
                setImages_about_us(images);
            })
            .catch(error => {
                console.error('Error al obtener las imágenes:', error);
            });

        LocateImageService.getInstance().getImages("homepage", "areas")
            .then(images => {
                setImages_areas(images);
            })
            .catch(error => {
                console.error('Error al obtener las imágenes:', error);
            });

        LocateImageService.getInstance().getImages("homepage", "sport_areas")
            .then(images => {
                setImages_sport_areas(images);
            })
            .catch(error => {
                console.error('Error al obtener las imágenes:', error);
            });

    }, []);
    
    return(
        <div className="justify-center items-center h-screen">
            <ImageSlider/>
            {images_about_us.map((item, index) => (
                <Preview key={index} img_position='left' title={t('homepage.about_us_title')} img_path={item.path} description={t('homepage.about_us_description')}/>
            ))}
            {images_areas.map((item, index) => (
                <Preview key={index} img_position='right' title={t('homepage.areas_title')} img_path={item.path} description={t('homepage.areas_description')}/>
            ))}
            {images_sport_areas.map((item, index) => (
                <Preview key={index} img_position='left' title={t('homepage.sport_areas_title')} img_path={item.path} description={t('homepage.sport_areas_description')}/>
            ))}
        </div>
    );
}