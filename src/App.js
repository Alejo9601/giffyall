import Home from "./pages/Home";
import styled from "styled-components";

const GifApp = styled.div`
  background-color: #5b4b8a;
`;

function App() {
  return (
    <GifApp>
      <Home />
    </GifApp>
  );
}

export default App;
