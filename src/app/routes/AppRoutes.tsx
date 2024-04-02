import { Navigate, Route, Routes } from "react-router-dom";
import { HomePage } from "../pages/HomePage";
import { AboutUsPage } from "../pages/AboutUsPage";
import { ContactPage } from "../pages/ContactPage";
import { NewsPage } from "../pages/NewsPage";
import { SportsPage } from "../pages/SportsPage";
import { RestaurantPage } from "../pages/RestaurantPage";

export const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={ <HomePage/> } />
            <Route path="/about_us" element={ <AboutUsPage/> } />
            <Route path="/sports" element={ <SportsPage/> } />
            <Route path="/restaurant" element={ <RestaurantPage/> } />
            <Route path="/news" element={ <NewsPage/> } />
            <Route path="/*" element={ <Navigate to='/' /> } />
        </Routes>
    );
};