import SearchContextProvider from "store/store";
import GlobalStyle from "styles/globalStyles";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import TracksPage from "pages/TrackPage";
import ArtistPage from "pages/AlbumPage";

function App() {
  return (
    <Router>
      <SearchContextProvider>
        <GlobalStyle />
        <Routes>
          <Route path="/" element={<TracksPage />} />
          <Route path="/:albumId" element={<ArtistPage />} />
        </Routes>
      </SearchContextProvider>
    </Router>
  );
}

export default App;
