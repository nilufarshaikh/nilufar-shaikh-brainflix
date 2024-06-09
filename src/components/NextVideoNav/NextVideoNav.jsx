import "./NextVideoNav.scss";

const NextVideoNav = ({ videos, handleSelectVideo }) => {
  return (
    <div className="next-video">
      <h3 className="next-video__label">NEXT VIDEOS</h3>
      {videos.map((video) => (
        <article
          className="next-video__item"
          key={video.id}
          onClick={() => handleSelectVideo(video.id)}
        >
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
      ))}
    </div>
  );
};

export default NextVideoNav;
