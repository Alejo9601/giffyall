import GifsRender from "./GifsRender";
import styled from "styled-components";
import useGifs from "../hooks/useGifs";
import Visor from "./Visor";

const GifsSection = styled.section`
  display: grid;
  min-height: 100vh;
`;

const GifGrid = () => {
  const { gifs, getGifs } = useGifs();

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
