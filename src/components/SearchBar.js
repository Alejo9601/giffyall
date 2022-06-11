import styled from "styled-components";

const Form = styled.form`
  display: flex;
  justify-content: center;
  background-color: white;
  margin-top: 20px;
  border-radius: 3px;
  overflow: hidden;
`;
const StyledSearchBar = styled.input`
  width: 290px;
  height: 50px;
  font-size: 1.2rem;
  text-align: center;
  border: 0;
  outline: none;
`;
const StyledButton = styled.input`
  background-color: #34b3f1;
  color: white;
  height: 50px;
  border: 0;
  padding: 5px;
`;

const SearchBar = () => {
  return (
    <Form>
      <StyledSearchBar
        type="search"
        name="search"
        placeholder="make a gif search here..."
      />
      <StyledButton type="submit" name="submit" value="SEARCH" />
    </Form>
  );
};

export default SearchBar;
