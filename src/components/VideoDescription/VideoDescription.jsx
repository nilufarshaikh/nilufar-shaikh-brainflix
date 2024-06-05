import "./VideoDescription.scss";
import views from "../../assets/icons/views.svg";
import likes from "../../assets/icons/likes.svg";

const VideoDescription = () => {
  return (
    <section className="video">
      <h1 className="video__title">The Future of Artificial Intelligence</h1>
      <hr className="divider divider--headline" />
      <article className="video__info">
        <div className="video__stats">
          <h3 className="video__author">By Aiden Thompson</h3>
          <p className="video__upload-date">8/8/2023</p>
        </div>
        <div className="video__stats">
          <p className="video-stats">
            <img
              className="video-stats__icon"
              src={views}
              alt="Views on Video Image"
            />
            <span className="video-stat__number">980,544</span>
          </p>
          <p className="video-stats">
            <img
              className="video-stats__icon"
              src={likes}
              alt="Likes on Video Image"
            />
            <span className="video-stats__number">22,479</span>
          </p>
        </div>
      </article>
      <hr className="divider divider" />
      <p className="video__content">
        Explore the cutting-edge developments and predictions for Artificial
        Intelligence in the coming years. From revolutionary breakthroughs in
        machine learning to the ethical considerations influencing AI
        advancements, this exploration transcends the boundaries of mere
        speculation. Join us on a journey that navigates the intricate interplay
        between innovation, ethics, and the ever-evolving tech frontier.
      </p>
    </section>
  );
};

export default VideoDescription;
