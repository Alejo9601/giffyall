import Home from "./pages/Home";
import styled from "styled-components";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SearchResults from "./pages/SearchResults";

const GifApp = styled.div`
  min-width: 100vw;
  display: flex;
  flex-direction: column;
`;

function App() {
  return (
    <BrowserRouter>
      <GifApp>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/search/:term" element={<SearchResults />} />
        </Routes>
      </GifApp>
    </BrowserRouter>
  );
}

export default App;
