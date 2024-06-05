import "./Profile.scss";
import profileIcon from "../../assets/images/Mohan-muruge.jpg";

const Profile = () => {
  return (
    <div className="profile">
      <img className="profile__image" src={profileIcon} alt="Profile Icon" />
    </div>
  );
};

export default Profile;
