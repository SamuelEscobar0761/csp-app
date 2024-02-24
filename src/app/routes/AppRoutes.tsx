import { Navigate, Route, Routes } from "react-router-dom";
import { HomePage } from "../pages/HomePage";
import AboutUsPage from "../pages/AboutUsPage";

export const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/home" element={ <HomePage/> } />
            <Route path="/about_us" element={ <AboutUsPage/> } />
            <Route path="/contact" element={ <HomePage/> } />
            <Route path="/news" element={ <HomePage/> } />
            <Route path="/sports" element={ <HomePage/> } />
            <Route path="/*" element={ <Navigate to='/home' /> } />
        </Routes>
    );
};