import GifsRender from "./GifsRender";
import styled from "styled-components";
import useGifs from "../hooks/useGifs";
import Visor from "./Visor";
import GifsTitle from "./GifsTitle";

const GifsSection = styled.section`
  display: grid;
  min-height: 100vh;
  margin-top: 50px;
  margin: 50px auto 0 auto;
  grid-template-rows: masonry;

  @media (min-width: 800px) {
    grid-template-columns: 400px 400px;
  }

  @media (min-width: 1366px) {
    grid-template-columns: 400px 400px 400px;
  }
`;

const GifGrid = ({ gifsFor }) => {
  const { allGifs, getGifs } = useGifs(gifsFor);

  return (
    <GifsSection>
      <GifsTitle title={gifsFor}></GifsTitle>
      {allGifs.length !== 0 ? (
        <>
          <GifsRender gifs={allGifs} />
          <Visor toDoWhenReached={getGifs} />
        </>
      ) : null}
    </GifsSection>
  );
};

export default GifGrid;
