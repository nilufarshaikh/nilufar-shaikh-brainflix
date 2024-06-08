import "./VideoDetails.scss";
import playBtn from "../../assets/icons/play.svg";
import fullScreenBtn from "../../assets/icons/fullscreen.svg";
import volumeBtn from "../../assets/icons/volume_up.svg";

const VideoDetails = ({ selectedVideo }) => {
  return (
    <div className="hero">
      <video
        className="hero__video"
        poster={selectedVideo.image}
        src={selectedVideo.video}
      >
        <p>Your browser doesn't support HTML video.</p>
      </video>
      <div className="video__controls">
        <img className="play" src={playBtn} alt="Play Button" />
        <div className="progress">
          <progress className="progress__bar" value="0" max="100"></progress>
          <span className="video__duration">0.00/{selectedVideo.duration}</span>
        </div>
        <div className="controls">
          <img className="fullscreen" src={fullScreenBtn} alt="Play Button" />
          <img className="volume" src={volumeBtn} alt="Play Button" />
        </div>
      </div>
    </div>
  );
};

export default VideoDetails;
