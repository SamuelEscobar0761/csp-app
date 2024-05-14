import { Noticia, getUrl, obtenerNoticias } from "../services/FirebaseService"
import { useEffect, useState } from "react";
import Image from '../interfaces/Image';
import { ImageSlider } from "../components/ImageSlider";
import LocateImageService from "../services/LocateImageService";
import CatalogItem from "../components/CatalogItem";
import { useTranslation } from "react-i18next";

export const NewsPage = () => {
    const [images_about_us, setImages_about_us] = useState<Image[]>([]);
    const { t } = useTranslation('ns1');
    const [noticias, setNoticias] = useState<Noticia[]>([]);

    useEffect(() => {
        LocateImageService.getInstance().getImages("news_page", "carousel")
            .then(images => {
                setImages_about_us(images);
            })
            .catch(error => {
                console.error('Error al obtener las imágenes:', error);
        });
    }, []);

    useEffect(() => {
        const fetchData = async () => {
          const data = await obtenerNoticias();
        const dataWithUrl = await Promise.all(
            data.map(async (noticia) => ({
                ...noticia,
                url: await getUrl(noticia.image) // Obtener la URL real y añadirla al objeto
            }))
        );
          setNoticias(dataWithUrl);
        };
        fetchData();
      }, []);

    return(
        <div>
            <ImageSlider images={images_about_us} text={t('news_page.title')}/>
            <div>
                <h2 className="text-center mx-auto text-primary font-bold pt-10 md:pt-20 md:text-5xl text-3xl">{t('news_page.nearby_events_title')}</h2>
                {noticias ? (
                    noticias.map((noticia, index) => (
                        <div key={index}>
                            <CatalogItem img_path={noticia.url!} img_position="left" title={`${noticia.title} - ${noticia.date}`} description={noticia.description}/>
                        </div>
                    ))
                ) : (
                    <p>Cargando noticias...</p>
                )}
            </div>
        </div>
    );
};