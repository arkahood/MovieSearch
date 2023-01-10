import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/homePage";
import MoviePage from "./pages/moviePage";
import ErrorPage from "./pages/errorPage";

const MainRoute = () => {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/eachCard" element={<MoviePage />} />
            <Route path="*" element={<ErrorPage />} />
        </Routes>
    );
};

export default MainRoute;
