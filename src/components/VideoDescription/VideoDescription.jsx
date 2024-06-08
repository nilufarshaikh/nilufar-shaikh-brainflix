import "./VideoDescription.scss";
import views from "../../assets/icons/views.svg";
import likes from "../../assets/icons/likes.svg";

const VideoDescription = ({ selectedVideo }) => {
  const date = new Date(selectedVideo.timestamp).toLocaleDateString("en-US", {
    year: "numeric",
    month: "numeric",
    day: "numeric",
  });

  return (
    <section className="video">
      <h1 className="video__title">{selectedVideo.title}</h1>
      <hr className="divider divider--headline" />
      <article className="video__info">
        <div className="video__stats">
          <h3 className="video__author">By {selectedVideo.channel}</h3>
          <p className="video__upload-date">{date}</p>
        </div>
        <div className="video__stats">
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
      <hr className="divider divider" />
      <p className="video__content">{selectedVideo.description}</p>
    </section>
  );
};

export default VideoDescription;
