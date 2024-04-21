import { obtenerNoticia } from "../services/FirebaseService"
import { useEffect, useState } from "react";
import Image from '../interfaces/Image';
import { ImageSlider } from "../components/ImageSlider";
import LocateImageService from "../services/LocateImageService";
import CatalogItem from "../components/CatalogItem";
import RecognitionItem from "../components/RecognitionItem";
import { useTranslation } from "react-i18next";

export const NewsPage = () => {
    const [images_about_us, setImages_about_us] = useState<Image[]>([]);
    const { t } = useTranslation('ns1');
    const [noticia, setNoticia] = useState<{title: string, description: string, date: string}>();

    useEffect(() => {
        LocateImageService.getInstance().getImages("about_us_page", "carousel")
            .then(images => {
                setImages_about_us(images);
            })
            .catch(error => {
                console.error('Error al obtener las imágenes:', error);
        });
    }, []);

    useEffect(() => {
        const fetchData = async () => {
          const data = await obtenerNoticia();
          setNoticia(data);
        };
        fetchData();
      }, []);

    return(
        <div>
            <ImageSlider images={images_about_us} text={t('news_page.title')}/>
            <div>
                <h2 className="text-center mx-auto text-[#80AE8A] pt-10 md:pt-20 md:text-5xl text-3xl">{t('news_page.nearby_events_title')}</h2>
                <CatalogItem img_path="/assets/images/sin_foto.jpg" img_position="left" description={t('news_page.events.0.description')} title={`${t('news_page.events.0.name')} - ${t('news_page.events.0.date')}`}/>
                <CatalogItem img_path="/assets/images/sin_foto.jpg" img_position="left" description={t('news_page.events.1.description')} title={`${t('news_page.events.1.name')} - ${t('news_page.events.1.date')}`}/>
                <CatalogItem img_path="/assets/images/sin_foto.jpg" img_position="left" description={t('news_page.events.2.description')} title={`${t('news_page.events.2.name')} - ${t('news_page.events.2.date')}`}/>
                <div>
                    {noticia ? (
                        <>
                        <h2>{noticia.title}</h2>
                        <p>{noticia.description}</p>
                        <p>{noticia.date}</p>
                        </>
                    ) : (
                        <p>Cargando noticia...</p>
                    )}
                </div>
            </div>
            <h2 className="text-center mx-auto text-[#80AE8A] pt-10 md:pt-20 md:text-5xl text-3xl">{t('news_page.calendar_title')}</h2>
        </div>
    );
};