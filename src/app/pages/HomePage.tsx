import { useEffect, useState } from 'react';
import { ImageSlider } from '../components/ImageSlider';
import { useTranslation } from 'react-i18next';
import LocateImageService from '../services/LocateImageService';
import Image from '../interfaces/Image';
import { Noticia, obtenerNoticias, obtenerUrlImagenes } from '../services/FirebaseService';
import CatalogItem from '../components/CatalogItem';

export const HomePage = () => {
    const [info_images, setInfo_images] = useState<Image[]>([]);
    const [carouselImages, setCarouselImages] = useState<Image[]>([]);
    const [comunicado, setComunicado] = useState<Noticia | null>(null);
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

                // Establecer los estados con los datos cargados
                setInfo_images(images);
                console.log(images)
            } catch (error) {
                console.error('Error al obtener las imágenes:', error);
            }
        };

        loadImages();
    }, []);

    useEffect(() => {
        const fetchLatestComunicado = async () => {
            const data = await obtenerNoticias();
            // Filtrar por título 'Comunicado'
            const comunicados = data.filter(noticia => noticia.title === 'Comunicado');
    
            if (comunicados.length === 0) {
                setComunicado(null); // No se encontraron comunicados, establecer el estado a null
                return;
            }
    
            // Encontrar el comunicado más reciente basado en la fecha
            const latestComunicado = comunicados.reduce((latest, current) => {
                const latestDate = new Date(latest.date.split('-').reverse().join('-'));
                const currentDate = new Date(current.date.split('-').reverse().join('-'));
                return latestDate > currentDate ? latest : current;
            });
    
            const latestComunicadoWithUrl = {
                ...latestComunicado,
                url: latestComunicado.url
            };
            setComunicado(latestComunicadoWithUrl); // Establecer el último comunicado en el estado como un objeto
        };
    
        fetchLatestComunicado();
    }, []);
    

    return (
        <div className="justify-center items-center">
            <ImageSlider images={carouselImages}/>
            {info_images.map((item, index) => (
                item.url ? <img key={index} src={item.url} className='my-10 w-full h-56 lg:h-96' alt="Club Image" /> : null
            ))}
            <h2 className='lg:py-10 text-primary bg-white text-center text-3xl lg:text-7xl font-bold'>{t('homepage.last_release_title')}</h2>
            <div className="flex justify-center">
                {comunicado?(
                    <CatalogItem img_path={comunicado!.url!} title={`${comunicado!.title} ${comunicado!.date}`} img_position={'right'} />
                ):(
                    <div></div>
                )}
                
            </div>
        </div>
    );
}
