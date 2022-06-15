import GifsRender from "./GifsRender";
import styled from "styled-components";
import useGifs from "../hooks/useGifs";
import Visor from "./Visor";

const GifsSection = styled.section`
  display: grid;
  min-height: 100vh;
  margin-top: 50px;
  align-self: center;

  @media (min-width: 800px) {
    grid-template-columns: 400px 400px;
  }

  @media (min-width: 1366px) {
    grid-template-columns: 400px 400px 400px;
  }
`;

const GifGrid = ({ gifsFor }) => {
  const { gifs, getGifs } = useGifs(gifsFor);

  return (
    <GifsSection>
      {gifs.length !== 0 ? (
        <>
          <GifsRender gifs={gifs} />
          <Visor toDoWhenReached={getGifs} />
        </>
      ) : null}
    </GifsSection>
  );
};

export default GifGrid;
