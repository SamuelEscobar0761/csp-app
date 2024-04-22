import { useEffect, useState } from "react";
import { ImageSlider } from "../../components/ImageSlider";
import { useTranslation } from "react-i18next";
import Image from '../../interfaces/Image';
import LocateImageService from "../../services/LocateImageService";
import LoadingScreen from "../../components/LoadingScreen"; // Asumiendo que tienes este componente
import { obtenerFile } from "../../services/FirebaseService";

export const SwimmingPage = () => {
    const [imagesCarousel, setImagesCarousel] = useState<Image[]>([]);
    const [imagesInfo, setImagesInfo] = useState<Image[]>([]);
    const [loading, setLoading] = useState(true); // Nuevo estado para controlar la carga
    const { t } = useTranslation('ns1');

    useEffect(() => {
        const loadImages = async () => {
            try {
                const carouselImages = await LocateImageService.getInstance().getImages("swimming_page", "carousel");
                const infoImages = await LocateImageService.getInstance().getImages("swimming_page", "information");

                // Obtén las URLs para las imágenes del carrusel
                const carouselImagesWithUrls = await Promise.all(carouselImages.map(image => obtenerFile(image.path)));

                // Asegúrate de que todas las URLs se obtuvieron antes de continuar
                const allImagesWithUrls = carouselImages.map((img, index) => ({
                    ...img,
                    url: carouselImagesWithUrls[index] // Esto debería ser una URL o null
                }));

                setImagesCarousel(allImagesWithUrls);
                setImagesInfo(infoImages);
            } catch (error) {
                console.error('Error al obtener las imágenes:', error);
            } finally {
                // Esperar 3 segundos antes de quitar la pantalla de carga
                setTimeout(() => setLoading(false), 500);
            }
        };

        loadImages();
    }, []);

    if (loading) {
        return <LoadingScreen />;
    }

    // Renderiza el contenido de la página una vez que las imágenes se han cargado
    return (
        <div>
            <ImageSlider images={imagesCarousel} text={t('swimming_page.swimming_page_title')} />
            <h2 className={`py-10 text-primary bg-white text-center text-4xl md:text-5xl lg:text-7xl font-bold`}>
                {t('swimming_page.information_title')}
            </h2>
            {imagesInfo.length === 0 ? (
                <div className="flex justify-center items-center h-screen">
                    <p className="text-center text-base md:text-lg lg:text-xl text-gray-600">
                        Actualmente no contamos con información en esta área. ¡Mil disculpas!
                    </p>
                </div>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 place-content-center h-full">
                    {imagesInfo.map((item, index) => (
                        <img key={index} src={item.path} alt={item.name} className='w-full' />
                    ))}
                </div>
            )}
        </div>
    );
};
