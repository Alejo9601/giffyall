import Home from "./pages/Home";
import styled from "styled-components";
import { SearchContextProvider } from "./context/SearchContext";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SearchResults from "./pages/SearchResults";

const GifApp = styled.div`
  background-color: #5b4b8a;
  min-width: 100vw;
`;

function App() {
  return (
    <BrowserRouter>
      <SearchContextProvider>
        <GifApp>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/search/:term" element={<SearchResults />} />
          </Routes>
        </GifApp>
      </SearchContextProvider>
    </BrowserRouter>
  );
}

export default App;
