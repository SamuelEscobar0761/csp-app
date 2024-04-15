import { Navigate, Route, Routes } from "react-router-dom";
import { HomePage } from "../pages/HomePage";
import { AboutUsPage } from "../pages/AboutUsPage";
import { NewsPage } from "../pages/NewsPage";
import { SportsPage } from "../pages/SportsPage";
import { RestaurantPage } from "../pages/RestaurantPage";
import { JoinUsPage } from "../pages/JoinUsPage";
import { SwimmingPage } from "../pages/sports/SwimmingPage";
import { TennisPage } from "../pages/sports/TennisPage";
import { RacketPage } from "../pages/sports/RacketPage";
import { PaddlePage } from "../pages/sports/PaddlePage";
import { FootballPage } from "../pages/sports/FootballPage";
import { GymPage } from "../pages/sports/GymPage";
import { CyclingPage } from "../pages/sports/CyclingPage";
import { WallyPage } from "../pages/sports/WallyPage";

export const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={ <HomePage/> } />
            <Route path="/about_us" element={ <AboutUsPage/> } />
            <Route path="/sports" element={ <SportsPage/> } />
            <Route path="/swimming" element={ <SwimmingPage/> } />
            <Route path="/tennis" element={ <TennisPage/> } />
            <Route path="/racket" element={ <RacketPage/> } />
            <Route path="/paddle" element={ <PaddlePage/> } />
            <Route path="/football" element={ <FootballPage/> } />
            <Route path="/gym" element={ <GymPage/> } />
            <Route path="/cycling" element={ <CyclingPage/> } />
            <Route path="/wally" element={ <WallyPage/> } />
            <Route path="/restaurant" element={ <RestaurantPage/> } />
            <Route path="/join_us" element={ <JoinUsPage/> } />
            <Route path="/news" element={ <NewsPage/> } />
            <Route path="/*" element={ <Navigate to='/' /> } />
        </Routes>
    );
};