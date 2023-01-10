// import logo from "./logo.svg";
import "./App.css";
import MainRoute from "./routeController";
import ErrorBoundary from "./ErrorBoundary";

function App() {
    return (
        <div className="main">
            <ErrorBoundary>
                <MainRoute />
            </ErrorBoundary>
        </div>
    );
}

export default App;
