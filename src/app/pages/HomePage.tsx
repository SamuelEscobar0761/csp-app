import { useEffect, useState } from 'react';
import { ImageSlider } from '../components/ImageSlider';
import { useTranslation } from 'react-i18next';
import LocateImageService from '../services/LocateImageService';
import Image from '../interfaces/Image';
import { getUrl } from '../services/FirebaseService';

export const HomePage = () => {
    const [info_images, setInfo_images] = useState<Image[]>([]);
    const [carouselImages, setCarouselImages] = useState<Image[]>([]);
    const { t } = useTranslation('ns1');

    useEffect(() => {
        LocateImageService.getInstance().getImages("homepage", "carousel")
            .then(images => {
                setCarouselImages(images);
            })
            .catch(error => {
                console.error('Error al obtener las imágenes:', error);
        });

        LocateImageService.getInstance().getImages("homepage", "club_info")
            .then(images => {
                Promise.all(images.map(async (item) => ({
                    ...item,
                    url: await getUrl(item.path) // This can resolve to string or null
                })))
                .then(imagesWithUrls => {
                    setInfo_images(imagesWithUrls); // Set the images with URLs
                });
            })
            .catch(error => {
                console.error('Error al obtener las imágenes:', error);
            });
    }, []);

    return (
        <div className="justify-center items-center">
            <ImageSlider images={carouselImages}/>
            {info_images.map((item, index) => (
                item.url ? <img key={index} src={item.url} className='w-full h-96' alt="Club Image" /> : null
            ))}
            <h2 className='py-10 text-primary bg-white text-center text-7xl font-bold'>{t('homepage.last_release_title')}</h2>
            <div className="flex justify-center">
                <img src='\assets\images\comunicados\comunicado.jpg' className='w-2/3' alt="Release Image" />
            </div>
        </div>
    );
}
