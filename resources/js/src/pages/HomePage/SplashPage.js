import React from "react";
import { Link, useNavigate } from "react-router-dom";
import ClassCard from "../../components/Cards/ClassCard";

function SplashPage() {
  const navigate = useNavigate();

  return (
    <div className="nk-content-body">
      <h2>This is home page</h2>
      <Link to="/login" className="btn btn-primary">Login</Link>
      <Link to="/courses" className="btn btn-primary ml-3">Go to Course Page</Link>
    </div>
  );
}

export default SplashPage;
