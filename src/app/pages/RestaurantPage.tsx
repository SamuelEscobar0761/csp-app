import { useTranslation } from "react-i18next";
import { ImageSlider } from "../components/ImageSlider";

export const RestaurantPage = () => {
    const { t } = useTranslation('ns1');
    return(
        <div>
            <ImageSlider/>
            <h2 className="py-10 text-primary bg-white text-center text-7xl font-bold`">{t('restaurant_page.weekly_menu_title')}</h2>
            <div className="flex justify-center ...">
                <iframe src='\assets\pdfs\comunicado.pdf' className='w-11/12 md:h-screen'/>
            </div>
            <h2 className="py-10 text-primary bg-white text-center text-7xl font-bold`">{t('restaurant_page.main_menu_title')}</h2>
            <div className="flex justify-center ...">
                <iframe src='\assets\pdfs\comunicado.pdf' className='w-11/12 md:h-screen'/>
            </div>
            <h2 className="py-10 text-primary bg-white text-center text-7xl font-bold`">{t('restaurant_page.snack_menu_title')}</h2>
            <div className="flex justify-center ...">
                <iframe src='\assets\pdfs\comunicado.pdf' className='w-11/12 md:h-screen'/>
            </div>
        </div>
    );   
};