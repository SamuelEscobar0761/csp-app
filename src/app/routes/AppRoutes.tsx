import { Navigate, Route, Routes } from "react-router-dom";
import { HomePage } from "../pages/HomePage";
import { AboutUsPage } from "../pages/AboutUsPage";
import { NewsPage } from "../pages/NewsPage";
import { SportsPage } from "../pages/SportsPage";
import { RestaurantPage } from "../pages/RestaurantPage";
import { JoinUsPage } from "../pages/JoinUsPage";

export const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={ <HomePage/> } />
            <Route path="/about_us" element={ <AboutUsPage/> } />
            <Route path="/sports" element={ <SportsPage/> } />
            <Route path="/restaurant" element={ <RestaurantPage/> } />
            <Route path="/join_us" element={ <JoinUsPage/> } />
            <Route path="/news" element={ <NewsPage/> } />
            <Route path="/*" element={ <Navigate to='/' /> } />
        </Routes>
    );
};