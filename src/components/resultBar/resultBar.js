import { useSelector, useDispatch } from "react-redux";
// import { pushSortMethod } from "../../redux/Slices/sortingBased";
import { sortByRating } from "../../redux/Slices/asyncApiCall";

import "./resultBar.css";

const ResultBar = () => {
    let movies = useSelector((state) => state.asyncApiCall.movies);

    const dispatch = useDispatch();

    const handleSortMethod = (val) => {
        dispatch(sortByRating({ val }));
    };
    return (
        <div className="resultBar">
            <div className="resultBar-head">
                <h4>{movies.length} Movies Found</h4>
            </div>
            <div className="resultBar-res">
                <h4>SortBy</h4>
                <button onClick={() => handleSortMethod(2)}>
                    Realease Date
                </button>
                <button onClick={() => handleSortMethod(1)}>Rating</button>
            </div>
        </div>
    );
};

export default ResultBar;
