import { useParams } from "react-router-dom";
import styled from "styled-components";
import Loader from "../components/Loader";
import useSingleGif from "../hooks/useSingleGif";

const DetailSection = styled.section`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Wrapper = styled.div``;

const Figure = styled.figure`
  display: flex;
  flex-direction: column;
  align-items: center;

  figcaption {
    color: white;
    font-size: 1.2rem;
    margin-top: 5px;
    font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  }
`;

const GifDetail = () => {
  const { gifId } = useParams();
  const gif = useSingleGif(gifId);

  return (
    <DetailSection>
      <Wrapper>
        {Object.keys(gif).length !== 0 ? (
          <Figure>
            <img src={gif.images.downsized_medium.url} />
            <figcaption>{gif.title}</figcaption>
          </Figure>
        ) : (
          <Loader />
        )}
      </Wrapper>
    </DetailSection>
  );
};

export default GifDetail;
