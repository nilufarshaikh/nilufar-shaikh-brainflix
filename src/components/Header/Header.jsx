import "./Header.scss";
import Logo from "../Logo/Logo";
import Search from "../Search/Search";
import UploadButton from "../UploadButton/UploadButton";
import Profile from "../Profile/Profile";

const Header = () => {
  return (
    <header className="header">
      <Logo />
      <Search />
      <UploadButton />
      <Profile />
    </header>
  );
};

export default Header;
