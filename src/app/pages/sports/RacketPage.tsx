import { useEffect, useState } from "react";
import { ImageSlider } from "../../components/ImageSlider";
import { useTranslation } from "react-i18next";
import Image from '../../interfaces/Image';
import LocateImageService from "../../services/LocateImageService";

export const RacketPage = () => {
    const [imagesCarousel, setImagesCarousel] = useState<Image[]>([]);
    const [imagesInfo, setImagesInfo] = useState<Image[]>([]);
    const { t } = useTranslation('ns1');

    useEffect(() => {
        LocateImageService.getInstance().getImages("racket_page", "carousel")
            .then(images => {
                setImagesCarousel(images);
            })
            .catch(error => {
                console.error('Error al obtener las imágenes:', error);
        });
        LocateImageService.getInstance().getImages("racket_page", "information")
            .then(images => {
                setImagesInfo(images);
            })
            .catch(error => {
                console.error('Error al obtener las imágenes:', error);
        });
    }, []);
    return(
        <div>
            <ImageSlider images={imagesCarousel} text={t('racket_page.racket_page_title')} />
            <h2 className={`py-10 text-primary bg-white text-center text-4xl md:text-5xl lg:text-7xl font-bold`}>{t('racket_page.information_title')}</h2>
            {imagesInfo.length === 0 ? (
                <div className="flex justify-center items-center h-full">
                    <p className="text-center text-base md:text-lg lg:text-xl text-gray-600">
                        Actualmente no contamos con información en esta área. ¡Mil disculpas!
                    </p>
                </div>
            ) : (
                <div className="grid grid-cols-2 gap-4 place-content-center h-full">
                    {imagesInfo.map((item, index) => (
                        <img key={index} src={item.path} className='h-full w-full' />
                    ))}
                </div>
            )}
        </div>

    );
    
}