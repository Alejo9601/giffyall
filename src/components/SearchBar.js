import { useRef } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

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
  const inputRef = useRef();
  const navigation = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigation(`/search/${inputRef.current.value}`);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <StyledSearchBar
        ref={inputRef}
        type="search"
        name="search"
        placeholder="make a gif search here..."
      />
      <StyledButton type="submit" name="submit" value="SEARCH" />
    </Form>
  );
};

export default SearchBar;
