import getGifs from "../services/getGifs";
import { useEffect, useState } from "react";
import ListOfGifs from "./ListOfGifs";
import styled from "styled-components";

const GifsSection = styled.section`
  display: grid;
`;

const GifGrid = () => {
  const [gifs, setGifs] = useState([]);

  useEffect(() => {
    getGifs("spiderman").then((res) => {
      const { data } = res;
      setGifs(data);
    });
  }, []);

  return (
    <GifsSection>
      {gifs.length !== 0 ? <ListOfGifs gifs={gifs} /> : null}
    </GifsSection>
  );
};

export default GifGrid;
