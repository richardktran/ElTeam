import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import { Toaster } from "react-hot-toast";
import { BrowserRouter } from "react-router-dom";
import store from "./app/store";
import { Provider } from 'react-redux';
import Router from "./router/Router";
import { useSelector } from "react-redux";
import Loading from "./components/Loading/Loading";

function App() {
    const [isLoading, setIsLoading] = useState(false);
    const isLoadingApp = useSelector(state => state.app.isLoading);

    useEffect(() => {
        setIsLoading(isLoadingApp);
    }, [isLoadingApp]);

    return (
        <BrowserRouter>
            <Toaster
                position="top-center"
                reverseOrder={false}
            />
            {isLoading && <Loading />}
            <div className="nk-app-root">
                <div className="nk-main">
                    <Router />
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;

if (document.getElementById("app")) {
    ReactDOM.render(
        <Provider store={store}>
            <App />
        </Provider>,
        document.getElementById("app")
    );
}
