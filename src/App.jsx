import "./App.scss";
import { useState } from "react";
import videoDetails from "./data/video-details.json";
import Header from "./components/Header/Header";
import VideoDetails from "./components/VideoDetails/VideoDetails";
import VideoDescription from "./components/VideoDescription/VideoDescription";
import Comments from "./components/Comments/Comments";
import NextVideoNav from "./components/NextVideoNav/NextVideoNav";

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
      <main className="container">
        <VideoDetails selectedVideo={selectedVideo} />
        <section className="main">
          <div className="selected-video-info">
            <VideoDescription selectedVideo={selectedVideo} />
            <Comments selectedVideo={selectedVideo} />
          </div>
          <div className="next-video-nav">
            <NextVideoNav
              videos={filteredVideos}
              handleSelectVideo={handleSelectVideo}
            />
          </div>
        </section>
      </main>
    </>
  );
}

export default App;
