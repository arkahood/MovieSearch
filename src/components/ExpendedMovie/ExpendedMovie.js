import { Link, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import SearchIcon from "@mui/icons-material/Search";
import "./ExpendedMovie.css";

const ExpendedMovie = () => {
    const location = useLocation();
    const movies = useSelector((state) => state.asyncApiCall.movies);
    const { id } = location.state;
    const index = movies.findIndex((m) => m.id === id);
    const data = movies[index];
    return (
        <div className="Expended">
            <div className="Expended-head">
                <div className="Netflix">
                    <h3>
                        netflix<span>roulette</span>
                    </h3>
                </div>
                <div className="Search">
                    <Link to="/">
                        <SearchIcon fontSize="medium" />
                    </Link>
                </div>
            </div>
            <div className="Expended-body">
                <div className="expand-poster">
                    <img src={data.poster_path} alt="Poster" />
                </div>
                <div className="expand-details">
                    <h1>
                        {data.title} <span>{data.vote_average}</span>
                    </h1>
                    <p>{data.tagline}</p>
                    <h4>
                        <span>
                            {data.release_date.slice(0, 4)} {data.runtime}min
                        </span>
                    </h4>
                    <h4>{data.overview}</h4>
                </div>
            </div>
        </div>
    );
};
export default ExpendedMovie;
