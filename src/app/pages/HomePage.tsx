import { useEffect, useState } from 'react';
import { ImageSlider } from '../components/ImageSlider';
import { useTranslation } from 'react-i18next';
import LocateImageService from '../services/LocateImageService';
import Image from '../interfaces/Image';
import { getUrl, obtenerUrlImagenes } from '../services/FirebaseService';

export const HomePage = () => {
    const [info_images, setInfo_images] = useState<Image[]>([]);
    const [carouselImages, setCarouselImages] = useState<Image[]>([]);
    const { t } = useTranslation('ns1');
    const page = 'homepage';

    useEffect(() => {
        LocateImageService.getInstance().getImages("homepage", "carousel")
            .then(images => {
                setCarouselImages(images);
            })
            .catch(error => {
                console.error('Error al obtener las imágenes:', error);
        });

        const loadImages = async () => {
            try {    
                // Obtener información de imágenes con todos los detalles incluyendo paths
                const images = await obtenerUrlImagenes(page, "information");
    
                // Obtener URLs para cada imagen usando el path de cada objeto Image
                const infoImagesWithUrls = await Promise.all(
                    images.map(async (image) => ({
                        ...image,
                        url: await getUrl(image.path) // Obtener la URL real y añadirla al objeto
                    }))
                );
    
                // Establecer los estados con los datos cargados
                setInfo_images(infoImagesWithUrls);
            } catch (error) {
                console.error('Error al obtener las imágenes:', error);
            }
        };

        loadImages();
    }, []);

    return (
        <div className="justify-center items-center">
            <ImageSlider images={carouselImages}/>
            {info_images.map((item, index) => (
                item.url ? <img key={index} src={item.url} className='my-10 w-full h-56 lg:h-96' alt="Club Image" /> : null
            ))}
            <h2 className='py-10 text-primary bg-white text-center text-3xl lg:text-7xl font-bold'>{t('homepage.last_release_title')}</h2>
            <div className="flex justify-center">
                <img src='\assets\images\comunicados\comunicado.jpg' className='w-2/3' alt="Release Image" />
            </div>
        </div>
    );
}
