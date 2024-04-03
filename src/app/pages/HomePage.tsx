import { useEffect, useState } from 'react';
import { ImageSlider } from '../components/ImageSlider';
import { useTranslation } from 'react-i18next';
import LocateImageService from '../services/LocateImageService';
import Image from '../interfaces/Image';


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
                setInfo_images(images);
            })
            .catch(error => {
                console.error('Error al obtener las imágenes:', error);
            });
    }, []);

    return(
        <div className="justify-center items-center">
            <ImageSlider images={carouselImages} />
            {info_images.map((item, index) => (
                <img key={index} src={item.path} className='w-full h-96'/>
            ))}
            <h2 className='py-10 text-primary bg-white text-center text-7xl font-bold'>{t('homepage.last_release_title')}</h2>
            <div className="flex justify-center ...">
                <iframe src='\assets\pdfs\comunicado.pdf' className='w-2/3 h-svh'/>
            </div>
            <br/>
            <br/>
            <br/>
            <p className="px-10 mx-auto text-primary md:text-3xl text-1xl sm:pt-5 lg:pt-10">Necesario: Escoger entre pdf e imagen</p><br/>
            <div className="flex justify-center ...">
                <img src='\assets\images\comunicados\comunicado.jpg' className='w-2/3'/>
            </div>
        </div>
    );
}