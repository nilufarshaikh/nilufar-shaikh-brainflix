import "./DescriptionBox.scss";
import views from "../../assets/icons/views.svg";
import likes from "../../assets/icons/likes.svg";

const DescriptionBox = ({ selectedVideo }) => {
  const date = new Date(selectedVideo.timestamp).toLocaleDateString("en-US", {
    year: "numeric",
    month: "numeric",
    day: "numeric",
  });

  return (
    <section className="description-box">
      <h1 className="description-box__title">{selectedVideo.title}</h1>
      <hr className="divider divider--headline" />
      <article className="description-box__info">
        <div className="description-box__stats">
          <h3 className="description-box__author">
            By {selectedVideo.channel}
          </h3>
          <p className="description-box__upload-date">{date}</p>
        </div>
        <div className="description-box__stats">
          <p className="video-stats">
            <img
              className="video-stats__icon"
              src={views}
              alt="Views on Video Image"
            />
            <span className="video-stat__number">{selectedVideo.views}</span>
          </p>
          <p className="video-stats">
            <img
              className="video-stats__icon"
              src={likes}
              alt="Likes on Video Image"
            />
            <span className="video-stats__number">{selectedVideo.likes}</span>
          </p>
        </div>
      </article>
      <hr className="divider" />
      <p className="description-box__content">{selectedVideo.description}</p>
    </section>
  );
};

export default DescriptionBox;
