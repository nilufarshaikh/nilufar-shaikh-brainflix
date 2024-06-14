import { Link } from "react-router-dom";

import "./NextVideoNav.scss";

const NextVideoNav = ({ videos }) => {
  return (
    <div className="next-video">
      <h3 className="next-video__label">NEXT VIDEOS</h3>
      {videos.map((video) => (
        <Link
          to={`/videos/${video.id}`}
          className="plant-nav__link"
          key={video.id}
        >
          <article className="next-video__item">
            <video
              className="next-video__link"
              src={video.video}
              poster={video.image}
            ></video>
            <div className="next-video__info">
              <h3 className="next-video__title">{video.title}</h3>
              <p className="next-video__author">{video.channel}</p>
            </div>
          </article>
        </Link>
      ))}
    </div>
  );
};

export default NextVideoNav;
