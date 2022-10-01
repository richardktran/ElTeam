import React from "react";
import ReactDOM from "react-dom";
import { Toaster } from "react-hot-toast";
import { BrowserRouter } from "react-router-dom";
import store from "./app/store";
import { Provider } from 'react-redux';
import Router from "./router/Router";

function App() {
    return (
        <BrowserRouter>
            <Toaster
                position="top-center"
                reverseOrder={false}
            />
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
