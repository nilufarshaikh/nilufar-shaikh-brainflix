import "./NextVideoNav.scss";

const NextVideoNav = ({ videos, handleSelectVideo }) => {
  return (
    <div>
      <label>NEXT VIDEO</label>
      {videos.map((video) => (
        <article className="next-video" key={video.id}>
          <div
            className="next-video__item"
            onClick={() => handleSelectVideo(video.id)}
          >
            <div className="next-video__wrapper">
              <video
                className="next-video__link"
                src={video.video}
                poster={video.image}
              ></video>
            </div>
            <div className="next-video__details">
              <h3 className="next-video__title">{video.title}</h3>
              <p className="next-video__author">{video.channel}</p>
            </div>
          </div>
        </article>
      ))}
    </div>
  );
};

export default NextVideoNav;
