import { useRef } from "react";
import styled from "styled-components";
import { trimText } from "../helpers/trimText";
import useRandomColor from "../hooks/useRandomColor";
import { useNavigate } from "react-router-dom";

const GifContainer = styled.div`
  margin: 5px;
  padding: 5px;
  align-self: center;
`;
const Figure = styled.figure`
  display: flex;
  flex-direction: column;
  align-items: center;

  :hover {
    cursor: pointer;
  }

  figcaption {
    color: white;
    font-size: 1.2rem;
    margin-top: 5px;
    font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  }
`;
const GifImg = styled.img`
  height: auto;
  width: 350px;
  object-fit: cover;
  border-radius: 5px;
  border: 3px solid transparent;
`;

const Gif = ({ gifId, gifSrc, gifTitle }) => {
  const lineColor = useRandomColor();
  const imgRef = useRef();
  const navigation = useNavigate();

  const handleMouseOver = () => {
    imgRef.current.style.border = `3px solid ${lineColor}`;
  };

  const handleMouseLeave = () => {
    imgRef.current.style.border = `3px solid transparent`;
  };

  const handleClick = () => {
    navigation(`/detail/${gifId}`);
  };

  return (
    <GifContainer onClick={handleClick}>
      <Figure onMouseEnter={handleMouseOver} onMouseLeave={handleMouseLeave}>
        <GifImg ref={imgRef} src={gifSrc} alt={trimText(gifTitle, 25)}></GifImg>
        <figcaption>{trimText(gifTitle, 25)}</figcaption>
      </Figure>
    </GifContainer>
  );
};

export default Gif;
