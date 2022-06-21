import { useParams } from "react-router-dom";
import styled from "styled-components";
import Loader from "../components/Loader";
import useSingleGif from "../hooks/useSingleGif";

const DetailSection = styled.section`
  flex-grow: 1;
  background-color: aliceblue;
`;

const GifDetail = () => {
  const { gifId } = useParams();
  const gif = useSingleGif(gifId);

  return (
    <DetailSection>
      <div>
        {typeof gif !== "undefined" ? (
          <figure>
            <img src={gif.images.original.url} />
            <figcaption>{gif.title}</figcaption>
          </figure>
        ) : (
          <Loader />
        )}
      </div>
    </DetailSection>
  );
};

export default GifDetail;
