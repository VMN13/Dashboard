import Logo from '../public/logo.jpg';
import { Link } from "react-router-dom";
export const Header = () => {
  return (
    <div className="header">  
      <div className='header-container'>
      <Link to="/">
      <h1>
        Dasboard Panel
      </h1>
      </Link>
      </div>
      <div>
      <img className='logo' src={Logo} alt="logo" height={120} width={120} />
      </div>
    </div>
  );
};

export default Header;