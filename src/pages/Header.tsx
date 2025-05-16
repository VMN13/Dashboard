import Assets from '../assets/schedule.svg';
import { Link } from "react-router-dom";
export const Header = () => {
  return (
     
    <div className="header">  
     <div className='header-container'>
      <Link to="/">
      <h1>
        Dasboard Panel
        <img className='logo' src={Assets} alt="logo" height={50} width={50} />
      </h1>
      </Link>
      </div>
    </div>
  );
};

export default Header;