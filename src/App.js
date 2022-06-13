import Home from "./pages/Home";
import styled from "styled-components";
import { SearchContextProvider } from "./context/SearchContext";

const GifApp = styled.div`
  background-color: #5b4b8a;
  min-width: 100vw;
`;

function App() {
  return (
    <SearchContextProvider>
      <GifApp>
        <Home />
      </GifApp>
    </SearchContextProvider>
  );
}

export default App;
