import { useEffect, useState } from "react";
import { ImageSlider } from "../../components/ImageSlider";
import { useTranslation } from "react-i18next";
import Image from '../../interfaces/Image';
import LocateImageService from "../../services/LocateImageService";
import { obtenerUrlImagenes } from "../../services/FirebaseService";
import LoadingScreen from "../../components/LoadingScreen";

export const PaddlePage = () => {
    const [imagesCarousel, setImagesCarousel] = useState<Image[]>([]);
    const [imagesInfo, setImagesInfo] = useState<Image[]>([]);
    const [loading, setLoading] = useState(true); // Nuevo estado para controlar la carga
    const { t } = useTranslation('ns1');
    const page = "paddle_page";

    useEffect(() => {
        const loadImages = async () => {
            try {
                // Obtener imágenes del carrusel
                const carouselImages = await LocateImageService.getInstance().getImages(page, "carousel");
    
                // Obtener información de imágenes con todos los detalles incluyendo paths
                const infoImages = await obtenerUrlImagenes(page, "information");
    
                // Establecer los estados con los datos cargados
                setImagesCarousel(carouselImages);
                setImagesInfo(infoImages);
            } catch (error) {
                console.error('Error al obtener las imágenes:', error);
            } finally {
                // Quitar la pantalla de carga después de un breve retraso
                setTimeout(() => setLoading(false), 500);
            }
        };

        loadImages();
    }, []);

    if (loading) {
        return <LoadingScreen />;
    }
    
    return(
        <div>
            <ImageSlider images={imagesCarousel} text={t('paddle_page.paddle_page_title')} />
            <h2 className={`py-10 text-primary bg-white text-center text-4xl md:text-5xl lg:text-7xl font-bold`}>{t('paddle_page.information_title')}</h2>
            {imagesInfo.length === 0 ? (
                <div className="flex justify-center items-center h-full">
                    <p className="text-center text-base md:text-lg lg:text-xl text-gray-600">
                        Actualmente no contamos con información en esta área. ¡Mil disculpas!
                    </p>
                </div>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 place-items-center h-full">
                    {imagesInfo.map((item, index) => (
                        <img key={index} src={item.url!} className='h-[880px]' />
                    ))}
                </div>
            )}
        </div>

    );
    
}