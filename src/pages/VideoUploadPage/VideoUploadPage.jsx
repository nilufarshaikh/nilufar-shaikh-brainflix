import axios from "axios";
import Header from "../../components/Header/Header";
import publishIcon from "../../assets/icons/publish.svg";
import { useNavigate } from "react-router-dom";
import videoThumbnail from "../../assets/images/Upload-video-preview.jpg";

import "./VideoUploadPage.scss";

const VideoUploadPage = () => {
  const navigate = useNavigate();
  const API_URL = import.meta.env.VITE_API_URL;
  const API_KEY = import.meta.env.VITE_API_KEY;

  const uploadVideo = async (eventRec) => {
    try {
      const response = await axios.post(
        `${API_URL}/videos?api_key=${API_KEY}`,
        {
          title: eventRec.target.name.value,
          description: eventRec.target.name.value,
          image: `${API_URL}/images/thumbnail.jpg`,
        }
      );

      if (response.status === 201) {
        eventRec.target.reset();
        alert("Your upload was successful!");
        navigate("/");
      } else {
        alert("Your upload failed!");
      }
    } catch (error) {
      console.log("Error", error);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    uploadVideo(event);
  };

  return (
    <>
      <Header />
      <main>
        <hr className="divider" />
        <section className="video-upload">
          <h1 className="video-upload__heading">Upload Video</h1>
          <hr className="divider divider--big" />
          <form onSubmit={handleSubmit} className="video-upload__form">
            <div className="video-upload__container">
              <div className="video-upload__left">
                <label className="video-upload__label" htmlFor="thumbnail">
                  VIDEO THUMBNAIL
                </label>
                <div className="video-upload__thumbnail-wrapper">
                  <img
                    src={videoThumbnail}
                    alt="Video thumbnail"
                    className="video-upload__thumbnail"
                  />
                </div>
              </div>
              <div className="video-upload__right">
                <label className="video-upload__label" htmlFor="title">
                  TITLE YOUR VIDEO
                </label>
                <input
                  className="video-upload__input"
                  type="text"
                  name="title"
                  id="title"
                  placeholder="Add a title to your video"
                />
                <label className="video-upload__label" htmlFor="description">
                  ADD A VIDEO DESCRIPTION
                </label>
                <textarea
                  className="video-upload__textarea"
                  name="description"
                  id="description"
                  placeholder="Add a description to your video"
                ></textarea>
              </div>
            </div>
            <hr className="divider divider--big" />
            <div className="button__wrapper">
              <button className="button button--publish">
                <img
                  className="button__icon"
                  src={publishIcon}
                  alt="Publish Icon"
                />
                <span className="button__text">PUBLISH</span>
              </button>
              <button type="button" className="button button--cancel">
                <span className="button__text">CANCEL</span>
              </button>
            </div>
          </form>
        </section>
      </main>
    </>
  );
};

export default VideoUploadPage;
