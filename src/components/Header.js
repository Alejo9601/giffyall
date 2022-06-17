import SearchBar from "./SearchBar";
import styled from "styled-components";

const HeaderSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const HomeTitle = styled.h1`
  color: #00b7a8;
  font-size: 5rem;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  font-style: italic;
  text-shadow: -3px 3px black;
  margin-top: 30px;
`;

const Header = () => {
  return (
    <HeaderSection>
      <HomeTitle>Giffyall</HomeTitle>
      <SearchBar />
    </HeaderSection>
  );
};

export default Header;
