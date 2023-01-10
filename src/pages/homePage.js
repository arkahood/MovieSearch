import InputForm from "../components/Input/inputForm";
import Body from "../components/mainBody/body";
import ResultBar from "../components/resultBar/resultBar";

const HomePage = () => {
    return (
        <div className="main">
            <InputForm />
            <ResultBar />
            <Body />
        </div>
    );
};

export default HomePage;
