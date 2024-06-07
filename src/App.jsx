import "./App.scss";
import { useState } from "react";
import Header from "./components/Header/Header";
import VideoDescription from "./components/VideoDescription/VideoDescription";
import Comments from "./components/Comments/Comments";
import videoDetails from "./data/video-details.json";

function App() {
  const [selectedVideo, setSelectedVideo] = useState(videoDetails[0]);

  return (
    <>
      <Header />
      <VideoDescription />
      <Comments selectedVideo={selectedVideo} />
    </>
  );
}

export default App;
