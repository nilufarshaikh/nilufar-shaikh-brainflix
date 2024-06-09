import "./VideoInfo.scss";
import DescriptionBox from "../DescriptionBox/DescriptionBox";
import Comments from "../Comments/Comments";
import NextVideoNav from "../NextVideoNav/NextVideoNav";

const VideoInfo = ({ selectedVideo, videos, handleSelectVideo }) => {
  return (
    <section className="video-info">
      <div className="video-info__selected">
        <DescriptionBox selectedVideo={selectedVideo} />

        <Comments selectedVideo={selectedVideo} />
      </div>

      <div className="video-info__next">
        <NextVideoNav videos={videos} handleSelectVideo={handleSelectVideo} />
      </div>
    </section>
  );
};

export default VideoInfo;
