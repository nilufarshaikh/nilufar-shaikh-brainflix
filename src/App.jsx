import "./App.scss";
import { useState } from "react";
import Header from "./components/Header/Header";
import VideoDescription from "./components/VideoDescription/VideoDescription";
import Comments from "./components/Comments/Comments";
import videoData from "./data/video-details.json";

function App() {
  const [currentVideo, setCurrentVideo] = useState(videoData[0]);

  return (
    <>
      <Header />
      <VideoDescription />
      <Comments currentVideo={currentVideo} />
    </>
  );
}

export default App;
