import { useEffect, useState } from 'react';
import { ImageSlider } from '../components/ImageSlider';
import { useTranslation } from 'react-i18next';
import LocateImageService from '../services/LocateImageService';
import Image from '../interfaces/Image';
import { Noticia, getUrl, obtenerNoticias, obtenerUrlImagenes } from '../services/FirebaseService';
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

    useEffect(() => {
        const fetchLatestComunicado = async () => {
            const data = await obtenerNoticias();
            // Filtrar por título 'Comunicado'
            const comunicados = data.filter(noticia => noticia.title === 'Comunicado');
            // Encontrar el comunicado con el ID más grande
            const latestComunicado = comunicados.reduce((latest, current) => {
                return parseInt(latest.id, 10) > parseInt(current.id, 10) ? latest : current;
            }, comunicados[0]);
    
            if (latestComunicado) {
                const latestComunicadoWithUrl = {
                    ...latestComunicado,
                    url: await getUrl(latestComunicado.image) // Obtener la URL real y añadirla al objeto
                };
                setComunicado(latestComunicadoWithUrl); // Establecer el último comunicado en el estado como un objeto
            } else {
                setComunicado(null); // No se encontraron comunicados, establecer el estado a null
            }
        };
        fetchLatestComunicado();
    }, []);
    

    return (
        <div className="justify-center items-center">
            <ImageSlider images={carouselImages}/>
            {info_images.map((item, index) => (
                item.url ? <img key={index} src={item.url} className='w-full h-96' alt="Club Image" /> : null
            ))}
            <h2 className='py-10 text-primary bg-white text-center text-7xl font-bold'>{t('homepage.last_release_title')}</h2>
            <div className="flex justify-center">
                {comunicado?(
                    <CatalogItem img_path={comunicado!.url!} title={comunicado!.date} img_position={'right'} />
                ):(
                    <div></div>
                )}
                
            </div>
        </div>
    );
}
