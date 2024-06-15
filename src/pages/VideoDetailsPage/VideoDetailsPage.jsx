import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import Comments from "../../components/Comments/Comments";
import DescriptionBox from "../../components/DescriptionBox/DescriptionBox";
import NextVideoNav from "../../components/NextVideoNav/NextVideoNav";
import VideoPlayer from "../../components/VideoPlayer/VideoPlayer";

import "./VideoDetailsPage.scss";

const VideoDetailsPage = () => {
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);
  const { videoId } = useParams();

  const API_URL = "https://unit-3-project-api-0a5620414506.herokuapp.com";
  const API_KEY = "09187f07-f407-42d7-af19-75b70c181c1f";

  useEffect(() => {
    const getVideos = async () => {
      try {
        const response = await axios.get(
          `${API_URL}/videos?api_key=${API_KEY}`
        );
        setVideos(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    getVideos();
  }, []);

  let filteredVideos = [];
  let selectedVideoId = null;

  if (videos.length !== 0) {
    selectedVideoId = videoId || videos[0].id;

    filteredVideos = videos.filter((video) => {
      return selectedVideoId !== video.id;
    });
  }

  useEffect(() => {
    const getSelectedVideo = async () => {
      try {
        if (videos.length !== 0 && !videoId) {
          let response = await axios.get(
            `${API_URL}/videos/${videos[0].id}?api_key=${API_KEY}`
          );
          setSelectedVideo(response.data);
        }
      } catch (error) {
        console.log(error);
      }
    };

    getSelectedVideo();
  }, [videos]);

  useEffect(() => {
    const getSingleVideo = async () => {
      try {
        if (videoId) {
          let response = await axios.get(
            `${API_URL}/videos/${videoId}?api_key=${API_KEY}`
          );
          setSelectedVideo(response.data);
        }
      } catch (error) {
        console.log(error);
      }
    };

    getSingleVideo();
  }, [videoId]);

  if (videos.length === 0) {
    return <p>Loading...</p>;
  }

  return (
    <main className="main">
      <VideoPlayer selectedVideo={selectedVideo} />
      <section className="video-info">
        <div className="video-info__selected">
          <DescriptionBox selectedVideo={selectedVideo} />
          <Comments selectedVideo={selectedVideo} />
        </div>
        <div className="video-info__next">
          <NextVideoNav videos={filteredVideos} />
        </div>
      </section>
    </main>
  );
};

export default VideoDetailsPage;
