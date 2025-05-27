import { Link } from "react-router-dom";

export const MainPage = () => {
  return (
    <div className="main">
      <div>
      <Link 
        role="button"
        tabIndex={0}
        className="link" 
        to="/deliveries">Deliveries           
      </Link>
      </div>
      <div>
      <Link 
        role="button"
        tabIndex={1}
        className="link" 
        to="/">Dashboard
      </Link>
      </div>
    </div>
  );
};

export default MainPage;