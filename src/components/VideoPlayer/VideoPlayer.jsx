import "./VideoPlayer.scss";

const VideoPlayer = ({ selectedVideo }) => {
  return selectedVideo ? (
    <section className="video-player video-wrapper">
      <video
        className="video-player__link"
        poster={selectedVideo.image}
        src={selectedVideo.video}
        controls
      >
        <p>Your browser doesn't support HTML video.</p>
      </video>
    </section>
  ) : (
    <></>
  );
};

export default VideoPlayer;
