import { Navigate, Route, Routes } from "react-router-dom";
import { HomePage } from "../pages/HomePage";
import { AboutUsPage } from "../pages/AboutUsPage";
import { ContactPage } from "../pages/ContactPage";
import { NewsPage } from "../pages/NewsPage";
import { SportsPage } from "../pages/SportsPage";

export const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={ <HomePage/> } />
            <Route path="/about_us" element={ <AboutUsPage/> } />
            <Route path="/contact_us" element={ <ContactPage/> } />
            <Route path="/news" element={ <NewsPage/> } />
            <Route path="/sports" element={ <SportsPage/> } />
            <Route path="/*" element={ <Navigate to='/' /> } />
        </Routes>
    );
};