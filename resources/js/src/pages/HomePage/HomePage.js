import React from "react";
import { useNavigate } from "react-router-dom";

function HomePage() {
    const navigate = useNavigate();

    return (
        <div className="container-fluid">
            <h1>Home Page</h1>
        </div>
    );
}

export default HomePage;
