import { useState } from "react";
import { useDispatch } from "react-redux";
import "./inputForm.css";
import { pushInputFields } from "../../redux/Slices/inputFields";

const InputForm = () => {
    const [searchText, setSearchText] = useState("");
    const [searchBy, setSearchBy] = useState("title");

    const dispatch = useDispatch();

    const handleChange = (e) => {
        setSearchText(e.target.value);
    };
    const titleSelected = () => {
        setSearchBy("title");
    };
    const genreSelected = () => {
        setSearchBy("genres");
    };
    const submitHandler = () => {
        dispatch(
            pushInputFields({ searchText: searchText, searchBy: searchBy })
        );
    };
    return (
        <div className="head">
            <div className="Netflix">
                <h3>
                    netflix<span>roulette</span>
                </h3>
            </div>
            <div className="main-head">
                <h1>Find Your Movie</h1>
            </div>
            <div className="search-and-btn">
                <input
                    className="text-input"
                    type="text"
                    placeholder="Movie"
                    onChange={handleChange}
                />
                <button onClick={submitHandler} className="button-input">
                    Search
                </button>
            </div>
            <div className="search-by">
                <h4>Search By</h4>
                <button onClick={titleSelected}>Title</button>
                <button onClick={genreSelected}>Genre</button>
            </div>
        </div>
    );
};

export default InputForm;
