import React from "react";
import ReactDOM from "react-dom";
import { Toaster } from "react-hot-toast";
import { BrowserRouter } from "react-router-dom";
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
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
        <App />,
        document.getElementById("app")
    );
}
