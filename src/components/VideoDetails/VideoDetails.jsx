import "./VideoDetails.scss";

const VideoDetails = ({ selectedVideo }) => {
  return (
    <div className="hero">
      <video
        controls
        className="hero__video-link"
        poster={selectedVideo.image}
        src={selectedVideo.video}
      >
        <p>Your browser doesn't support HTML video.</p>
      </video>
    </div>
  );
};

export default VideoDetails;
