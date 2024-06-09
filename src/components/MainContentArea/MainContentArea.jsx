import "./MainContentArea.scss";
import VideoPlayer from "../VideoPlayer/VideoPlayer";
import VideoInfo from "../VideoInfo/VideoInfo";

const MainContentArea = ({ selectedVideo, videos, handleSelectVideo }) => {
  return (
    <main className="main">
      <VideoPlayer selectedVideo={selectedVideo} />
      <VideoInfo
        selectedVideo={selectedVideo}
        videos={videos}
        handleSelectVideo={handleSelectVideo}
      />
    </main>
  );
};

export default MainContentArea;
