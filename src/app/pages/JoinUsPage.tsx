import { useTranslation } from "react-i18next";

export const JoinUsPage = () => {
    const { t } = useTranslation('ns1');
    return(
        <div>
            <h2 className="py-10 text-primary bg-white text-center text-7xl font-bold`">{t('join_us_page.tariff_title')}</h2>
            <h2 className="py-10 text-primary bg-white text-center text-7xl font-bold`">{t('join_us_page.participation_title')}</h2>
        </div>
    );
};