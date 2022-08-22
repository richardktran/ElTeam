import React from "react";
import ReactDOM from "react-dom";
import { HashRouter } from "react-router-dom";
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import Router from "./router/Router";

function App() {
    return (
        <HashRouter>
            <div className="nk-app-root">
                <div className="nk-main">
                    <Sidebar />
                    <div className="nk-wrap">
                        <Header />
                        <div className="nk-content">
                            <Router />
                        </div>

                    </div>
                </div>
            </div>
        </HashRouter>
    );
}

export default App;

if (document.getElementById("app")) {
    ReactDOM.render(<App />, document.getElementById("app"));
}
