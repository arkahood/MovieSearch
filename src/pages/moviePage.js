import ExpendedMovie from "../components/ExpendedMovie/ExpendedMovie";
import Body from "../components/mainBody/body";
import ResultBar from "../components/resultBar/resultBar";

const MoviePage = () => {
    return (
        <div className="main">
            <ExpendedMovie />
            <ResultBar />
            <Body />
        </div>
    );
};

export default MoviePage;
