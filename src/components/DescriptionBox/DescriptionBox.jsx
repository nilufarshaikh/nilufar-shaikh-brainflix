import likes from "../../assets/icons/likes.svg";
import views from "../../assets/icons/views.svg";

import "./DescriptionBox.scss";

const DescriptionBox = ({ video }) => {
  if (video === null) {
    return;
  }

  const convertDate = (timestamp) => {
    const date = new Date(timestamp).toLocaleDateString("en-US", {
      year: "numeric",
      month: "numeric",
      day: "numeric",
    });

    return date;
  };

  return (
    <section className="description-box">
      <h1 className="description-box__title">{video.title}</h1>
      <hr className="divider divider--headline" />
      <article className="description-box__info">
        <div className="description-box__stats">
          <h3 className="description-box__author">By {video.channel}</h3>
          <p className="description-box__upload-date">
            {convertDate(video.timestamp)}
          </p>
        </div>
        <div className="description-box__stats">
          <p className="video-stats">
            <img
              className="video-stats__icon"
              src={views}
              alt="Views on Video Image"
            />
            <span className="video-stat__number">{video.views}</span>
          </p>
          <p className="video-stats">
            <img
              className="video-stats__icon"
              src={likes}
              alt="Likes on Video Image"
            />
            <span className="video-stats__number">{video.likes}</span>
          </p>
        </div>
      </article>
      <hr className="divider" />
      <p className="description-box__content">{video.description}</p>
    </section>
  );
};

export default DescriptionBox;
