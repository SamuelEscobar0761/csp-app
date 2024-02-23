import { Navigate, Route, Routes } from "react-router-dom";
import { HomePage } from "../pages/HomePage";

export const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/home" element={ <HomePage/> } />
            <Route path="/about_us" element={ <HomePage/> } />
            <Route path="/contact" element={ <HomePage/> } />
            <Route path="/news" element={ <HomePage/> } />
            <Route path="/sports" element={ <HomePage/> } />
            <Route path="/*" element={ <Navigate to='/' /> } />
        </Routes>
    );
};