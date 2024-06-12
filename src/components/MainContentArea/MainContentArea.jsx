import "./MainContentArea.scss";
import { useState } from "react";
import videoDetails from "../../data/video-details.json";
import VideoPlayer from "../VideoPlayer/VideoPlayer";
import VideoInfo from "../VideoInfo/VideoInfo";

const MainContentArea = () => {
  const [videos, setVideos] = useState(videoDetails);
  const [selectedVideo, setSelectedVideo] = useState(videoDetails[0]);

  const handleSelectVideo = (clickedId) => {
    const foundVideo = videoDetails.find((video) => clickedId === video.id);
    setSelectedVideo(foundVideo);
  };

  const filteredVideos = videos.filter(
    (video) => video.id !== selectedVideo.id
  );

  return (
    <main className="main">
      <VideoPlayer selectedVideo={selectedVideo} />
      <VideoInfo
        selectedVideo={selectedVideo}
        videos={filteredVideos}
        handleSelectVideo={handleSelectVideo}
      />
    </main>
  );
};

export default MainContentArea;
