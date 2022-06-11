import SearchBar from "./SearchBar";
import styled from "styled-components";

const HeaderSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const HomeTitle = styled.h1`
  color: #00b7a8;
  font-size: 3rem;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  font-style: italic;
  text-shadow: -3px 3px black;
`;

const Header = () => {
  return (
    <HeaderSection>
      <HomeTitle>Giffall</HomeTitle>
      <SearchBar />
    </HeaderSection>
  );
};

export default Header;
