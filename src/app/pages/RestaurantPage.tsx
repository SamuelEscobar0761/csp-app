import { useTranslation } from "react-i18next";
import { ImageSlider } from "../components/ImageSlider";
import { useEffect, useState } from "react";
import Image from '../interfaces/Image';
import LocateImageService from "../services/LocateImageService";
import { getUrl, obtenerUrlImagenes } from "../services/FirebaseService";

export const RestaurantPage = () => {
    const [imagesCarousel, setImagesCarousel] = useState<Image[]>([]);
    const [weeklyMenus, setWeeklyMenus] = useState<Image[]>([]);
    const [mainMenus, setMainMenus] = useState<Image[]>([]);
    const [snackMenus, setSnackMenus] = useState<Image[]>([]);
    const { t } = useTranslation('ns1');

    useEffect(() => {
        LocateImageService.getInstance().getImages("restaurant_page", "carousel")
            .then(images => {
                setImagesCarousel(images);
            })
            .catch(error => {
                console.error('Error al obtener las imágenes:', error);
        });
        const loadWeeklyMenu = async () => {
            try {
                const weeklyMenuImages = await obtenerUrlImagenes("restaurant_page", "weekly_menu");
        
                    // Obtener URLs para cada imagen usando el path de cada objeto Image
                    const weeklyMenuImagesWithUrl = await Promise.all(
                        weeklyMenuImages.map(async (image) => ({
                        ...image,
                        url: await getUrl(image.path) // Obtener la URL real y añadirla al objeto
                    }))
                );
                setWeeklyMenus(weeklyMenuImagesWithUrl);
            } catch (error) {
                console.error('Error al obtener las imágenes:', error);
            }
        }
        const loadMainMenu = async () => {
            try {
                const mainMenuImages = await obtenerUrlImagenes("restaurant_page", "main_menu");
        
                    // Obtener URLs para cada imagen usando el path de cada objeto Image
                    const mainMenuImagesWithUrl = await Promise.all(
                        mainMenuImages.map(async (image) => ({
                        ...image,
                        url: await getUrl(image.path) // Obtener la URL real y añadirla al objeto
                    }))
                );
                setMainMenus(mainMenuImagesWithUrl);
            } catch (error) {
                console.error('Error al obtener las imágenes:', error);
            }
        }
        const loadSnackMenu = async () => {
            try {
                const snackMenuImages = await obtenerUrlImagenes("restaurant_page", "snack_menu");
        
                    // Obtener URLs para cada imagen usando el path de cada objeto Image
                    const snackMenuImagesWithUrl = await Promise.all(
                        snackMenuImages.map(async (image) => ({
                        ...image,
                        url: await getUrl(image.path) // Obtener la URL real y añadirla al objeto
                    }))
                );
                setSnackMenus(snackMenuImagesWithUrl);
            } catch (error) {
                console.error('Error al obtener las imágenes:', error);
            }
        }
        loadWeeklyMenu();
        loadMainMenu();
        loadSnackMenu();
    }, []);
    return(
        <div>
            <ImageSlider images={imagesCarousel} text={t('restaurant_page.restaurant_title')}/>
            <br id="weekly"/>
            <br/>
            <br/>
            <h2 className="py-10 text-primary bg-white text-center text-7xl font-bold`">{t('restaurant_page.weekly_menu_title')}</h2>
            <div className="flex justify-center ...">
                {weeklyMenus.map((item, index) => (
                    <img key={index} src={item.url!} className='h-[890px]'/>
                ))}
            </div>
            <br id="main"/>
            <br/>
            <br/>
            <h2 className="py-10 text-primary bg-white text-center text-7xl font-bold`">{t('restaurant_page.main_menu_title')}</h2>
            <div className="flex justify-center ...">
                {mainMenus.map((item, index) => (
                    <img key={index} src={item.url!} className='h-[890px]'/>
                ))}
            </div>
            <br id="snack"/>
            <br/>
            <br/>
            <h2 className="py-10 text-primary bg-white text-center text-7xl font-bold`">{t('restaurant_page.snack_menu_title')}</h2>
            <div className="flex justify-center ...">
                {snackMenus.map((item, index) => (
                    <img key={index} src={item.url!} className='w-1/2'/>
                ))}
            </div>
        </div>
    );   
};