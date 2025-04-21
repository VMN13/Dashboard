import React from "react";
import { Link } from "react-router-dom";

export const MainPage = () => {
  return (
    <div className="main">
      <Link to="/deliveries">Deliveries</Link>
      <Link to="/">Dashboard</Link>
    </div>
  );
};

export default MainPage;