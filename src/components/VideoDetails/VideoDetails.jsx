import "./VideoDetails.scss";
import playBtn from "../../assets/icons/play.svg";
import fullScreenBtn from "../../assets/icons/fullscreen.svg";
import volumeBtn from "../../assets/icons/volume_up.svg";

const VideoDetails = ({ selectedVideo }) => {
  return (
    <div className="hero">
      <video
        className="hero__video-link"
        poster={selectedVideo.image}
        src={selectedVideo.video}
      >
        <p>Your browser doesn't support HTML video.</p>
      </video>
      <div className="hero__video-controls">
        <img
          className="video-control video-control--play"
          src={playBtn}
          alt="Play Button"
        />
        <div className="video-control video-control--scrubbing">
          <div className="video-control__progress-bar"></div>
          <span className="video-control__duration">
            0.00/{selectedVideo.duration}
          </span>
        </div>
        <div className="video-control video-control--other">
          <img
            className="video-control__icon"
            src={fullScreenBtn}
            alt="Full Screen Button"
          />
          <img
            className="video-control__icon"
            src={volumeBtn}
            alt="Volume Button"
          />
        </div>
      </div>
    </div>
  );
};

export default VideoDetails;
