import "./App.scss";
import { useState } from "react";
import videoDetails from "./data/video-details.json";
import Header from "./components/Header/Header";
import MainContentArea from "./components/MainContentArea/MainContentArea";

function App() {
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
    <>
      <Header />
      <MainContentArea
        selectedVideo={selectedVideo}
        videos={filteredVideos}
        handleSelectVideo={handleSelectVideo}
      />
    </>
  );
}

export default App;
