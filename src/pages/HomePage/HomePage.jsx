import axios from "axios";
import { useEffect, useState } from "react";
import { useParams, Navigate } from "react-router-dom";

import "./HomePage.scss";

import Header from "../../components/Header/Header";
import VideoPlayer from "../../components/VideoPlayer/VideoPlayer";
import NextVideoNav from "../../components/NextVideoNav/NextVideoNav";
import VideoInfo from "../../components/VideoInfo/VideoInfo";

const HomePage = () => {
  const API_URL = import.meta.env.VITE_API_URL;
  const API_KEY = import.meta.env.VITE_API_KEY;

  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);
  const { videoId } = useParams();

  useEffect(() => {
    const getVideos = async () => {
      try {
        const response = await axios.get(
          `${API_URL}/videos?api_key=${API_KEY}`
        );
        setVideos(response.data);
        setSelectedVideo(response.data[0]);
      } catch (error) {
        console.log(error);
      }
    };

    getVideos();
  }, []);

  let selectedVideoId = videoId || videos[0]?.id;

  useEffect(() => {
    const getSingleVideo = async (selectedVideoId) => {
      try {
        let response = await axios.get(
          `${API_URL}/videos/${selectedVideoId}?api_key=${API_KEY}`
        );
        setSelectedVideo(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    if (selectedVideoId) {
      getSingleVideo(selectedVideoId);
    }
  }, [videoId]);

  const filteredVideos = videos.filter((video) => {
    return selectedVideoId !== video.id;
  });

  if (videos.length === 0) {
    return <div className="loader">Loading...</div>;
  }

  if (!videos.find((video) => video.id === selectedVideoId)) {
    return <Navigate to="/" />;
  }

  return (
    <>
      <Header />
      <main className="main">
        <VideoPlayer selectedVideo={selectedVideo} />
        <section className="video-info">
          <VideoInfo
            selectedVideoId={selectedVideoId}
            selectedVideo={selectedVideo}
          />
          <div className="video-info__next">
            <NextVideoNav videos={filteredVideos} />
          </div>
        </section>
      </main>
    </>
  );
};

export default HomePage;
