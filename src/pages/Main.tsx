import React from "react";
import { Link } from "react-router-dom";

export const MainPage = () => {
  return (
    <div className="main">
      <div>
      <Link 
        className="link" 
        to="/deliveries">Deliveries
      </Link>
      </div>
      <div>
      <Link 
        className="link" 
        to="/">Dashboard
      </Link>
      </div>
    </div>
  );
};

export default MainPage;