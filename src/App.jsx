import "./App.scss";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import HomePage from "./pages/HomePage/HomePage";
import VideoUploadPage from "./pages/VideoUploadPage/VideoUploadPage";
import PageNotFound from "./pages/PageNotFound/PageNotFound";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />}>
          <Route path="/videos/:videoId" element={<HomePage />} />
        </Route>
        <Route path="/upload" element={<VideoUploadPage />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
