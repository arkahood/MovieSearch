import { useDispatch, useSelector } from "react-redux";
import Card from "../EachCard/card";
import "./body.css";
import { useEffect } from "react";
import { fetchMovies } from "../../redux/Slices/asyncApiCall";
import { Link } from "react-router-dom";

const Body = () => {
    const searchText = useSelector((state) => state.input.searchText);
    const searchBy = useSelector((state) => state.input.searchBy);
    const movies = useSelector((state) => state.asyncApiCall.movies);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchMovies({ searchText, searchBy }));
    }, [searchText, searchBy, dispatch]);

    return (
        <div className="body">
            <div className="each-Card">
                {movies.map((d) => {
                    return (
                        <div className="card" key={d.id}>
                            <Link to="/eachCard" state={{ id: d.id }}>
                                <Card
                                    name={d.title}
                                    poster={d.poster_path}
                                    date={d.release_date.substring(0, 4)}
                                    genre={d.genres}
                                />
                            </Link>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default Body;
