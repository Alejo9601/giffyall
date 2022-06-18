import { useRef } from "react";
import styled from "styled-components";
import useRandomColor from "../hooks/useRandomColor";

const GifContainer = styled.div`
  margin: 5px;
  padding: 5px;
  align-self: flex-start;
`;
const Figure = styled.figure`
  display: flex;
  flex-direction: column;
  align-items: center;

  figcaption {
    color: white;
    font-size: 1.2rem;
    margin-top: 5px;
  }
`;
const GifImg = styled.img`
  height: auto;
  width: 350px;
  object-fit: cover;
  border-radius: 5px;
  border: 3px solid transparent;
`;

const Gif = ({ gifSrc, gifTitle }) => {
  const lineColor = useRandomColor();
  const imgRef = useRef();

  const handleMouseOver = () => {
    imgRef.current.style.border = `3px solid ${lineColor}`;
  };

  const handleMouseLeave = () => {
    imgRef.current.style.border = `3px solid transparent`;
  };

  return (
    <GifContainer className="container" id="gif">
      <Figure>
        <GifImg
          ref={imgRef}
          onMouseEnter={handleMouseOver}
          onMouseLeave={handleMouseLeave}
          src={gifSrc}
          alt={gifTitle}
        ></GifImg>
        <figcaption>{gifTitle}</figcaption>
      </Figure>
    </GifContainer>
  );
};

export default Gif;
