import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import VideoDetailsPage from "./pages/VideoDetailsPage/VideoDetailsPage";
import UploadVideoPage from "./pages/UploadVideoPage/UploadVideoPage";
import PageNotFound from "./pages/PageNotFound/PageNotFound";

import Header from "./components/Header/Header";

function App() {
  return (
    <>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<VideoDetailsPage />}>
            <Route path="/videos/:videoId" element={<VideoDetailsPage />} />
          </Route>
          <Route path="/upload-video" element={<UploadVideoPage />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
