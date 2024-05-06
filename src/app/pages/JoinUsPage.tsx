import { useEffect, useState } from "react";
import Image from '../interfaces/Image';
import { useTranslation } from "react-i18next";
import LocateImageService from "../services/LocateImageService";
import { ImageSlider } from "../components/ImageSlider";
import { getUrl, obtenerUrlImagenes } from "../services/FirebaseService";

export const JoinUsPage = () => {
    const [imagesCarousel, setImagesCarousel] = useState<Image[]>([]);
    const [tariffImages, setTariffImages] = useState<Image[]>([]);
    const [participationImages, setParticipationImages] = useState<Image[]>([]);
    const { t } = useTranslation('ns1');

    useEffect(() => {
        LocateImageService.getInstance().getImages("join_us_page", "carousel")
            .then(images => {
                setImagesCarousel(images);
            })
            .catch(error => {
                console.error('Error al obtener las imágenes:', error);
        });
        const loadTariffImages = async () => {
            try {
                const tariffImages = await obtenerUrlImagenes("join_us_page", "tariff");
        
                    // Obtener URLs para cada imagen usando el path de cada objeto Image
                    const tariffImagesWithUrl = await Promise.all(
                        tariffImages.map(async (image) => ({
                        ...image,
                        url: await getUrl(image.path) // Obtener la URL real y añadirla al objeto
                    }))
                );
                setTariffImages(tariffImagesWithUrl);
            } catch (error) {
                console.error('Error al obtener las imágenes:', error);
            }
        }
        const loadParticipationImages = async () => {
            try {
                const participationImages = await obtenerUrlImagenes("join_us_page", "participation");
        
                    // Obtener URLs para cada imagen usando el path de cada objeto Image
                    const participationImagesWithUrl = await Promise.all(
                        participationImages.map(async (image) => ({
                        ...image,
                        url: await getUrl(image.path) // Obtener la URL real y añadirla al objeto
                    }))
                );
                setParticipationImages(participationImagesWithUrl);
            } catch (error) {
                console.error('Error al obtener las imágenes:', error);
            }
        }
        loadTariffImages();
        loadParticipationImages();
    }, []);
    
    return(
        <div>
            <ImageSlider images={imagesCarousel} text={t('join_us_page.join_us_title')}/>
            <br id='participation'/>
            <br/>
            <br/>
            <h2 className="py-10 text-primary bg-white text-center text-7xl font-bold`">{t('join_us_page.participation_title')}</h2>
            <div className="flex justify-center ...">
                {participationImages.map((item, index) => (
                    <img key={index} src={item.url!} className='w-5/12'/>
                ))}
            </div>
            <br id='tariff'/>
            <br/>
            <br/>
            <h2 className="py-10 text-primary bg-white text-center text-7xl font-bold`">{t('join_us_page.tariff_title')}</h2>
            <div className="flex justify-center ...">
                {tariffImages.map((item, index) => (
                    <img key={index} src={item.url!} className='w-7/12'/>
                ))}
            </div>
        </div>
    );
};