import axios from "axios";
import { useEffect, useState } from "react";

import "./VideoInfo.scss";

import Comments from "../Comments/Comments";
import DescriptionBox from "../DescriptionBox/DescriptionBox";

const VideoInfo = ({ selectedVideoId, selectedVideo }) => {
  const API_URL = "https://unit-3-project-api-0a5620414506.herokuapp.com";
  const API_KEY = "09187f07-f407-42d7-af19-75b70c181c1f";

  const [video, setVideo] = useState(null);

  useEffect(() => {
    const getSelectedVideo = async () => {
      try {
        let response = await axios.get(
          `${API_URL}/videos/${selectedVideoId}?api_key=${API_KEY}`
        );
        setVideo(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    getSelectedVideo();
  }, [selectedVideo]);

  return (
    <div className="video-info__selected">
      <DescriptionBox video={video} />
      <Comments video={video} />
    </div>
  );
};

export default VideoInfo;
