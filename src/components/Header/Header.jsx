import "./Header.scss";

import { Link } from "react-router-dom";
import logo from "../../assets/logo/BrainFlix-logo.svg";
import Search from "../Search/Search";
import profileIcon from "../../assets/images/Mohan-muruge.jpg";
import uploadIcon from "../../assets/icons/upload.svg";

const Header = () => {
  return (
    <header className="header">
      <Link to="/">
        <div className="logo">
          <img className="logo__image" src={logo} alt="BrainFlix Logo" />
        </div>
      </Link>
      <Search />
      <Link to="/upload" className="header__link">
        <button className="button">
          <img className="button__icon" src={uploadIcon} alt="Upload Icon" />
          <span className="button__text">UPLOAD</span>
        </button>
      </Link>
      <div className="profile">
        <img className="profile__image" src={profileIcon} alt="Profile Icon" />
      </div>
    </header>
  );
};

export default Header;
