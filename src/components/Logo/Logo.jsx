import "./Logo.scss";
import logo from "../../assets/logo/brainflix-logo.svg";

const Logo = () => {
  return (
    <div className="logo">
      <img className="logo__image" src={logo} alt="BrainFlix Logo" />
    </div>
  );
};

export default Logo;
