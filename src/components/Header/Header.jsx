import "./Header.scss";
import logo from "../../assets/logo/brainflix-logo.svg";
import Search from "../Search/Search";
import UploadButton from "../UploadButton/UploadButton";
import profileIcon from "../../assets/images/Mohan-muruge.jpg";

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <img className="logo__image" src={logo} alt="BrainFlix Logo" />
      </div>
      <Search />
      <UploadButton />
      <div className="profile">
        <img className="profile__image" src={profileIcon} alt="Profile Icon" />
      </div>
    </header>
  );
};

export default Header;
