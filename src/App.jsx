import "./App.scss";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import VideoDetailsPage from "./pages/VideoDetailsPage/VideoDetailsPage";
import VideoUploadPage from "./pages/VideoUploadPage/VideoUploadPage";
import PageNotFound from "./pages/PageNotFound/PageNotFound";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<VideoDetailsPage />}>
          <Route path="/videos/:videoId" element={<VideoDetailsPage />} />
        </Route>
        <Route path="/upload" element={<VideoUploadPage />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
