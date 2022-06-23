import Home from "./pages/Home";
import styled from "styled-components";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SearchResults from "./pages/SearchResults";
import GifDetail from "./pages/GifDetail";
import Header from "./components/Header";
import { GifsContextProvider } from "./context/GifsContext";

const GifApp = styled.div`
  min-width: 100vw;
  display: flex;
  flex-direction: column;
`;

function App() {
  return (
    <BrowserRouter>
      <GifsContextProvider>
        <GifApp>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/search/:term" element={<SearchResults />} />
            <Route path="/detail/:gifId" element={<GifDetail />} />
          </Routes>
        </GifApp>
      </GifsContextProvider>
    </BrowserRouter>
  );
}

export default App;
