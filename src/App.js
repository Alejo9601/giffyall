import Home from "./pages/Home";
import styled from "styled-components";

const GifApp = styled.div`
  background-color: #4a47a3;
`;

function App() {
  return (
    <GifApp>
      <Home />
    </GifApp>
  );
}

export default App;
